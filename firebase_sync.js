/**
 * Firebase <-> LocalStorage Transparent Sync Layer
 * Gracefully degrades to purely local operation if Firebase is offline or not loaded.
 */

const DB_KEYS = [
    'cyberCafeServices', 'cyberCafeServicesInit', 'cyberCafeProfile', 'cyberCafeCategories', 
    'cyberCafeOperators', 'cyberCafeMembershipPayments', 'cyberThemeColor', 
    'cyberPopupConfig', 'cyberCafeAlert', 'cyberNotesConfig', 'cyberCafeVisits', 
    'cyberCafePayments', 'cyberCafeActivities', 'cyberCafeMessages', 'cyberCafeLedger', 'cyberCafePwd',
    'cyberHighlightConfig', 'cyberOpenAiKey'
];

let isSyncingFromFirebase = false;

// 1. Hook into Firebase value changes on individual keys
if (typeof db !== 'undefined' && db !== null) {
    DB_KEYS.forEach(key => {
        db.ref(key).on('value', (snap) => {
            if (isSyncingFromFirebase) return; // Prevent recursive trigger
            
            const val = snap.val();
            if (val !== undefined && val !== null) {
                let valStr = typeof val === 'string' ? val : JSON.stringify(val);
                if (localStorage.getItem(key) !== valStr) {
                    isSyncingFromFirebase = true;
                    try {
                        originalSetItem.call(localStorage, key, valStr);
                        // Trigger an event for UI to update
                        document.dispatchEvent(new CustomEvent('firebaseSynced', { detail: { key: key } }));
                    } catch (e) {
                        console.error(`Error updating local key ${key}:`, e);
                    } finally {
                        isSyncingFromFirebase = false;
                    }
                }
            }
        });
    });

    // 2. Initial Migration (Local -> Firebase)
    db.ref('/').once('value').then(snapshot => {
        if (!snapshot.exists() || !snapshot.val().cyberCafeServicesInit) {
            // Firebase is empty. Migrate local data to the cloud.
            console.log("Migrating local data to Firebase...");
            let updates = {};
            DB_KEYS.forEach(key => {
                let val = localStorage.getItem(key);
                if (val !== null) {
                    try { 
                        updates[key] = JSON.parse(val); 
                    } catch(e) { 
                        updates[key] = val; 
                    }
                }
            });
            if (Object.keys(updates).length > 0) {
                db.ref('/').update(updates);
            }
        }
    });
}

// 3. Intercept localStorage.setItem
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (DB_KEYS.includes(key) && !isSyncingFromFirebase) {
        const adminOnlyKeys = [
            'cyberCafeServices', 'cyberCafeServicesInit', 'cyberCafeCategories', 
            'cyberThemeColor', 'cyberPopupConfig', 'cyberCafeAlert', 'cyberNotesConfig', 
            'cyberHighlightConfig', 'cyberOpenAiKey', 'cyberCafePwd'
        ];
        
        let shouldSync = true;
        if (adminOnlyKeys.includes(key)) {
            let isAdmin = false;
            try {
                if (document.getElementById('backendApp') || document.title.toLowerCase().includes('backend')) {
                    isAdmin = true;
                } else {
                    const auth = JSON.parse(sessionStorage.getItem('cyberCafeAuth'));
                    if (auth && auth.role === 'admin') {
                        isAdmin = true;
                    }
                }
            } catch(e) {}
            if (!isAdmin) {
                shouldSync = false;
            }
        }

        if (shouldSync && typeof db !== 'undefined' && db !== null) {
            let parsedVal = value;
            try { parsedVal = JSON.parse(value); } catch(e) {}
            db.ref(key).set(parsedVal).catch(err => console.error("Firebase Sync Error:", err));
        }
        // Dispatch local event immediately to update UI in current tab
        document.dispatchEvent(new CustomEvent('firebaseSynced', { detail: { key: key } }));
    }
};

// 4. Intercept localStorage.removeItem
const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.apply(this, arguments);
    if (DB_KEYS.includes(key) && !isSyncingFromFirebase) {
        const adminOnlyKeys = [
            'cyberCafeServices', 'cyberCafeServicesInit', 'cyberCafeCategories', 
            'cyberThemeColor', 'cyberPopupConfig', 'cyberCafeAlert', 'cyberNotesConfig', 
            'cyberHighlightConfig', 'cyberOpenAiKey', 'cyberCafePwd'
        ];
        
        let shouldSync = true;
        if (adminOnlyKeys.includes(key)) {
            let isAdmin = false;
            try {
                if (document.getElementById('backendApp') || document.title.toLowerCase().includes('backend')) {
                    isAdmin = true;
                } else {
                    const auth = JSON.parse(sessionStorage.getItem('cyberCafeAuth'));
                    if (auth && auth.role === 'admin') {
                        isAdmin = true;
                    }
                }
            } catch(e) {}
            if (!isAdmin) {
                shouldSync = false;
            }
        }

        if (shouldSync && typeof db !== 'undefined' && db !== null) {
            db.ref(key).remove().catch(err => console.error("Firebase Sync Error:", err));
        }
        // Dispatch local event immediately to update UI in current tab
        document.dispatchEvent(new CustomEvent('firebaseSynced', { detail: { key: key } }));
    }
};

// 5. Native cross-tab storage changes (Only dispatch UI event, never set to Firebase)
window.addEventListener('storage', (e) => {
    if (DB_KEYS.includes(e.key) && e.newValue !== null && !isSyncingFromFirebase) {
        // Dispatch local event immediately to update UI in current tab
        document.dispatchEvent(new CustomEvent('firebaseSynced', { detail: { key: e.key } }));
    }
});

