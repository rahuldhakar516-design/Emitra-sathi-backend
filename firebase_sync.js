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

// 1. Hook into Firebase value changes
if (typeof db !== 'undefined' && db !== null) {
    db.ref('/').on('value', (snap) => {
        if (snap.exists()) {
            isSyncingFromFirebase = true;
            const data = snap.val();
            let changed = false;

            DB_KEYS.forEach(key => {
                if (data[key] !== undefined && data[key] !== null) {
                    let valStr = typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]);
                    if (localStorage.getItem(key) !== valStr) {
                        originalSetItem.call(localStorage, key, valStr);
                        changed = true;
                    }
                }
            });

            isSyncingFromFirebase = false;

            // If data changed from remote, trigger an event for UI to update
            if (changed) {
                document.dispatchEvent(new Event('firebaseSynced'));
            }
        }
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
        if (typeof db !== 'undefined' && db !== null) {
            let parsedVal = value;
            try { parsedVal = JSON.parse(value); } catch(e) {}
            db.ref(key).set(parsedVal).catch(err => console.error("Firebase Sync Error:", err));
        }
        // Dispatch local event immediately to update UI in current tab
        document.dispatchEvent(new Event('firebaseSynced'));
    }
};

// 4. Intercept localStorage.removeItem
const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.apply(this, arguments);
    if (DB_KEYS.includes(key) && !isSyncingFromFirebase) {
        if (typeof db !== 'undefined' && db !== null) {
            db.ref(key).remove().catch(err => console.error("Firebase Sync Error:", err));
        }
        // Dispatch local event immediately to update UI in current tab
        document.dispatchEvent(new Event('firebaseSynced'));
    }
};

// Also listen to cross-tab localStorage changes (native behavior fallback)
window.addEventListener('storage', (e) => {
    if (DB_KEYS.includes(e.key) && e.newValue !== null && !isSyncingFromFirebase) {
        if (typeof db !== 'undefined' && db !== null) {
            let parsedVal = e.newValue;
            try { parsedVal = JSON.parse(e.newValue); } catch(err) {}
            db.ref(e.key).set(parsedVal).catch(err => {});
        }
        // Update current tab's UI
        document.dispatchEvent(new Event('firebaseSynced'));
    }
});
