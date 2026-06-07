// Data Storage
let operators = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
let messages = Object.values(JSON.parse(localStorage.getItem('cyberCafeMessages')) || []).filter(Boolean);
const defaultServices = [
    // Identity & Docs
    { title: "Aadhar (UIDAI)", url: "https://uidai.gov.in/en/", category: "identity", icon: "fa-fingerprint" },
    { title: "Voter ID", url: "https://voters.eci.gov.in/", category: "identity", icon: "fa-id-badge" },
    { title: "PAN Card", url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html", category: "identity", icon: "fa-address-card" },
    { title: "DigiLocker", url: "https://www.digilocker.gov.in/", category: "identity", icon: "fa-lock" },
    { title: "Passport Seva", url: "https://www.passportindia.gov.in/psp", category: "identity", icon: "fa-passport" },
    { title: "E-Shram Portal", url: "https://eshram.gov.in/indexmain", category: "identity", icon: "fa-id-card" },
    { title: "EPFO Portal (UAN)", url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", category: "identity", icon: "fa-piggy-bank" },
    
    // MP State Services
    { title: "Samagra Portal", url: "https://samagra.gov.in/Default.aspx", category: "mp-state", icon: "fa-users" },
    { title: "MP E-District", url: "https://mpedistrict.gov.in/MPL/index.aspx", category: "mp-state", icon: "fa-file-signature" },
    { title: "MPTAAS (Tribal)", url: "https://www.tribal.mp.gov.in/MPTAAS", category: "mp-state", icon: "fa-users-cog" },
    { title: "Social Security (Pension)", url: "https://socialsecurity.mp.gov.in/home.aspx", category: "mp-state", icon: "fa-hands-helping" },
    { title: "Citizen Police", url: "https://citizen.mppolice.gov.in/Login.aspx", category: "mp-state", icon: "fa-shield-alt" },
    { title: "MP Bhulekh WebGIS", url: "https://webgis2.mpbhulekh.gov.in/#/user-management/signin", category: "mp-state", icon: "fa-map" },
    { title: "MP CPCT", url: "https://cpct.mp.gov.in/per/g01/pub/1172/ASM/WebPortal/1/index.html?1172@@1@@1", category: "mp-state", icon: "fa-keyboard" },
    { title: "MP Online iForms", url: "https://iforms.mponline.gov.in/", category: "mp-state", icon: "fa-file-alt" },
    { title: "MP Rojgar Portal", url: "https://mprojgar.gov.in/home", category: "mp-state", icon: "fa-user-tie" },
    { title: "MP West Discom (Electricity)", url: "https://mpwzservices.mpwin.co.in/westdiscom/home", category: "mp-state", icon: "fa-bolt" },
    { title: "IFMS MP Treasury", url: "https://www.mptreasury.gov.in/IFMS/login.jsp", category: "mp-state", icon: "fa-piggy-bank" },
    { title: "Sambal Portal (MP)", url: "https://sambal.mp.gov.in/", category: "mp-state", icon: "fa-id-card-clip" },
    { title: "MP Labour Dept.", url: "https://www.labour.mp.gov.in/Index.aspx", category: "mp-state", icon: "fa-hard-hat" },
    
    // Education & Jobs
    { title: "MP Board (MPBSE)", url: "https://www.mpbse.nic.in/", category: "education", icon: "fa-school" },
    { title: "ESB MP (Vyapam)", url: "https://esb.mp.gov.in/e_default.html", category: "education", icon: "fa-laptop-code" },
    { title: "Sarkari Result", url: "https://sarkariresult.com.cm/", category: "education", icon: "fa-list-alt" },
    { title: "NSP Scholarships", url: "https://scholarships.gov.in/ApplicationForm/login", category: "education", icon: "fa-user-graduate" },
    { title: "MPBOU (MP Online)", url: "https://mpbou.mponline.gov.in/portal/", category: "education", icon: "fa-university" },
    { title: "MPSOS (MP Online)", url: "https://mpsos.mponline.gov.in/", category: "education", icon: "fa-book-open" },
    { title: "Jiwaji University", url: "https://jiwaji.edu/", category: "education", icon: "fa-university" },
    { title: "DBRAU Agra Results", url: "https://result.agrauniv.online/", category: "education", icon: "fa-graduation-cap" },
    { title: "RBPG College Agra", url: "https://www.rbpgcollegeagra.com/", category: "education", icon: "fa-school" },
    { title: "Shiksha Portal MP", url: "https://shikshaportal.mp.gov.in/Students/Dashboard/Dashboard.aspx", category: "education", icon: "fa-chalkboard-teacher" },
    { title: "MP Online Chayan", url: "https://chayan.mponline.gov.in/", category: "education", icon: "fa-check-square" },
    { title: "MPBSE MP Online", url: "https://mpbse.mponline.gov.in/MPBSE/MPBSE", category: "education", icon: "fa-school" },
    { title: "Sederp Education Portal", url: "https://sederp.educationportal3.in/", category: "education", icon: "fa-book" },
    { title: "Join Indian Army", url: "https://joinindianarmy.nic.in/BRAVOUserLogin.htm", category: "education", icon: "fa-user-shield" },
    { title: "Agniveer Navy", url: "https://agniveernavy.cdac.in/sailorscycle4/login", category: "education", icon: "fa-anchor" },
    
    // Business & CSC
    { title: "CSC Digital Seva", url: "https://digitalseva.csc.gov.in/", category: "business", icon: "fa-desktop" },
    { title: "CSC Digipay", url: "https://digipayweb.csccloud.in/", category: "business", icon: "fa-wallet" },
    { title: "Udyam (MSME)", url: "https://www.udyamregistration.gov.in/UdyamRegistration.aspx", category: "business", icon: "fa-industry" },
    { title: "GST Portal", url: "https://services.gst.gov.in/services/login", category: "business", icon: "fa-file-invoice-dollar" },
    { title: "Income Tax Portal", url: "https://www.incometax.gov.in/iec/foportal/", category: "business", icon: "fa-file-invoice-dollar" },
    { title: "Fino Bank Partner", url: "https://partnerlite.fino.bank.in/LiteWebUI/auth/login", category: "business", icon: "fa-university" },
    { title: "Airtel Payments Bank", url: "https://portal.airtelpayments.bank.in/RetailerPortal/", category: "business", icon: "fa-mobile-alt" },
    { title: "GST Tool", url: "https://gsttool.in/", category: "business", icon: "fa-calculator" },
    { title: "Supplier Meesho", url: "https://supplier.meesho.com/", category: "business", icon: "fa-shopping-bag" },
    { title: "Digital India Portal", url: "https://digitalindiaportal.co.in/", category: "business", icon: "fa-laptop-house" },
    { title: "Digital Portal In", url: "https://digitalportal.in/", category: "business", icon: "fa-laptop-house" },
    { title: "PM Kisan", url: "https://pmkisan.gov.in/", category: "business", icon: "fa-tractor" },
    { title: "LIC Login Portal", url: "https://www.google.com/search?q=lic+login+portal", category: "business", icon: "fa-umbrella" },
    { title: "Bajaj Portal", url: "https://www.google.com/search?q=bajaj+portal", category: "business", icon: "fa-motorcycle" },
    { title: "NPCI", url: "https://www.npci.org.in/", category: "business", icon: "fa-rupee-sign" },
    { title: "Spice Money", url: "https://www.spicemoney.com/", category: "business", icon: "fa-wallet" },
    { title: "A2Z Suvidhaa", url: "https://www.a2zsuvidhaa.com/", category: "business", icon: "fa-credit-card" },
    { title: "NREGA Login (GP)", url: "https://nregastrep.nic.in/netnrega/loginframegp.aspx?page=C&state_code=17", category: "business", icon: "fa-trowel" },
    
    // Transport & Health
    { title: "Ayushman Bharat", url: "https://beneficiary.nha.gov.in/", category: "transport", icon: "fa-heartbeat" },
    { title: "Parivahan (Sarathi)", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelectBean.do", category: "transport", icon: "fa-car" },
    { title: "ABHA (Health ID)", url: "https://abha.abdm.gov.in/abha/v3", category: "transport", icon: "fa-notes-medical" },
    { title: "IRCTC (Train Search)", url: "https://www.irctc.co.in/nget/train-search", category: "transport", icon: "fa-train" },
    
    // Tools & Utilities
    { title: "Bulk Image Resizer", url: "https://imageresizer.com/bulk-resize", category: "tools", icon: "fa-images" },
    { title: "Unlock PDF", url: "https://www.ilovepdf.com/unlock_pdf", category: "tools", icon: "fa-file-pdf" },
    { title: "Compress PDF (200kb)", url: "https://pdf.pi7.org/compress-pdf-to-200kb", category: "tools", icon: "fa-file-pdf" },
    { title: "Compress Image (50kb)", url: "https://image.pi7.org/compress-image-to-50kb", category: "tools", icon: "fa-compress-arrows-alt" },
    { title: "Image to PDF", url: "https://image.pi7.org/image-to-pdf", category: "tools", icon: "fa-file-export" },
    { title: "JPEG to JPG", url: "https://image.pi7.org/jpeg-to-jpg", category: "tools", icon: "fa-file-image" },
    { title: "PNG to JPEG", url: "https://image.pi7.org/png-to-jpeg", category: "tools", icon: "fa-file-image" },
    { title: "Remove Background", url: "https://www.remove.bg/", category: "tools", icon: "fa-eraser" },
    { title: "PhotoRoom", url: "https://www.photoroom.com/", category: "tools", icon: "fa-camera-retro" },
    { title: "Typing Test", url: "https://www.typing.com/student/tests", category: "tools", icon: "fa-keyboard" },
    { title: "Epson L3210 Driver", url: "https://www.epson.co.in/Support/Printers/All-In-One/L-Series/Epson-L3210/s/SPT_C11CJ68506", category: "tools", icon: "fa-print" },
    { title: "HP LaserJet M126 Driver", url: "https://support.hp.com/au-en/drivers/hp-laserjet-pro-mfp-m126-series/model/5303411", category: "tools", icon: "fa-print" },
    { title: "RD Service Online", url: "https://rdserviceonline.com/?srsltid=AfmBOor_K2bURuAo58nMY6HPhsPC0Ad-Smiw3pd3IN4EVJ01d2HHDehJ", category: "tools", icon: "fa-fingerprint" },
    { title: "Mantra RD Service", url: "https://www.mantratec.com/Download/User", category: "tools", icon: "fa-fingerprint" },
    { title: "Merge Photo & Sign", url: "https://image.pi7.org/merge-photo-and-signature", category: "tools", icon: "fa-object-group" },
    { title: "Resume Builder", url: "https://www.resume-now.com/lp/rnarsmsm121", category: "tools", icon: "fa-file-alt" },
    { title: "YouTube", url: "https://www.youtube.com/", category: "tools", icon: "fa-youtube" }
];

let services = Object.values(JSON.parse(localStorage.getItem('cyberCafeServices')) || []).filter(Boolean);
if(!services || services.length === 0) {
    services = defaultServices;
}
let gLedger = Object.values(JSON.parse(localStorage.getItem('cyberCafeLedger')) || []).filter(Boolean);
let categories = Object.values(JSON.parse(localStorage.getItem('cyberCafeCategories')) || []).filter(Boolean);
if(categories.length === 0) {
    categories = [
    { id: 'identity', name: 'Identity & Docs', icon: 'fa-solid fa-id-card' },
    { id: 'mp-state', name: 'MP State Services', icon: 'fa-solid fa-building-columns' },
    { id: 'education', name: 'Education & Jobs', icon: 'fa-solid fa-graduation-cap' },
    { id: 'business', name: 'Business & CSC', icon: 'fa-solid fa-briefcase' },
    { id: 'transport', name: 'Transport & Health', icon: 'fa-solid fa-car' },
    { id: 'tools', name: 'Photo & PDF Tools', icon: 'fa-solid fa-wrench' }
];
}

function saveData() {
    localStorage.setItem('cyberCafeOperators', JSON.stringify(operators));
    localStorage.setItem('cyberCafeMessages', JSON.stringify(messages));
    localStorage.setItem('cyberCafeServices', JSON.stringify(services));
    localStorage.setItem('cyberCafeCategories', JSON.stringify(categories));
    localStorage.setItem('cyberCafeLedger', JSON.stringify(gLedger));
    
    // Explicitly push to Firebase to guarantee deletion/updates
    if (typeof db !== 'undefined' && db !== null) {
        db.ref('cyberCafeOperators').set(operators).catch(err => console.log('Firebase Operators Update Error:', err));
        db.ref('cyberCafeMessages').set(messages).catch(err => console.log('Firebase Messages Update Error:', err));
        db.ref('cyberCafeServices').set(services).catch(err => console.log('Firebase Services Update Error:', err));
        db.ref('cyberCafeCategories').set(categories).catch(err => console.log('Firebase Categories Update Error:', err));
        db.ref('cyberCafeLedger').set(gLedger).catch(err => console.log('Firebase Ledger Update Error:', err));
    }
}

// 1. Auth Module
document.getElementById('backendAuthForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('adminId').value;
    const pwd = document.getElementById('adminPwd').value;
    
    // Validating against strictly requested credentials
    if(id === '9111301292' && pwd === '1292') {
        document.getElementById('masterGateway').style.display = 'none';
        document.getElementById('backendApp').style.display = 'flex';
        document.getElementById('backendApp').style.width = '100%';
        showToast("Backend Secured Access Granted!", "success");
        initBackend();
    } else {
        showToast("Invalid Master Credentials! Access Denied.", "error");
    }
});

function logoutBackend() {
    document.getElementById('backendApp').style.display = 'none';
    document.getElementById('masterGateway').style.display = 'flex';
    document.getElementById('adminId').value = '';
    document.getElementById('adminPwd').value = '';
    showToast("Logged out successfully.", "info");
}

// 2. Tab Routing
function switchTab(tabId) {
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    
    const titles = {
        'services': 'All Service Links Management',
        'highlights': 'Highlights Services Management',
        'theme': 'Global Theme Customizer',
        'notes': 'Marquee Notes Configuration',
        'popup': 'Login Startup Popup',
        'navigation': 'Dynamic Navigation Manager',
        'preview': 'Operator Frontend Preview',
        'payments': 'Network Payments & Ledger',
        'control': 'Control Panel & Global Broadcast',
        'support': 'Help or Support Overview',
        'users': 'User List & Permissions',
        'inbox': 'Support Inbox',
        'password': 'Password Change For User',
        'blacklist': 'User Blacklist System',
        'receive': 'Received Work Requests & Operator Chat'
    };
    document.getElementById('pageTitle').innerText = titles[tabId] || 'Master Backend';
    
    if (tabId === 'receive') {
        initReceiveWork();
    }
}

// 3. Render Functions
function initBackend() {
    renderCategories();
    renderServices();
    renderPayments();
    renderUsers();
    renderInbox();
    renderPasswordSelect();
    renderPendingPayments();
    renderMembershipHistoryBackend();
    renderBlacklist();
    loadAdvancedConfigs();
    initReceiveWork();
}

// -- NAVIGATION TAB --
function renderCategories() {
    const list = document.getElementById('backendCategoryList');
    const srvCatSelect = document.getElementById('srvCat');
    if(list) list.innerHTML = '';
    if(srvCatSelect) srvCatSelect.innerHTML = '';
    
    categories.forEach((cat, idx) => {
        if(list) {
            let imgHtml = cat.imageBase64 ? `<img src="${cat.imageBase64}" style="width: 35px; height: 35px; border-radius: 6px; object-fit: cover; border: 1px solid var(--primary-color);">` : `<i class="${cat.icon}" style="font-size: 1.5rem; color: var(--primary-color);"></i>`;
            let urlHtml = cat.url ? `<br><small><a href="${cat.url}" target="_blank" style="color:#00f0ff; text-decoration: underline;"><i class="fa-solid fa-link"></i> ${cat.url}</a></small>` : '';
            
            list.innerHTML += `
                <tr>
                    <td>${imgHtml}</td>
                    <td><strong>${cat.name}</strong>${urlHtml}</td>
                    <td><span style="color: var(--text-muted);">${cat.id}</span></td>
                    <td><button class="btn btn-danger" onclick="deleteCategory(${idx})"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            `;
        }
        if(srvCatSelect) {
            srvCatSelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
        }
    });
}

let tempCatImageBase64 = null;
window.previewCatImage = function(input) {
    if(input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                let width = img.width; let height = img.height;
                const MAX = 120; // Keep category icon tiny
                if (width > height) { if (width > MAX) { height *= MAX / width; width = MAX; } }
                else { if (height > MAX) { width *= MAX / height; height = MAX; } }
                canvas.width = width; canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                tempCatImageBase64 = canvas.toDataURL('image/png', 0.8);
                document.getElementById('catImagePreview').innerHTML = `<img src="${tempCatImageBase64}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; border: 1px solid var(--primary-color);">`;
            }
        };
        reader.readAsDataURL(file);
    }
};

window.addCategory = function() {
    const name = document.getElementById('catName').value.trim();
    const url = document.getElementById('catUrl') ? document.getElementById('catUrl').value.trim() : '';
    const icon = document.getElementById('catIcon').value.trim() || 'fa-solid fa-folder';
    if(!name) return showToast('Please enter a Category Name', 'warning');
    
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const newCat = {
        id,
        name,
        icon,
        imageBase64: tempCatImageBase64,
        url: url
    };
    
    categories.push(newCat);
    saveData();
    renderCategories();
    
    // Reset Form
    document.getElementById('catName').value = '';
    if (document.getElementById('catUrl')) document.getElementById('catUrl').value = '';
    document.getElementById('catImageFile').value = '';
    document.getElementById('catImagePreview').innerHTML = '';
    tempCatImageBase64 = null;
    
    showToast('Category added & synced!', 'success');
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_CATEGORIES', data: categories }); } catch(err) {}
};

window.deleteCategory = function(index) {
    if(confirm("Delete this category? Services under it will still exist but may not display properly until reassigned.")) {
        categories.splice(index, 1);
        saveData();
        renderCategories();
        showToast('Category removed!', 'info');
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_CATEGORIES', data: categories }); } catch(err) {}
    }
};

// -- ALL SERVICE TAB --
function renderServices() {
    const sList = document.getElementById('globalServiceList');
    if (sList) sList.innerHTML = '';
    
    // Also populate the highlight select dropdown
    const hlSelect = document.getElementById('hlServiceSelect');
    let hlSelectedValue = hlSelect ? hlSelect.value : '';
    if(hlSelect) {
        hlSelect.innerHTML = '<option value="">-- Choose Service to Highlight --</option>';
    }

    const hlTable = document.getElementById('hlServicesListTable');
    if(hlTable) hlTable.innerHTML = '';

    const config = JSON.parse(localStorage.getItem('cyberHighlightConfig'));

    services.forEach((srv, idx) => {
        if(hlSelect) {
            hlSelect.innerHTML += `<option value="${srv.title.replace(/"/g, '&quot;')}">${srv.title}</option>`;
        }

        if(hlTable) {
            const isHighlighted = (config && config.title === srv.title);
            const highlightBadge = isHighlighted 
                ? `<span style="background:${config.color}; color:${getContrastColor(config.color)}; padding:6px 12px; border-radius:4px; font-weight:bold; box-shadow: 0 0 10px ${config.color}; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-star"></i> Highlighted</span>` 
                : `<span style="color:var(--text-muted); font-size:0.85rem;">Standard</span>`;
                
            hlTable.innerHTML += `
                <tr>
                    <td><strong>${srv.title}</strong></td>
                    <td><a href="${srv.url}" target="_blank" style="color:#00f0ff;">${srv.url}</a></td>
                    <td><span class="badge-info">${srv.category}</span></td>
                    <td>${highlightBadge}</td>
                </tr>
            `;
        }
    });

    if (sList) {
        for (let idx = services.length - 1; idx >= 0; idx--) {
            const srv = services[idx];
            sList.innerHTML += `
                <tr>
                    <td><strong>${srv.title}</strong></td>
                    <td><a href="${srv.url}" target="_blank" style="color:#00f0ff;">${srv.url.substring(0,30)}...</a></td>
                    <td><span class="badge-info">${srv.category}</span></td>
                    <td><button class="btn btn-danger" onclick="delService(${idx})"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            `;
        }
    }

    if(hlSelect && hlSelectedValue) {
        hlSelect.value = hlSelectedValue;
    }
}

window.addGlobalService = function() {
    const title = document.getElementById('srvTitle').value.trim();
    const url = document.getElementById('srvUrl').value.trim();
    const cat = document.getElementById('srvCat').value;
    
    if(!title || !url) {
        showToast('Please enter both Title and URL', 'warning');
        return;
    }
    
    const catIconMap = {
        'identity': 'fa-id-card',
        'mp-state': 'fa-landmark',
        'education': 'fa-graduation-cap',
        'business': 'fa-briefcase',
        'transport': 'fa-car',
        'tools': 'fa-wrench'
    };
    const icon = catIconMap[cat] || 'fa-link';
    
    services.push({ title: title, url: url, category: cat, icon: icon });
    
    // Auto-grant access to this new service for all existing operators so it displays on their frontends
    operators.forEach(op => {
        if (!op.allowedServices) op.allowedServices = [];
        if (!op.allowedServices.includes(title)) {
            op.allowedServices.push(title);
        }
    });

    saveData();
    renderServices();
    showToast("New service added successfully", "success");
    document.getElementById('srvTitle').value = '';
    document.getElementById('srvUrl').value = '';
    
    // Broadcast updates to sync all frontend dashboards in real-time
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_SERVICES', data: services }); } catch(err) {}
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
};

let lastDeletedItem = null;

window.undoDelete = function() {
    if (!lastDeletedItem) return;
    
    if (lastDeletedItem.type === 'service') {
        services.splice(lastDeletedItem.index, 0, lastDeletedItem.data);
        
        // Auto-grant restored service to all operators
        const restoredTitle = lastDeletedItem.data.title;
        operators.forEach(op => {
            if (!op.allowedServices) op.allowedServices = [];
            if (!op.allowedServices.includes(restoredTitle)) {
                op.allowedServices.push(restoredTitle);
            }
        });

        saveData();
        renderServices();
        showToast("Service restored successfully!", "success");
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_SERVICES', data: services }); } catch(err) {}
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    } else if (lastDeletedItem.type === 'operator') {
        operators.splice(lastDeletedItem.index, 0, lastDeletedItem.data);
        saveData();
        renderUsers();
        renderPendingPayments();
        showToast("User restored successfully!", "success");
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    }
    lastDeletedItem = null; // Clear after undo
};

window.delService = function(idx) {
    lastDeletedItem = { type: 'service', index: idx, data: services[idx] };
    services.splice(idx, 1);
    saveData();
    renderServices();
    showToast("Service deleted. <button onclick='undoDelete()' style='background:none; border:none; color:var(--primary-color); cursor:pointer; font-weight:bold; text-decoration:underline; margin-left: 10px;'><i class='fa-solid fa-rotate-left'></i> UNDO</button>", "warning");
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_SERVICES', data: services }); } catch(err) {}
};

window.saveHighlightService = function() {
    const serviceSelect = document.getElementById('hlServiceSelect');
    const colorInput = document.getElementById('hlColor');
    
    if(!serviceSelect || !colorInput) return;
    
    const selectedTitle = serviceSelect.value;
    const selectedColor = colorInput.value;
    
    if(!selectedTitle) {
        showToast("Please select a service to highlight", "warning");
        return;
    }
    
    const config = { title: selectedTitle, color: selectedColor };
    localStorage.setItem('cyberHighlightConfig', JSON.stringify(config));
    
    // Explicit Firebase Sync
    if (typeof db !== 'undefined' && db !== null) {
        db.ref('cyberHighlightConfig').set(config).catch(err => console.log('Firebase Highlight Update Error:', err));
    }
    
    renderHighlightStatus();
    
    // Broadcast update
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_HIGHLIGHT', data: config }); } catch(err) {}
    showToast(`Highlighted Service updated: ${selectedTitle}!`, "success");
};

window.clearHighlightService = function() {
    localStorage.removeItem('cyberHighlightConfig');
    
    if (typeof db !== 'undefined' && db !== null) {
        db.ref('cyberHighlightConfig').remove().catch(err => console.log('Firebase Highlight Clear Error:', err));
    }
    
    const serviceSelect = document.getElementById('hlServiceSelect');
    if(serviceSelect) serviceSelect.value = '';
    
    renderHighlightStatus();
    
    // Broadcast update
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_HIGHLIGHT', data: null }); } catch(err) {}
    showToast("Highlighted Service removed", "info");
};

window.renderHighlightStatus = function() {
    const statusBlock = document.getElementById('hlStatusBlock');
    const activeLabel = document.getElementById('hlActiveServiceName');
    
    if(!statusBlock || !activeLabel) return;
    
    const config = JSON.parse(localStorage.getItem('cyberHighlightConfig'));
    if(config && config.title) {
        activeLabel.textContent = config.title;
        activeLabel.style.backgroundColor = config.color;
        activeLabel.style.color = getContrastColor(config.color);
        activeLabel.style.boxShadow = `0 0 10px ${config.color}`;
        statusBlock.style.display = 'flex';
        
        // Also sync the dropdown and color inputs in UI
        const serviceSelect = document.getElementById('hlServiceSelect');
        const colorInput = document.getElementById('hlColor');
        const colorText = document.getElementById('hlColorText');
        if(serviceSelect) serviceSelect.value = config.title;
        if(colorInput) colorInput.value = config.color;
        if(colorText) colorText.textContent = config.color;
    } else {
        statusBlock.style.display = 'none';
        
        const serviceSelect = document.getElementById('hlServiceSelect');
        if(serviceSelect) serviceSelect.value = '';
    }

    // Refresh dynamic services highlights list in table
    const hlTable = document.getElementById('hlServicesListTable');
    if(hlTable) {
        // Find all rows in table and update standard vs highlighted badges without full wipe if possible,
        // or simply do a fast renderServices call to update it
        // To be safe, just call a DOM-only subset of renderServices for the highlights table
        let htmlStr = '';
        services.forEach(srv => {
            const isHighlighted = (config && config.title === srv.title);
            const highlightBadge = isHighlighted 
                ? `<span style="background:${config.color}; color:${getContrastColor(config.color)}; padding:6px 12px; border-radius:4px; font-weight:bold; box-shadow: 0 0 10px ${config.color}; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-star"></i> Highlighted</span>` 
                : `<span style="color:var(--text-muted); font-size:0.85rem;">Standard</span>`;
                
            htmlStr += `
                <tr>
                    <td><strong>${srv.title}</strong></td>
                    <td><a href="${srv.url}" target="_blank" style="color:#00f0ff;">${srv.url}</a></td>
                    <td><span class="badge-info">${srv.category}</span></td>
                    <td>${highlightBadge}</td>
                </tr>
            `;
        });
        hlTable.innerHTML = htmlStr;
    }
};

// Utility to get contrast color for active badge
function getContrastColor(hexcolor) {
    if (!hexcolor) return '#000000';
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0,2),16);
    const g = parseInt(hexcolor.substr(2,2),16);
    const b = parseInt(hexcolor.substr(4,2),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000000' : '#ffffff';
}


// -- PAYMENTS TAB --
function renderPayments() {
    gLedger = JSON.parse(localStorage.getItem('cyberCafeLedger')) || [];
    let totRev = 0; let totProf = 0;
    const gList = document.getElementById('globalLedgerList');
    gList.innerHTML = '';
    let html = '';
    gLedger.reverse().forEach(pay => {
        totRev += parseFloat(pay.amount);
        totProf += (parseFloat(pay.amount) - parseFloat(pay.deduct));
        
        html += `
            <tr>
                <td>${pay.dateInputValue || 'N/A'}</td>
                <td style="color:#00f0ff;">${pay.operatorName || 'Admin'} <br><small>${pay.operatorId || 'N/A'}</small></td>
                <td>${pay.name}</td>
                <td>${pay.service}</td>
                <td style="color:#00ff88; font-weight:bold;">₹${pay.amount}</td>
            </tr>
        `;
    });
    gList.innerHTML = html;
    
    // Format amounts cleanly as Indian currency
    const formatCurrency = (val) => {
        return Number(val).toLocaleString('en-IN', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
    };
    
    document.getElementById('globalRevenue').textContent = formatCurrency(totRev);
    document.getElementById('globalProfit').textContent = formatCurrency(totProf);
}

// -- PENDING PAYMENTS SECTION --
function renderPendingPayments() {
    const list = document.getElementById('pendingPaymentsList');
    if(!list) return;
    list.innerHTML = '';
    
    let hasPending = false;
    let html = '';
    operators.forEach((op, index) => {
        if(op.paymentStatus === 'pending_verification') {
            hasPending = true;
            html += `                <tr data-username="${(op.username || '').replace(/"/g, '&quot;')}" data-mobile="${op.mobile}" data-aadhar="${op.aadhar || ''}" data-email="${(op.email || '').replace(/"/g, '&quot;')}" data-shop="${(op.shopName || '').replace(/"/g, '&quot;')}" data-date="${op.registrationDate || ''}">
                    <td><strong>${op.name}</strong><br><small>@${op.username || 'unknown'} / ${op.mobile}${op.aadhar ? '<br>Aadhar: ' + op.aadhar : ''}${op.loginPin ? '<br>PIN: <span style="color:#00ff88">' + op.loginPin + '</span>' : ''}</small></td>
                    <td>${op.shopName || '-'}</td>
                    <td style="color:#f1c40f; font-weight:bold;">${op.utrNumber}</td>
                    <td><span class="badge-warning">Pending Verification</span></td>
                    <td>
                        <button class="btn btn-primary" onclick="acceptPayment(${index})" style="background:#00ff88; color:#000; border:none; margin-right:5px;"><i class="fa-solid fa-check"></i> Accept</button>
                        <button class="btn btn-danger" onclick="rejectPayment(${index})" style="padding: 12px;"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `;
        }
    });
    list.innerHTML = html;
    
    if(!hasPending) {
        list.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding: 30px;">No pending activation payments right now.</td></tr>`;
    }
}

function calculateNewValidity(operatorId) {
    let baseDate = new Date(); // Start from current time
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    
    // Find all approved payments for this operator
    const myApprovedPayments = membershipPayments.filter(p => p.operatorId === operatorId && p.status === 'approved' && p.validUntil);
    
    myApprovedPayments.forEach(p => {
        const [d, m, y] = p.validUntil.split('-');
        const validDate = new Date(parseInt(y), parseInt(m) - 1, parseInt(d), 23, 59, 59);
        if (validDate > baseDate) {
            baseDate = validDate; // If this approved plan expires in the future, extend from that future date!
        }
    });
    
    // Now add 30 days
    baseDate.setDate(baseDate.getDate() + 30);
    
    const dd = String(baseDate.getDate()).padStart(2, '0');
    const mm = String(baseDate.getMonth() + 1).padStart(2, '0');
    const validUntilStr = `${dd}-${mm}-${baseDate.getFullYear()}`;
    return validUntilStr;
}

window.acceptPayment = function(index) {
    const op = operators[index];
    op.paymentStatus = 'paid';
    
    // Add to Global Payment History
    const d = new Date();
    const todayStr = `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
    
    gLedger.push({
        dateInputValue: todayStr,
        operatorName: op.name,
        operatorId: op.mobile,
        name: "Registration Fee (UTR: " + op.utrNumber + ")",
        service: "Portal Access",
        amount: 10,
        deduct: 0
    });
    
    // Calculate validity window of exactly 30 days
    const validUntilStr = calculateNewValidity(op.mobile);
    
    // Sync with cyberCafeMembershipPayments list
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    const memPay = membershipPayments.filter(p => p.operatorId === op.mobile && p.status === 'pending').pop();
    if(memPay) {
        memPay.status = 'approved';
        memPay.validUntil = validUntilStr;
        memPay.expired = false;
    } else {
        // Fallback: create record if none exists
        membershipPayments.push({
            id: 'mem_pay_' + Date.now(),
            operatorId: op.mobile,
            operatorName: op.name,
            amount: 10,
            utrNumber: op.utrNumber || 'N/A',
            date: todayStr,
            status: 'approved',
            validUntil: validUntilStr,
            expired: false
        });
    }
    localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
    
    saveData();
    renderPendingPayments();
    renderPayments();
    renderMembershipHistoryBackend();
    
    showToast("Payment Accepted. User can now access services.", "success");
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
};

window.rejectPayment = function(index) {
    const op = operators[index];
    op.paymentStatus = 'unpaid';
    op.utrNumber = '';
    
    // Sync with cyberCafeMembershipPayments list
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    const memPay = membershipPayments.filter(p => p.operatorId === op.mobile && p.status === 'pending').pop();
    if(memPay) {
        memPay.status = 'rejected';
    }
    localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
    
    saveData();
    renderPendingPayments();
    renderMembershipHistoryBackend();
    
    showToast("Payment Rejected. User will be asked to pay again.", "info");
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
};

window.approveMembershipPayment = function(payId) {
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    const pay = membershipPayments.find(p => p.id === payId);
    if(pay) {
        pay.status = 'approved';
        const validUntilStr = calculateNewValidity(pay.operatorId);
        pay.validUntil = validUntilStr;
        pay.expired = false;
        
        // Update operator status
        const opIndex = operators.findIndex(o => o.mobile === pay.operatorId);
        if(opIndex !== -1) {
            operators[opIndex].paymentStatus = 'paid';
            operators[opIndex].utrNumber = pay.utrNumber;
        }
        
        // Add to Global Payment History (gLedger) if not already added
        const todayStr = `${String(new Date().getDate()).padStart(2, '0')}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${new Date().getFullYear()}`;
        gLedger.push({
            dateInputValue: todayStr,
            operatorName: pay.operatorName,
            operatorId: pay.operatorId,
            name: "Membership Plan Approved (UTR: " + pay.utrNumber + ")",
            service: "Portal Access",
            amount: 10,
            deduct: 0
        });
        
        saveData();
        localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
        
        renderPendingPayments();
        renderPayments();
        renderMembershipHistoryBackend();
        
        showToast("Membership approved successfully!", "success");
        
        // Broadcast changes
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
    }
};

window.rejectMembershipPayment = function(payId) {
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    const pay = membershipPayments.find(p => p.id === payId);
    if(pay) {
        pay.status = 'rejected';
        
        // Update operator status if they don't have any other active plan
        const opIndex = operators.findIndex(o => o.mobile === pay.operatorId);
        if(opIndex !== -1) {
            const hasOtherApproved = membershipPayments.some(p => p.operatorId === pay.operatorId && p.status === 'approved' && !p.expired && p.id !== payId);
            if(!hasOtherApproved) {
                operators[opIndex].paymentStatus = 'unpaid';
                operators[opIndex].utrNumber = '';
            }
        }
        
        saveData();
        localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
        
        renderPendingPayments();
        renderPayments();
        renderMembershipHistoryBackend();
        
        showToast("Membership rejected.", "info");
        
        // Broadcast changes
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
    }
};

let lastDeletedMembershipPayment = null;

window.deleteMembershipPayment = function(payId) {
    if(confirm("Are you sure you want to delete this payment record permanently from the history?")) {
        let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
        const payIndex = membershipPayments.findIndex(p => p.id === payId);
        if(payIndex !== -1) {
            lastDeletedMembershipPayment = membershipPayments[payIndex];
            membershipPayments.splice(payIndex, 1);
            
            localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
            
            // Recalculate operator status after deletion
            recalculateOperatorMembershipStatus(lastDeletedMembershipPayment.operatorId, membershipPayments);
            
            renderPendingPayments();
            renderPayments();
            renderMembershipHistoryBackend();
            
            // Show undo button
            const undoBtn = document.getElementById('undoMembershipBtn');
            if(undoBtn) undoBtn.style.display = 'inline-block';
            
            showToast("Payment record deleted from history.", "warning");
            
            // Broadcast
            try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
        }
    }
};

window.undoDeleteMembershipPayment = function() {
    if(lastDeletedMembershipPayment) {
        let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
        membershipPayments.push(lastDeletedMembershipPayment);
        localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
        
        // Recalculate operator status
        recalculateOperatorMembershipStatus(lastDeletedMembershipPayment.operatorId, membershipPayments);
        
        lastDeletedMembershipPayment = null;
        
        const undoBtn = document.getElementById('undoMembershipBtn');
        if(undoBtn) undoBtn.style.display = 'none';
        
        renderPendingPayments();
        renderPayments();
        renderMembershipHistoryBackend();
        
        showToast("Deleted payment record restored!", "success");
        
        // Broadcast
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
    }
};

function recalculateOperatorMembershipStatus(opMobile, membershipPayments) {
    const opIndex = operators.findIndex(o => o.mobile === opMobile);
    if(opIndex === -1) return;
    
    const myPayments = membershipPayments.filter(p => p.operatorId === opMobile);
    const now = new Date();
    let hasApproved = false;
    let hasPending = false;
    
    myPayments.forEach(p => {
        if(p.status === 'approved' && p.validUntil) {
            const [d, m, y] = p.validUntil.split('-');
            const validDate = new Date(y, m - 1, d, 23, 59, 59);
            if(now <= validDate) {
                hasApproved = true;
            }
        } else if(p.status === 'pending') {
            hasPending = true;
        }
    });
    
    if(hasApproved) {
        operators[opIndex].paymentStatus = 'paid';
    } else if(hasPending) {
        operators[opIndex].paymentStatus = 'pending_verification';
    } else {
        operators[opIndex].paymentStatus = 'unpaid';
        operators[opIndex].utrNumber = '';
    }
    
    saveData();
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
}

function renderMembershipHistoryBackend() {
    const list = document.getElementById('backendMembershipHistoryList');
    if(!list) return;
    
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    list.innerHTML = '';
    
    // If there is a recently deleted membership payment, render a premium inline restore row
    if (lastDeletedMembershipPayment) {
        list.innerHTML += `
            <tr style="background: rgba(255, 0, 122, 0.12); border: 1px dashed rgba(255, 0, 122, 0.5); border-left: 4px solid #ff007a;">
                <td colspan="7" style="color: #ff007a; padding: 12px 15px; font-weight: 500; vertical-align: middle;">
                    <span style="background: #ff007a; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; margin-right: 10px; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash-can"></i> DELETED</span>
                    Recently deleted payment for <strong>${lastDeletedMembershipPayment.operatorName}</strong> (UTR: <code style="color: #ffdd57; font-weight: 700; font-family: monospace;">${lastDeletedMembershipPayment.utrNumber || 'N/A'}</code>, Amount: <strong style="color: #00ff88;">₹${lastDeletedMembershipPayment.amount}</strong>)
                </td>
                <td style="padding: 12px 15px; text-align: right; vertical-align: middle;">
                    <button class="btn btn-primary" onclick="undoDeleteMembershipPayment()" style="background:#ffdd57; color:#000; border:none; padding:6px 14px; font-size:0.85rem; font-weight:800; border-radius: 6px; box-shadow: 0 4px 10px rgba(255,221,87,0.3); display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: all 0.2s;"><i class="fa-solid fa-rotate-left"></i> Undo Restore</button>
                </td>
            </tr>
        `;
    }
    
    if(membershipPayments.length === 0 && !lastDeletedMembershipPayment) {
        list.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:20px;">No membership plan payments found.</td></tr>`;
        return;
    }
    
    // Sort by date/timestamp descending (newest first)
    const sorted = [...membershipPayments].sort((a, b) => {
        const partsA = a.date.split('-');
        const partsB = b.date.split('-');
        const dateA = new Date(partsA[2], partsA[1] - 1, partsA[0]);
        const dateB = new Date(partsB[2], partsB[1] - 1, partsB[0]);
        return dateB - dateA;
    });
    
    const now = new Date();
    
    sorted.forEach(p => {
        let statusBadge = '';
        let actions = '';
        
        if(p.status === 'approved') {
            statusBadge = '<span class="badge-success" style="background:#00ff88; color:#000; padding:4px 8px; border-radius:4px; font-weight:600;"><i class="fa-solid fa-check"></i> Approved</span>';
        } else if(p.status === 'rejected') {
            statusBadge = '<span class="badge-danger" style="background:#ff007a; color:#fff; padding:4px 8px; border-radius:4px; font-weight:600;"><i class="fa-solid fa-xmark"></i> Rejected</span>';
        } else {
            statusBadge = '<span class="badge-warning" style="background:#f1c40f; color:#000; padding:4px 8px; border-radius:4px; font-weight:600;"><i class="fa-solid fa-spinner fa-spin"></i> Pending</span>';
        }
        
        let planStatusBadge = '-';
        let validUntilDisplay = p.validUntil || '-';
        
        if(p.status === 'approved' && p.validUntil) {
            const [d, m, y] = p.validUntil.split('-');
            const validDate = new Date(y, m - 1, d, 23, 59, 59);
            if(now > validDate) {
                planStatusBadge = '<span style="color:#ff007a; font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> Expired</span>';
            } else {
                planStatusBadge = '<span style="color:#00ff88; font-weight:700;"><i class="fa-solid fa-shield-halved"></i> Active</span>';
            }
        } else if(p.status === 'pending') {
            planStatusBadge = '<span style="color:#f1c40f; font-weight:600;">Pending Verification</span>';
        } else if(p.status === 'rejected') {
            planStatusBadge = '<span style="color:#ff007a; font-weight:600;">Rejected</span>';
        }
        
        if(p.status === 'pending') {
            actions = `
                <button class="btn btn-primary" onclick="approveMembershipPayment('${p.id}')" style="background:#00ff88; color:#000; border:none; padding:6px 12px; margin-right:5px; font-size:0.85rem;"><i class="fa-solid fa-check"></i> Accept</button>
                <button class="btn btn-danger" onclick="rejectMembershipPayment('${p.id}')" style="background:#ff007a; border:none; padding:6px 12px; margin-right:5px; font-size:0.85rem;"><i class="fa-solid fa-xmark"></i> Reject</button>
            `;
        }
        
        actions += `<button class="btn btn-danger" onclick="deleteMembershipPayment('${p.id}')" style="background:rgba(255,0,122,0.1); border:1px solid #ff007a; color:#ff007a; padding:6px 12px; font-size:0.85rem;"><i class="fa-solid fa-trash-can"></i> Delete</button>`;
        
        let memOp = operators.find(o => o.mobile === p.operatorId) || {};
        list.innerHTML += `
            <tr data-username="${(memOp.username || '').replace(/"/g, '&quot;')}" data-mobile="${p.operatorId}" data-email="${(memOp.email || '').replace(/"/g, '&quot;')}" data-shop="${(memOp.shopName || '').replace(/"/g, '&quot;')}" data-date="${memOp.registrationDate || ''}">
                <td>${p.date}</td>
                <td style="color:#00f0ff;"><strong>${p.operatorName}</strong><br><small style="color:var(--text-muted)">${p.operatorId}</small></td>
                <td style="color:#ffdd57; font-family:monospace; font-weight:bold;">${p.utrNumber}</td>
                <td style="color:#00ff88; font-weight:bold;">₹${p.amount}</td>
                <td>${statusBadge}</td>
                <td>${validUntilDisplay}</td>
                <td>${planStatusBadge}</td>
                <td><div style="display:flex; align-items:center;">${actions}</div></td>
            </tr>
        `;
    });
}

// -- CONTROL PANEL TAB --
window.setBroadcast = function() {
    const text = document.getElementById('broadcastInput').value.trim();
    if(!text) return;
    localStorage.setItem('cyberCafeAlert', text);
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'SET_ALERT', data: text }); } catch(err) {}
    showToast('Broadcast Sent! Scrolling on all screens.', 'success');
};

window.clearBroadcast = function() {
    localStorage.removeItem('cyberCafeAlert');
    document.getElementById('broadcastInput').value = '';
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'SET_ALERT', data: null }); } catch(err) {}
    showToast('Broadcast Cleared.', 'info');
};

// -- USER LIST TAB --
function renderUsers() {
    const pendList = document.getElementById('backendPendingList');
    const actList = document.getElementById('backendActiveList');
    if (!pendList || !actList) return;
    pendList.innerHTML = ''; actList.innerHTML = '';

    operators.forEach((op, index) => {
        let photoHtml = op.photo ? `<img src="${op.photo}" class="operator-img" style="width:40px; height:40px; border-radius:50%; border:1px solid #00f0ff; cursor:pointer;" onclick="openPhotoModal('${op.photo}', '${op.name.replace(/'/g, "\\'")}', 'Profile')" title="View/Download Profile Photo">` : `<i class="fa-solid fa-user-circle" style="font-size:2rem; color:gray; cursor:pointer;" onclick="alert('No profile photo uploaded.')" title="No Profile Photo"></i>`;
        let shopPhotoHtml = op.shopPhoto ? `<button class="btn" onclick="openPhotoModal('${op.shopPhoto}', '${op.name.replace(/'/g, "\\'")}', 'Shop')" style="padding: 6px 10px; background: rgba(0, 240, 255, 0.15); border: 1px solid var(--primary-color); border-radius: 6px; cursor: pointer; color: var(--primary-color); font-size: 0.85rem; display: inline-flex; align-items: center; gap: 5px; font-weight: bold; border-color: var(--primary-color);" title="View/Download Shop Photo"><i class="fa-solid fa-store"></i> Shop</button>` : `<span style="color:var(--text-muted); font-size:0.82rem;">No Shop Pic</span>`;
        
        let profileTd = `
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${photoHtml}
                    ${shopPhotoHtml}
                </div>
            </td>
        `;

        if(op.status === 'pending') {
            pendList.innerHTML += `
                <tr data-username="${(op.username || '').replace(/"/g, '&quot;')}" data-mobile="${op.mobile}" data-aadhar="${op.aadhar || ''}" data-email="${(op.email || '').replace(/"/g, '&quot;')}" data-shop="${(op.shopName || '').replace(/"/g, '&quot;')}" data-date="${op.registrationDate || ''}">
                    ${profileTd}
                    <td><strong>${op.name}</strong><br><small style="color:var(--text-muted)">@${op.username || 'unknown'} / ${op.mobile}${op.aadhar ? ' / Aadhar: ' + op.aadhar : ''}${op.loginPin ? ' / PIN: <span style="color:#00ff88">' + op.loginPin + '</span>' : ''}</small></td>
                    <td>${op.shopName || '-'}</td>
                    <td><span class="badge-pending" style="color:#f1c40f;">Pending</span></td>
                    <td>
                        <button class="btn btn-primary" onclick="approveOp(${index})"><i class="fa-solid fa-check"></i> Approve</button>
                        <button class="btn btn-danger" onclick="deleteOp(${index})"><i class="fa-solid fa-trash"></i> Reject</button>
                    </td>
                </tr>
            `;
        } else {
            let perms = op.allowedServices && op.allowedServices.length > 0 ? op.allowedServices.length + ' Allowed' : '<span style="color:red">No Access</span>';
            actList.innerHTML += `
                <tr data-username="${(op.username || '').replace(/"/g, '&quot;')}" data-mobile="${op.mobile}" data-aadhar="${op.aadhar || ''}" data-email="${(op.email || '').replace(/"/g, '&quot;')}" data-shop="${(op.shopName || '').replace(/"/g, '&quot;')}" data-date="${op.registrationDate || ''}">
                    ${profileTd}
                    <td><strong>${op.name}</strong><br><small style="color:var(--text-muted)">@${op.username || 'unknown'} / ${op.mobile}${op.aadhar ? ' / Aadhar: ' + op.aadhar : ''}${op.loginPin ? ' / PIN: <span style="color:#00ff88">' + op.loginPin + '</span>' : ''}</small></td>
                    <td>${op.shopName || '-'}</td>
                    <td>${perms}</td>
                    <td>
                        <button class="btn btn-primary" onclick="showToast('Username is: ' + '${op.username || 'Not Set'}', 'success')" style="background: rgba(255, 215, 0, 0.2); border-color: #ffd700; color: #ffd700; margin-right: 5px;"><i class="fa-solid fa-at"></i> View Username</button>
                        <button class="btn btn-primary" onclick="viewOpPanel('${op.mobile}')" style="background: rgba(0, 240, 255, 0.2); border-color: #00f0ff; color: #00f0ff; margin-right: 5px;"><i class="fa-solid fa-eye"></i> View Panel</button>
                        <button class="btn btn-primary" onclick="openInlineOpEditor('${op.mobile}')" style="background: rgba(255, 0, 122, 0.2); border-color: #ff007a; color: #ff007a; margin-right: 5px;"><i class="fa-solid fa-user-pen"></i> Edit Access</button>
                        <button class="btn" onclick="openUserHighlightModal('${op.mobile}')" style="background: rgba(0, 255, 136, 0.2); border-color: #00ff88; color: #00ff88; margin-right: 5px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="Set Highlight specifically for this user"><i class="fa-solid fa-star"></i> Highlight</button>
                        <button class="btn btn-danger" onclick="deleteOp(${index})"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `;
        }
    });
}

window.approveOp = function(index) {
    operators[index].status = 'active';
    operators[index].allowedServices = services.map(s => s.title); // Auto grant all default
    saveData();
    renderUsers();
    renderPasswordSelect(); // Update select dropdown
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
};
window.deleteOpIndex = -1;
window.deleteOp = function(index) {
    window.deleteOpIndex = index;
    document.getElementById('deleteOpPwd').value = '';
    document.getElementById('deleteOpModal').style.display = 'flex';
};

window.confirmDeleteOp = function() {
    const index = window.deleteOpIndex;
    if (index === -1) return;
    
    const pwd = document.getElementById('deleteOpPwd').value;
    if (pwd === "1292") {
        lastDeletedItem = { type: 'operator', index: index, data: operators[index] };
        operators.splice(index, 1);
        saveData();
        
        if (operators.length === 0 && typeof db !== 'undefined' && db !== null) {
            db.ref('cyberCafeOperators').remove();
        }
        
        renderUsers();
        renderPasswordSelect();
        if (typeof renderBlacklist === 'function') renderBlacklist();
        
        showToast("Operator deleted permanently. <button onclick='undoDelete()' style='background:none; border:none; color:var(--primary-color); cursor:pointer; font-weight:bold; text-decoration:underline; margin-left: 10px;'><i class='fa-solid fa-rotate-left'></i> UNDO</button>", "warning");
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
        
        document.getElementById('deleteOpModal').style.display = 'none';
    } else {
        showToast("Incorrect Master Password! Deletion aborted.", "error");
        document.getElementById('deleteOpModal').style.display = 'none';
    }
};

window.performDeepSearch = function(inputId, tbodyId, isSelect = false) {
    const input = document.getElementById(inputId).value.toLowerCase();
    const container = document.getElementById(tbodyId);
    if (!container) return;
    
    const items = isSelect ? container.getElementsByTagName('option') : container.getElementsByTagName('tr');
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if(isSelect && item.value === "") continue; // Skip placeholder option
        
        const textContent = item.textContent.toLowerCase();
        const email = (item.getAttribute('data-email') || '').toLowerCase();
        const username = (item.getAttribute('data-username') || '').toLowerCase();
        const mobile = (item.getAttribute('data-mobile') || '').toLowerCase();
        const shop = (item.getAttribute('data-shop') || '').toLowerCase();
        const rDate = (item.getAttribute('data-date') || '').toLowerCase();
        const aadhar = (item.getAttribute('data-aadhar') || '').toLowerCase();
        
        if (textContent.includes(input) || email.includes(input) || username.includes(input) || mobile.includes(input) || shop.includes(input) || rDate.includes(input) || aadhar.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
};

window.searchUsers = function() { 
    performDeepSearch('userSearchInput', 'backendActiveList'); 
    performDeepSearch('userSearchInput', 'backendPendingList'); 
};

window.renderBlacklist = function() {
    const list = document.getElementById('backendBlacklistList');
    if(!list) return;
    list.innerHTML = '';
    
    operators.forEach((op, index) => {
        let photoHtml = op.photo ? `<img src="${op.photo}" class="operator-img" style="width:40px; height:40px; border-radius:50%; border:1px solid #00f0ff; cursor:pointer;" onclick="openPhotoModal('${op.photo}', '${op.name.replace(/'/g, "\\'")}', 'Profile')" title="View/Download Profile Photo">` : `<i class="fa-solid fa-user-circle" style="font-size:2rem; color:gray; cursor:pointer;" onclick="alert('No profile photo uploaded.')" title="No Profile Photo"></i>`;
        let shopPhotoHtml = op.shopPhoto ? `<button class="btn" onclick="openPhotoModal('${op.shopPhoto}', '${op.name.replace(/'/g, "\\'")}', 'Shop')" style="padding: 6px 10px; background: rgba(0, 240, 255, 0.15); border: 1px solid var(--primary-color); border-radius: 6px; cursor: pointer; color: var(--primary-color); font-size: 0.85rem; display: inline-flex; align-items: center; gap: 5px; font-weight: bold; border-color: var(--primary-color);" title="View/Download Shop Photo"><i class="fa-solid fa-store"></i> Shop</button>` : `<span style="color:var(--text-muted); font-size:0.82rem;">No Shop Pic</span>`;
        
        let profileTd = `
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${photoHtml}
                    ${shopPhotoHtml}
                </div>
            </td>
        `;
        
        let statusBadge = '';
        let actionBtn = '';
        
        if (op.blacklisted === true) {
            statusBadge = `<span class="badge-danger" style="background: rgba(255, 0, 122, 0.2); color: #ff007a; border: 1px solid #ff007a; padding: 4px 8px; border-radius: 4px; font-weight: 600;"><i class="fa-solid fa-ban"></i> Blocked</span>`;
            actionBtn = `
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-danger" disabled style="padding: 6px 12px; font-weight: bold; opacity: 0.4; cursor: not-allowed;"><i class="fa-solid fa-ban"></i> Block</button>
                    <button class="btn" onclick="toggleBlacklist(${index}, false)" style="background: #00ff88; color: #000; font-weight: bold; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; transition: all 0.2s;"><i class="fa-solid fa-unlock"></i> Unblock</button>
                </div>
            `;
        } else {
            statusBadge = `<span class="badge-success" style="background: rgba(0, 255, 136, 0.2); color: #00ff88; border: 1px solid #00ff88; padding: 4px 8px; border-radius: 4px; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Active</span>`;
            actionBtn = `
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-danger" onclick="toggleBlacklist(${index}, true)" style="padding: 6px 12px; font-weight: bold;"><i class="fa-solid fa-ban"></i> Block</button>
                    <button class="btn" disabled style="background: #00ff88; color: #000; font-weight: bold; border: none; padding: 6px 12px; border-radius: 6px; cursor: not-allowed; opacity: 0.4;"><i class="fa-solid fa-unlock"></i> Unblock</button>
                </div>
            `;
        }
        
        list.innerHTML += `
            <tr data-username="${(op.username || '').replace(/"/g, '&quot;')}" data-mobile="${op.mobile}" data-email="${(op.email || '').replace(/"/g, '&quot;')}" data-shop="${(op.shopName || '').replace(/"/g, '&quot;')}" data-date="${op.registrationDate || ''}">
                ${profileTd}
                <td><strong>${op.name}</strong><br><small style="color:var(--text-muted)">@${op.username || 'unknown'} / ${op.mobile}</small></td>
                <td>${op.shopName || '-'}</td>
                <td>${statusBadge}</td>
                <td>${actionBtn}</td>
            </tr>
        `;
    });
    
    if (operators.length === 0) {
        list.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:30px;">No registered operators to display.</td></tr>`;
    }
};

window.toggleBlacklist = function(index, shouldBlock) {
    const actionText = shouldBlock ? "block" : "unblock";
    if (confirm(`Are you sure you want to ${actionText} this user?`)) {
        operators[index].blacklisted = shouldBlock;
        saveData();
        renderBlacklist();
        renderUsers();
        showToast(`User ${shouldBlock ? 'Blocked' : 'Unblocked'} successfully!`, "success");
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    }
};

window.searchBlacklistUsers = function() { performDeepSearch('blacklistSearchInput', 'backendBlacklistList'); };

window.viewOpPanel = function(mobile) {
    const op = operators.find(o => String(o.mobile) === String(mobile));
    if(!op) return;
    
    // Set temp auth for preview so the iframe logs in as them
    sessionStorage.setItem('cyberCafeAuth', JSON.stringify({
        name: op.name,
        role: 'operator',
        id: op.mobile
    }));
    
    // Populate Right Side Form
    document.getElementById('ucpMobile').value = op.mobile;
    document.getElementById('ucpName').value = op.name;
    document.getElementById('ucpShop').value = op.shopName || '';
    document.getElementById('ucpUserName').textContent = op.name + " (" + op.mobile + ")";
    
    const srvContainer = document.getElementById('ucpServices');
    srvContainer.innerHTML = '';
    
    services.forEach(srv => {
        const isChecked = (op.allowedServices || []).includes(srv.title) ? 'checked' : '';
        srvContainer.innerHTML += `
            <label style="color:#e2e8f0; font-size:0.95rem; display:flex; align-items:center; gap:8px; cursor:pointer; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border: 1px solid rgba(0,240,255,0.1);">
                <input type="checkbox" value="${srv.title}" class="ucp-srv-cb" ${isChecked} style="width: 18px; height: 18px; accent-color: var(--primary-color);"> ${srv.title}
            </label>
        `;
    });
    
    // Load Iframe
    document.getElementById('ucpPreviewFrame').src = 'index.html';
    
    // Show Modal
    document.getElementById('userControlPanel').style.display = 'flex';
};

window.closeUserControlPanel = function() {
    document.getElementById('userControlPanel').style.display = 'none';
    document.getElementById('ucpPreviewFrame').src = '';
};

window.ucpQuickAddService = function() {
    const title = document.getElementById('ucpQuickTitle').value.trim();
    const url = document.getElementById('ucpQuickUrl').value.trim();
    const mobile = document.getElementById('ucpMobile').value;
    
    if(!title || !url) return showToast("Please enter Service Name and URL", "warning");
    
    // Add to global services under first category
    const cat = categories.length > 0 ? categories[0].id : 'all';
    services.push({ title: title, url: url, icon: 'fa-globe', category: cat });
    
    // Auto assign to this user
    const opIndex = operators.findIndex(o => String(o.mobile) === String(mobile));
    if(opIndex !== -1) {
        if(!operators[opIndex].allowedServices) operators[opIndex].allowedServices = [];
        operators[opIndex].allowedServices.push(title);
    }
    
    saveData();
    renderServices(); 
    
    // Re-render the right side checkboxes
    viewOpPanel(mobile);
    
    // Apply and Sync
    saveUserControlPanel();
    
    document.getElementById('ucpQuickTitle').value = '';
    document.getElementById('ucpQuickUrl').value = '';
    showToast("Custom Service Added & Synced!", "success");
};

window.saveUserControlPanel = function() {
    const mobile = document.getElementById('ucpMobile').value;
    const opIndex = operators.findIndex(o => String(o.mobile) === String(mobile));
    if(opIndex === -1) return;
    
    operators[opIndex].name = document.getElementById('ucpName').value.trim();
    operators[opIndex].shopName = document.getElementById('ucpShop').value.trim();
    
    const checkboxes = document.querySelectorAll('.ucp-srv-cb');
    let allowed = [];
    checkboxes.forEach(cb => {
        if(cb.checked) allowed.push(cb.value);
    });
    operators[opIndex].allowedServices = allowed;
    
    saveData();
    renderUsers(); 
    
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    showToast("Settings applied! Left screen updated live.", "success");
};

window.openInlineOpEditor = function(mobile) {
    const op = operators.find(o => String(o.mobile) === String(mobile));
    if(!op) return;
    
    document.getElementById('editOpMobile').value = op.mobile;
    document.getElementById('editOpName').value = op.name;
    document.getElementById('editOpShop').value = op.shopName || '';
    
    const srvContainer = document.getElementById('editOpServices');
    srvContainer.innerHTML = '';
    
    services.forEach(srv => {
        const isChecked = (op.allowedServices || []).includes(srv.title) ? 'checked' : '';
        srvContainer.innerHTML += `
            <label style="color:var(--text-muted); font-size:0.95rem; display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" value="${srv.title}" class="op-srv-cb" ${isChecked} style="width: 18px; height: 18px; accent-color: var(--primary-color);"> ${srv.title}
            </label>
        `;
    });
    
    const editor = document.getElementById('inlineOpEditor');
    editor.style.display = 'block';
    editor.scrollIntoView({ behavior: 'smooth' });
};

window.saveInlineOpEditor = function() {
    const mobile = document.getElementById('editOpMobile').value;
    const opIndex = operators.findIndex(o => String(o.mobile) === String(mobile));
    if(opIndex === -1) return;
    
    operators[opIndex].name = document.getElementById('editOpName').value.trim();
    operators[opIndex].shopName = document.getElementById('editOpShop').value.trim();
    
    const checkboxes = document.querySelectorAll('.op-srv-cb');
    let allowed = [];
    checkboxes.forEach(cb => {
        if(cb.checked) allowed.push(cb.value);
    });
    operators[opIndex].allowedServices = allowed;
    
    saveData();
    document.getElementById('inlineOpEditor').style.display = 'none';
    renderUsers();
    
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    showToast("User Access & Profile updated successfully!", "success");
};

// -- INBOX TAB --
function renderInbox() {
    const inbox = document.getElementById('supportInbox');
    inbox.innerHTML = '';
    document.getElementById('msgBadge').textContent = messages.length;

    if(messages.length === 0) {
        inbox.innerHTML = '<p style="color:var(--text-muted); padding:20px;">Inbox is empty. No issues reported!</p>';
        return;
    }

    messages.slice().reverse().forEach((msg, i) => {
        const trueIndex = messages.length - 1 - i;
        let replyHtml = msg.reply ? `
            <div style="margin-top:15px; padding:10px; background:rgba(0,255,136,0.1); border-left:3px solid #00ff88; border-radius:4px;">
                <small style="color:#00ff88; display:block; margin-bottom:5px;"><i class="fa-solid fa-reply"></i> Admin Reply:</small>
                ${msg.reply}
            </div>
        ` : `
            <div style="margin-top:15px; display:flex; gap:10px;">
                <input type="text" id="replyInput_${trueIndex}" placeholder="Type reply..." style="flex:1; padding:8px; background:rgba(0,0,0,0.5); border:1px solid var(--border); color:#fff; border-radius:4px;">
                <button onclick="sendReply(${trueIndex})" class="btn btn-primary" style="padding:8px 15px;">Reply</button>
            </div>
        `;
        
        inbox.innerHTML += `
            <div class="msg-card">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <span style="font-weight:bold; color:#ffdd57;">${msg.senderName} (${msg.mobile})</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">${msg.date}</span>
                </div>
                <div style="color:#fff; line-height:1.5;">${msg.text}</div>
                ${replyHtml}
                <button onclick="deleteMsg(${trueIndex})" class="btn btn-danger" style="margin-top:10px; width:100%;"><i class="fa-solid fa-trash"></i> Delete Ticket</button>
            </div>
        `;
    });
}

window.sendReply = function(index) {
    const text = document.getElementById(`replyInput_${index}`).value.trim();
    if(!text) return;
    messages[index].reply = text;
    saveData();
    renderInbox();
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_MSGS', data: messages }); } catch(err) {}
    showToast("Reply sent to user!", "success");
};

window.deleteMsg = function(index) {
    messages.splice(index, 1);
    saveData();
    renderInbox();
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_MSGS', data: messages }); } catch(err) {}
};

// -- PASSWORD CHANGE FOR USER TAB --
function renderPasswordSelect() {
    const select = document.getElementById('pwdUserSelect');
    if(!select) return;
    select.innerHTML = '<option value="">-- Choose User --</option>';
    
    operators.forEach(op => {
        select.innerHTML += `<option value="${op.mobile}" data-username="${(op.username || '').replace(/"/g, '&quot;')}" data-mobile="${op.mobile}" data-email="${(op.email || '').replace(/"/g, '&quot;')}" data-shop="${(op.shopName || '').replace(/"/g, '&quot;')}" data-date="${op.registrationDate || ''}">${op.name} (${op.mobile}) - ${op.shopName || 'No Shop'}</option>`;
    });
}

window.searchPasswordUsers = function() { performDeepSearch('pwdUserSearchInput', 'pwdUserSelect', true); };

window.changeUserPassword = function() {
    const mobile = document.getElementById('pwdUserSelect').value;
    const newPwd = document.getElementById('pwdNewPassword').value.trim();
    
    if(!mobile) {
        showToast("Please select a user first!", "warning");
        return;
    }
    if(!newPwd || newPwd.length < 4) {
        showToast("Password must be at least 4 characters!", "warning");
        return;
    }
    
    const opIndex = operators.findIndex(o => o.mobile === mobile);
    if(opIndex === -1) {
        showToast("User not found!", "warning");
        return;
    }
    
    operators[opIndex].password = newPwd;
    saveData();
    
    // Push update to local storage via broadcast
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
    
    document.getElementById('pwdUserSelect').value = '';
    document.getElementById('pwdNewPassword').value = '';
    showToast(`Password for ${operators[opIndex].name} changed successfully!`, "success");
};

// ----------------------------------------
// BACKGROUND LIVE POLLING ENGINE (TOAST)
// ----------------------------------------
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if(!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = type === 'success' ? 'fa-check-circle' : (type === 'warning' ? 'fa-exclamation-circle' : 'fa-info-circle');
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <div>
            <div style="font-weight: 600; font-size: 1.05rem;">Live Update</div>
            <div style="font-size: 0.9rem; color: #ddd; margin-top:3px;">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    
    try {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        audio.volume = 0.5;
        audio.play();
    } catch(e) {}
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

const bc = new BroadcastChannel('cyberSync');
bc.onmessage = (event) => {
    const { type, data } = event.data;
    const isActive = document.getElementById('backendApp').style.display !== 'none';
    
    if (type === 'NEW_OP') {
        operators = data;
        saveData();
        if(isActive) {
            showToast("A new Operator Registration Request is pending approval!", "success");
            initBackend();
        }
    } 
    else if (type === 'NEW_MSG') {
        messages = data;
        saveData();
        if(isActive) {
            showToast("New Support Desk Ticket received from an Operator!", "warning");
            initBackend();
        }
    }
    else if (type === 'UPDATE_MEMBERSHIP_PAYMENTS') {
        localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(data));
        if(isActive) {
            renderMembershipHistoryBackend();
        }
    }
    else if (type === 'UPDATE_THEME') {
        const color = data;
        localStorage.setItem('cyberThemeColor', color);
        document.documentElement.style.setProperty('--primary-color', color);
        if(isActive) {
            renderBackendThemePresets();
        }
    }
    else if (type === 'UPDATE_SERVICES') {
        services = data;
        saveData();
        if(isActive) {
            renderServices();
        }
    }
    else if (type === 'UPDATE_HIGHLIGHT') {
        if(data) {
            localStorage.setItem('cyberHighlightConfig', JSON.stringify(data));
        } else {
            localStorage.removeItem('cyberHighlightConfig');
        }
        if(isActive) {
            renderHighlightStatus();
        }
    }
    else if (type === 'UPDATE_AI_KEY') {
        if(data) {
            localStorage.setItem('cyberOpenAiKey', data);
            if(document.getElementById('cyberOpenAiKeyInput')) {
                document.getElementById('cyberOpenAiKeyInput').value = data;
            }
        } else {
            localStorage.removeItem('cyberOpenAiKey');
            if(document.getElementById('cyberOpenAiKeyInput')) {
                document.getElementById('cyberOpenAiKeyInput').value = '';
            }
        }
    }
    else if (type === 'OVERWRITE_CATEGORIES') {
        categories = data;
        saveData();
        if(isActive) {
            renderCategories();
        }
    }
    else if (type === 'OVERWRITE_OPS') {
        operators = data;
        saveData();
        if(isActive) {
            renderUsers();
            renderPendingPayments();
            renderBlacklist();
        }
    }
};

// -- THEME & POPUP CONFIG --
function loadAdvancedConfigs() {
    // Theme
    const savedTheme = localStorage.getItem('cyberThemeColor');
    if(savedTheme) {
        document.documentElement.style.setProperty('--primary-color', savedTheme);
    }
    renderBackendThemePresets();

    // Marquee Notes
    const savedNotes = JSON.parse(localStorage.getItem('cyberNotesConfig'));
    if(savedNotes) {
        document.getElementById('marqueeText').value = savedNotes.text || '';
        document.getElementById('marqueeColor').value = savedNotes.color || '#ffdd57';
    }

    // Popup
    const popupConf = JSON.parse(localStorage.getItem('cyberPopupConfig'));
    if(popupConf) {
        if(popupConf.type === 'text') {
            document.querySelector('input[name="popupType"][value="text"]').checked = true;
            document.getElementById('popupTitle').value = popupConf.title || '';
            document.getElementById('popupBody').value = popupConf.body || '';
        } else if(popupConf.type === 'image') {
            document.querySelector('input[name="popupType"][value="image"]').checked = true;
            if(popupConf.imageBase64) {
                document.getElementById('popupImagePreview').innerHTML = `<img src="${popupConf.imageBase64}" style="max-width: 100%; max-height: 200px; border-radius: 8px;">`;
            }
        }
        togglePopupType();
    }
    
    // Highlight Config
    renderHighlightStatus();

    // OpenAI Key
    let savedAiKey = localStorage.getItem('cyberOpenAiKey');
    if(!savedAiKey || savedAiKey === 'null' || savedAiKey === '') {
        savedAiKey = "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";
        localStorage.setItem('cyberOpenAiKey', savedAiKey);
    }
    if(savedAiKey && document.getElementById('cyberOpenAiKeyInput')) {
        document.getElementById('cyberOpenAiKeyInput').value = savedAiKey;
    }
}

window.togglePopupType = function() {
    const type = document.querySelector('input[name="popupType"]:checked').value;
    if(type === 'text') {
        document.getElementById('popupTextConfig').style.display = 'flex';
        document.getElementById('popupImageConfig').style.display = 'none';
    } else {
        document.getElementById('popupTextConfig').style.display = 'none';
        document.getElementById('popupImageConfig').style.display = 'flex';
    }
};

function renderBackendThemePresets() {
    const presetColors = [
        { name: 'White', color: '#ffffff' },
        { name: 'Cyan', color: '#00f0ff' },
        { name: 'Emerald', color: '#00ff88' },
        { name: 'Rose', color: '#ff007a' },
        { name: 'Amber', color: '#ffdd57' },
        { name: 'Amethyst', color: '#a200ff' },
        { name: 'Electric', color: '#007aff' },
        { name: 'Orange', color: '#ff6b6b' },
        { name: 'Gold', color: '#ffd700' },
        { name: 'Hot Pink', color: '#ff69b4' },
        { name: 'Neon Green', color: '#39ff14' },
        { name: 'Crimson Red', color: '#ff3333' }
    ];

    const presetsContainer = document.getElementById('backendThemePresets');
    const activeNameLabel = document.getElementById('backendActiveThemeName');
    const saveThemeBtn = document.getElementById('backendSaveThemeBtn');
    const currentSavedTheme = localStorage.getItem('cyberThemeColor') || '#00f0ff';

    // Helper to get preset name by color
    function getPresetName(color) {
        const preset = presetColors.find(p => p.color.toLowerCase() === color.toLowerCase());
        return preset ? preset.name : 'Cyan';
    }

    // Initialize label & header theme badge
    const headerThemeName = document.getElementById('headerThemeName');
    if(headerThemeName) {
        headerThemeName.textContent = getPresetName(currentSavedTheme);
    }
    if(activeNameLabel) {
        activeNameLabel.textContent = getPresetName(currentSavedTheme);
        activeNameLabel.style.backgroundColor = currentSavedTheme;
        activeNameLabel.style.color = '#000000';
        activeNameLabel.style.boxShadow = `0 0 10px ${currentSavedTheme}`;
    }

    if(presetsContainer) {
        presetsContainer.innerHTML = '';
        presetColors.forEach(preset => {
            const dot = document.createElement('div');
            dot.className = 'theme-dot';
            dot.style.width = '30px';
            dot.style.height = '30px';
            dot.style.borderRadius = '50%';
            dot.style.backgroundColor = preset.color;
            dot.style.cursor = 'pointer';
            dot.style.border = '2px solid rgba(255,255,255,0.2)';
            dot.style.transition = 'all 0.2s';
            dot.title = preset.name;
            
            const activeTheme = localStorage.getItem('cyberThemeColor') || '#00f0ff';
            if(activeTheme.toLowerCase() === preset.color.toLowerCase()) {
                dot.style.border = '2px solid #fff';
                dot.style.transform = 'scale(1.2)';
                dot.style.boxShadow = `0 0 10px ${preset.color}`;
            }

            dot.addEventListener('click', () => {
                presetsContainer.querySelectorAll('.theme-dot').forEach(el => {
                    el.style.border = '2px solid rgba(255,255,255,0.2)';
                    el.style.transform = 'none';
                    el.style.boxShadow = 'none';
                });
                dot.style.border = '2px solid #fff';
                dot.style.transform = 'scale(1.2)';
                dot.style.boxShadow = `0 0 10px ${preset.color}`;

                // Update UI preview style immediately
                document.documentElement.style.setProperty('--primary-color', preset.color);

                const savedTheme = localStorage.getItem('cyberThemeColor') || '#00f0ff';
                if(preset.color.toLowerCase() !== savedTheme.toLowerCase()) {
                    // Different from saved, show save button and set preview state
                    if(activeNameLabel) {
                        activeNameLabel.textContent = preset.name + ' (Preview)';
                        activeNameLabel.style.backgroundColor = preset.color;
                        activeNameLabel.style.color = '#000000';
                        activeNameLabel.style.boxShadow = `0 0 10px ${preset.color}`;
                    }
                    if(headerThemeName) {
                        headerThemeName.textContent = preset.name + ' (Preview)';
                    }
                    if(saveThemeBtn) {
                        saveThemeBtn.style.display = 'inline-flex';
                        saveThemeBtn.onclick = () => {
                            localStorage.setItem('cyberThemeColor', preset.color);
                            if(activeNameLabel) {
                                activeNameLabel.textContent = preset.name;
                                activeNameLabel.style.backgroundColor = preset.color;
                            }
                            if(headerThemeName) {
                                headerThemeName.textContent = preset.name;
                            }
                            saveThemeBtn.style.display = 'none';
                            try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_THEME', data: preset.color }); } catch(err) {}
                            showToast(`Theme saved permanently: ${preset.name}!`, "success");
                        };
                    }
                } else {
                    // Same as saved, hide save button
                    if(activeNameLabel) {
                        activeNameLabel.textContent = preset.name;
                        activeNameLabel.style.backgroundColor = preset.color;
                        activeNameLabel.style.color = '#000000';
                        activeNameLabel.style.boxShadow = `0 0 10px ${preset.color}`;
                    }
                    if(headerThemeName) {
                        headerThemeName.textContent = preset.name;
                    }
                    if(saveThemeBtn) {
                        saveThemeBtn.style.display = 'none';
                    }
                }
            });
            presetsContainer.appendChild(dot);
        });
    }
}

window.resetTheme = function() {
    const defColor = '#00f0ff';
    localStorage.removeItem('cyberThemeColor');
    document.documentElement.style.setProperty('--primary-color', defColor);
    
    const activeNameLabel = document.getElementById('backendActiveThemeName');
    const saveThemeBtn = document.getElementById('backendSaveThemeBtn');
    const headerThemeName = document.getElementById('headerThemeName');
    if(activeNameLabel) {
        activeNameLabel.textContent = 'Cyan';
        activeNameLabel.style.backgroundColor = defColor;
        activeNameLabel.style.boxShadow = `0 0 10px ${defColor}`;
    }
    if(headerThemeName) {
        headerThemeName.textContent = 'Cyan';
    }
    if(saveThemeBtn) {
        saveThemeBtn.style.display = 'none';
    }

    renderBackendThemePresets();
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_THEME', data: defColor }); } catch(err) {}
    showToast("Global Theme Reset to default Cyan!", "info");
};

window.saveMarquee = function() {
    const text = document.getElementById('marqueeText').value.trim();
    const color = document.getElementById('marqueeColor').value;
    const config = { text, color };
    localStorage.setItem('cyberNotesConfig', JSON.stringify(config));
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_NOTES', data: config }); } catch(err) {}
    showToast("Notes Updated!", "success");
};

window.clearMarquee = function() {
    document.getElementById('marqueeText').value = '';
    localStorage.removeItem('cyberNotesConfig');
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_NOTES', data: null }); } catch(err) {}
    showToast("Notes Removed!", "info");
};

let tempPopupBase64 = null;
window.previewPopupImage = function(input) {
    if(input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                let width = img.width; let height = img.height;
                const MAX = 800; // Compress max width/height to 800px to save storage
                if (width > height) { if (width > MAX) { height *= MAX / width; width = MAX; } }
                else { if (height > MAX) { width *= MAX / height; height = MAX; } }
                canvas.width = width; canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                tempPopupBase64 = canvas.toDataURL('image/jpeg', 0.8);
                document.getElementById('popupImagePreview').innerHTML = `<img src="${tempPopupBase64}" style="max-width: 100%; max-height: 200px; border-radius: 8px;">`;
            }
        };
        reader.readAsDataURL(file);
    }
};

window.savePopup = function() {
    const type = document.querySelector('input[name="popupType"]:checked').value;
    let config = { type: type };
    if(type === 'text') {
        config.title = document.getElementById('popupTitle').value.trim();
        config.body = document.getElementById('popupBody').value.trim();
        if(!config.body) return showToast("Please enter popup message.", "warning");
    } else {
        if(!tempPopupBase64) {
            const ext = JSON.parse(localStorage.getItem('cyberPopupConfig'));
            if(ext && ext.imageBase64) tempPopupBase64 = ext.imageBase64;
            else return showToast("Please select an image.", "warning");
        }
        config.imageBase64 = tempPopupBase64;
    }
    localStorage.setItem('cyberPopupConfig', JSON.stringify(config));
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_POPUP', data: config }); } catch(err) {}
    showToast("Login Popup Enabled!", "success");
};

window.removePopup = function() {
    localStorage.removeItem('cyberPopupConfig');
    document.getElementById('popupTitle').value = '';
    document.getElementById('popupBody').value = '';
    document.getElementById('popupImagePreview').innerHTML = '';
    tempPopupBase64 = null;
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_POPUP', data: null }); } catch(err) {}
    showToast("Login Popup Disabled!", "info");
};

window.openPhotoModal = function(photoBase64, userName, photoType) {
    const modal = document.getElementById('photoViewerModal');
    const modalImg = document.getElementById('photoModalImage');
    const modalTitle = document.getElementById('photoModalTitle');
    const downloadBtn = document.getElementById('photoDownloadBtn');
    
    if(!modal || !modalImg || !modalTitle || !downloadBtn) return;
    
    modalTitle.innerHTML = `<i class="fa-solid ${photoType === 'Profile' ? 'fa-user-circle' : 'fa-store'}" style="color: var(--primary-color);"></i> <span>${userName}'s ${photoType} Photo</span>`;
    modalImg.src = photoBase64;
    
    // Set up download click handler
    downloadBtn.onclick = function() {
        const link = document.createElement('a');
        link.href = photoBase64;
        
        // Clean filename: replace spaces/special chars with underscores
        const cleanName = userName.trim().toLowerCase().replace(/[^a-z0-9]/gi, '_');
        link.download = `${cleanName}_${photoType.toLowerCase()}_photo.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showToast(`${photoType} Photo downloaded successfully!`, "success");
    };
    // Animate Modal show
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.photo-modal-card').style.transform = 'scale(1)';
    }, 10);
};

window.closePhotoModal = function() {
    const modal = document.getElementById('photoViewerModal');
    if(!modal) return;
    
    modal.style.opacity = '0';
    modal.querySelector('.photo-modal-card').style.transform = 'scale(0.85)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}

document.addEventListener('firebaseSynced', () => {
    // When Firebase updates localStorage, refresh the UI
    operators = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
    services = Object.values(JSON.parse(localStorage.getItem('cyberCafeServices')) || []).filter(Boolean);
    messages = Object.values(JSON.parse(localStorage.getItem('cyberCafeMessages')) || []).filter(Boolean);
    categories = Object.values(JSON.parse(localStorage.getItem('cyberCafeCategories')) || []).filter(Boolean);
    
    if (typeof renderUsers === 'function') renderUsers();
    if (typeof renderPayments === 'function') renderPayments();
    if (typeof renderServices === 'function') renderServices();
    if (typeof renderCategories === 'function') renderCategories();
    if (typeof renderInbox === 'function') renderInbox();
    if (typeof renderPendingPayments === 'function') renderPendingPayments();
    if (typeof renderMembershipHistoryBackend === 'function') renderMembershipHistoryBackend();
    if (typeof renderBlacklist === 'function') renderBlacklist();
    if (typeof renderPasswordSelect === 'function') renderPasswordSelect();
    if (typeof renderHighlightStatus === 'function') renderHighlightStatus();
    
    // Populate OpenAI key input if updated from sync
    const aiKey = localStorage.getItem('cyberOpenAiKey');
    const aiKeyInput = document.getElementById('cyberOpenAiKeyInput');
    if(aiKeyInput) {
        aiKeyInput.value = aiKey || '';
    }
});;

window.openUserHighlightModal = function(mobile) {
    const op = operators.find(o => String(o.mobile) === String(mobile));
    if(!op) return showToast("Operator not found", "warning");
    
    document.getElementById('uhlOperatorMobile').value = op.mobile;
    document.getElementById('uhlOperatorName').textContent = op.name + " (" + op.mobile + ")";
    
    const select = document.getElementById('uhlServiceSelect');
    if(select) {
        select.innerHTML = '<option value="">-- Choose Highlight Service --</option>';
        services.forEach(srv => {
            select.innerHTML += `<option value="${srv.title.replace(/"/g, '&quot;')}">${srv.title}</option>`;
        });
        
        // Pre-populate if highlight already set
        if(op.highlightConfig && op.highlightConfig.title) {
            select.value = op.highlightConfig.title;
            document.getElementById('uhlColor').value = op.highlightConfig.color || '#00ff88';
            document.getElementById('uhlColorText').textContent = op.highlightConfig.color || '#00ff88';
        } else {
            select.value = '';
            document.getElementById('uhlColor').value = '#00ff88';
            document.getElementById('uhlColorText').textContent = '#00ff88';
        }
    }
    
    document.getElementById('userHighlightModal').style.display = 'flex';
};

window.saveUserHighlight = function() {
    const mobile = document.getElementById('uhlOperatorMobile').value;
    const select = document.getElementById('uhlServiceSelect');
    const colorInput = document.getElementById('uhlColor');
    
    if(!select || !colorInput) return;
    
    const selectedTitle = select.value;
    const selectedColor = colorInput.value;
    
    if(!selectedTitle) return showToast("Please select a service to highlight", "warning");
    
    const opIndex = operators.findIndex(o => String(o.mobile) === String(mobile));
    if(opIndex === -1) return showToast("Operator not found", "warning");
    
    operators[opIndex].highlightConfig = { title: selectedTitle, color: selectedColor };
    saveData();
    renderUsers();
    
    document.getElementById('userHighlightModal').style.display = 'none';
    showToast(`Custom highlight saved for ${operators[opIndex].name}!`, "success");
    
    // Broadcast operators list update so frontend tab syncs instantly in real-time
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
};

window.clearUserHighlight = function() {
    const mobile = document.getElementById('uhlOperatorMobile').value;
    const opIndex = operators.findIndex(o => String(o.mobile) === String(mobile));
    if(opIndex === -1) return;
    
    operators[opIndex].highlightConfig = null;
    saveData();
    renderUsers();
    
    document.getElementById('userHighlightModal').style.display = 'none';
    showToast(`Custom highlight removed for ${operators[opIndex].name}`, "info");
    
    // Broadcast operators list update so frontend tab syncs instantly in real-time
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'OVERWRITE_OPS', data: operators }); } catch(err) {}
};

window.saveOpenAiKey = function() {
    const key = document.getElementById('cyberOpenAiKeyInput').value.trim();
    if(!key) return showToast("Please enter an OpenAI API Key", "warning");
    
    localStorage.setItem('cyberOpenAiKey', key);
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_AI_KEY', data: key }); } catch(err) {}
    showToast("OpenAI API Key saved successfully!", "success");
};

window.clearOpenAiKey = function() {
    localStorage.removeItem('cyberOpenAiKey');
    const input = document.getElementById('cyberOpenAiKeyInput');
    if(input) input.value = '';
    try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_AI_KEY', data: null }); } catch(err) {}
    showToast("OpenAI API Key removed successfully!", "info");
};

// --- MOBILE RESPONSIVE SIDEBAR TOGGLE ---
document.addEventListener('DOMContentLoaded', () => {
    const backendSidebarToggle = document.getElementById('backendSidebarToggle');
    const backendSidebarClose = document.getElementById('backendSidebarClose');
    const backendSidebarBackdrop = document.getElementById('backendSidebarBackdrop');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelector('.nav-links');

    if (backendSidebarToggle && sidebar && backendSidebarBackdrop) {
        backendSidebarToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
            backendSidebarBackdrop.classList.add('active');
        });
    }

    const closeSidebar = () => {
        if (sidebar && backendSidebarBackdrop) {
            sidebar.classList.remove('active');
            backendSidebarBackdrop.classList.remove('active');
        }
    };

    if (backendSidebarClose) {
        backendSidebarClose.addEventListener('click', closeSidebar);
    }

    if (backendSidebarBackdrop) {
        backendSidebarBackdrop.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking a nav link on mobile
    if (navLinks) {
        navLinks.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                if (e.target.tagName === 'LI' || e.target.closest('li')) {
                    setTimeout(closeSidebar, 200);
                }
            }
        });
    }
});

window.searchBackendServices = function() {
    const query = document.getElementById('srvSearchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#globalServiceList tr');
    rows.forEach(row => {
        const text = row.querySelector('td strong').textContent.toLowerCase();
        if (text.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
};

// ==========================================
// --- RECEIVE WORK & OPERATOR CHAT LOGIC ---
// ==========================================

let selectedRecTicketId = null;
let receiveWorkFilterText = "";
let receiveWorkListenerActive = false;
let allWorkRequests = [];

function loadReceiveWorkFromCache() {
    try {
        const cachedRequests = localStorage.getItem('cyberCafeWorkRequests_admin');
        if (cachedRequests) {
            allWorkRequests = JSON.parse(cachedRequests);
            allWorkRequests.sort((a, b) => b.timestamp - a.timestamp);
        }
    } catch(e) {
        console.error("Error loading cached receive work requests:", e);
    }
}

window.initReceiveWork = function() {
    if (typeof db === 'undefined' || db === null) return;
    
    // Load cached receive work tickets to display instantly
    if (allWorkRequests.length === 0) {
        loadReceiveWorkFromCache();
    }
    
    // Render from cache immediately
    renderReceiveWorkList();
    updateReceiveWorkBadge();

    if (receiveWorkListenerActive) return;
    receiveWorkListenerActive = true;

    db.ref('cyberCafeWorkRequests').on('value', (snapshot) => {
        allWorkRequests = [];
        snapshot.forEach(child => {
            allWorkRequests.push(child.val());
        });
        
        // Sort by timestamp (newest first)
        allWorkRequests.sort((a, b) => b.timestamp - a.timestamp);
        
        // Save to local cache permanently
        try {
            localStorage.setItem('cyberCafeWorkRequests_admin', JSON.stringify(allWorkRequests));
        } catch(e) {
            console.error("Error caching receive work requests:", e);
        }
        
        // Render list
        renderReceiveWorkList();
        
        // If we have selected a ticket, update it
        if (selectedRecTicketId) {
            const updatedTicket = allWorkRequests.find(t => t.id === selectedRecTicketId);
            if (updatedTicket) {
                renderReceiveChatWindow(selectedRecTicketId);
            }
        }
        
        // Update sidebar badge
        updateReceiveWorkBadge();
    });
};

window.filterReceiveWorkList = function() {
    const input = document.getElementById('receiveWorkSearch');
    if (input) receiveWorkFilterText = input.value.toLowerCase();
    renderReceiveWorkList();
};

window.renderReceiveWorkList = function() {
    const container = document.getElementById('receiveWorkList');
    if (!container) return;

    container.innerHTML = "";
    
    const filtered = allWorkRequests.filter(t => {
        return t.operatorName.toLowerCase().includes(receiveWorkFilterText) ||
               t.operatorPhone.toLowerCase().includes(receiveWorkFilterText) ||
               t.id.toLowerCase().includes(receiveWorkFilterText) ||
               t.message.toLowerCase().includes(receiveWorkFilterText);
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 40px 10px;">
                <i class="fa-solid fa-hourglass" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i>
                <p>No work tickets found</p>
            </div>
        `;
        return;
    }

    const viewTimes = getAdminLastViewedTimes();

    filtered.forEach(ticket => {
        const item = document.createElement('div');
        item.style.padding = "12px";
        item.style.border = "1px solid var(--glass-border)";
        item.style.borderRadius = "8px";
        item.style.background = selectedRecTicketId === ticket.id ? "rgba(0, 240, 255, 0.1)" : "rgba(255,255,255,0.02)";
        item.style.borderLeft = selectedRecTicketId === ticket.id ? "3px solid var(--primary-color)" : "1px solid var(--glass-border)";
        item.style.cursor = "pointer";
        item.style.transition = "var(--transition)";
        item.style.marginBottom = "8px";
        
        item.onclick = () => selectReceiveWorkTicket(ticket.id);
        
        // Check unread
        const lastViewed = viewTimes[ticket.id] || 0;
        const opReplies = (ticket.replies || []).filter(r => r.sender === 'operator');
        const hasUnread = opReplies.length > 0 && opReplies[opReplies.length - 1].timestamp > lastViewed;
        
        const dateStr = new Date(ticket.timestamp).toLocaleDateString('en-IN', {
            day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });

        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-weight:700; color:#fff; font-size:0.85rem;">${ticket.operatorName}</span>
                <span class="ticket-status-badge badge-${ticket.status}" style="font-size:0.65rem;">${ticket.status}</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:8px;">
                ${ticket.message}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.7rem; color:var(--text-muted);">${dateStr}</span>
                ${hasUnread ? `<span style="width: 8px; height: 8px; background: #ff007a; border-radius: 50%; display: inline-block; box-shadow: 0 0 8px #ff007a;"></span>` : ''}
            </div>
        `;
        container.appendChild(item);
    });
};

window.selectReceiveWorkTicket = function(ticketId) {
    selectedRecTicketId = ticketId;
    
    const placeholder = document.getElementById('receivePlaceholder');
    if (placeholder) placeholder.style.display = 'none';

    renderReceiveWorkList();
    renderReceiveChatWindow(ticketId);
    
    // Save read time
    saveAdminLastViewedTime(ticketId, Date.now());
};

window.renderReceiveChatWindow = function(ticketId) {
    const ticket = allWorkRequests.find(t => t.id === ticketId);
    if (!ticket) return;

    const dateStr = new Date(ticket.timestamp).toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    
    document.getElementById('recTicketTitle').textContent = `Ticket #${ticket.id.slice(-8)} - ${ticket.operatorName}`;
    document.getElementById('recTicketTime').innerHTML = `<i class="fa-solid fa-user"></i> Operator: <strong>${ticket.operatorName}</strong> | Submitted: ${dateStr}`;
    document.getElementById('recOperatorContact').innerHTML = `<i class="fa-solid fa-phone"></i> Mobile: +91 ${ticket.operatorPhone || 'N/A'}`;
    
    const statusSelect = document.getElementById('recStatusSelect');
    if (statusSelect) statusSelect.value = ticket.status;

    document.getElementById('recTicketMessage').textContent = ticket.message;

    // Attachments
    const attachContainer = document.getElementById('recTicketAttachments');
    attachContainer.innerHTML = "";
    
    if (ticket.files && Array.isArray(ticket.files) && ticket.files.length > 0) {
        ticket.files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.style.display = "flex";
            fileItem.style.flexDirection = "column";
            fileItem.style.gap = "6px";
            fileItem.style.border = "1px solid var(--glass-border)";
            fileItem.style.borderRadius = "8px";
            fileItem.style.padding = "8px";
            fileItem.style.background = "rgba(255,255,255,0.02)";
            fileItem.style.width = "140px";
            fileItem.style.alignItems = "center";
            fileItem.style.textAlign = "center";
            fileItem.style.marginBottom = "5px";

            if (file.type === 'image') {
                fileItem.innerHTML = `
                    <a href="${file.data}" target="_blank">
                        <img src="${file.data}" alt="${file.name}" style="width:120px; height:120px; object-fit:cover; border-radius:6px; border:1px solid var(--glass-border);">
                    </a>
                    <span style="font-size: 0.75rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:120px;" title="${file.name}">${file.name}</span>
                    <a href="${file.data}" download="${file.name || 'image.jpg'}" class="btn btn-primary" style="padding: 4px 8px; font-size: 0.7rem; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 4px; width: 100%;">
                        <i class="fa-solid fa-download"></i> Download
                    </a>
                `;
            } else if (file.type === 'pdf') {
                fileItem.innerHTML = `
                    <i class="fa-solid fa-file-pdf" style="font-size: 2.5rem; color: #ff3333; margin-top: 15px; margin-bottom: 15px;"></i>
                    <span style="font-size: 0.75rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:120px; margin-bottom: 8px;" title="${file.name}">${file.name}</span>
                    <a href="${file.data}" download="${file.name || 'document.pdf'}" class="chat-attachment-pdf" style="display:inline-flex; align-items:center; justify-content:center; gap:4px; background:rgba(255, 51, 51, 0.1); color:#ff3333; border:1px solid rgba(255, 51, 51, 0.3); padding:4px 8px; border-radius:4px; text-decoration:none; font-size:0.7rem; font-weight:600; width: 100%;">
                        <i class="fa-solid fa-file-pdf"></i> Download
                    </a>
                `;
            } else if (file.type === 'audio') {
                fileItem.innerHTML = `
                    <div class="ticket-audio-player" style="width:100%; justify-content:center;">
                        <i class="fa-solid fa-microphone" style="color: #00ff88; font-size: 1.1rem;"></i>
                        <audio src="${file.data}" controls style="max-width: 90px; height: 24px; outline:none; background:#000; border-radius:12px; overflow:hidden;"></audio>
                    </div>
                `;
            }
            attachContainer.appendChild(fileItem);
        });
    } else if (ticket.fileType && ticket.fileType !== 'none' && ticket.fileData) {
        const fileItem = document.createElement('div');
        fileItem.style.display = "flex";
        fileItem.style.flexDirection = "column";
        fileItem.style.gap = "6px";
        fileItem.style.border = "1px solid var(--glass-border)";
        fileItem.style.borderRadius = "8px";
        fileItem.style.padding = "8px";
        fileItem.style.background = "rgba(255,255,255,0.02)";
        fileItem.style.width = "140px";
        fileItem.style.alignItems = "center";
        fileItem.style.textAlign = "center";

        if (ticket.fileType === 'image') {
            fileItem.innerHTML = `
                <a href="${ticket.fileData}" target="_blank">
                    <img src="${ticket.fileData}" alt="${ticket.fileName}" style="width:120px; height:120px; object-fit:cover; border-radius:6px; border:1px solid var(--glass-border);">
                </a>
                <span style="font-size: 0.75rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:120px;" title="${ticket.fileName}">${ticket.fileName}</span>
                <a href="${ticket.fileData}" download="${ticket.fileName || 'image.jpg'}" class="btn btn-primary" style="padding: 4px 8px; font-size: 0.7rem; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 4px; width: 100%;">
                    <i class="fa-solid fa-download"></i> Download
                </a>
            `;
        } else if (ticket.fileType === 'pdf') {
            fileItem.innerHTML = `
                <i class="fa-solid fa-file-pdf" style="font-size: 2.5rem; color: #ff3333; margin-top: 15px; margin-bottom: 15px;"></i>
                <span style="font-size: 0.75rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:120px; margin-bottom: 8px;" title="${ticket.fileName}">${ticket.fileName}</span>
                <a href="${ticket.fileData}" download="${ticket.fileName || 'document.pdf'}" class="chat-attachment-pdf" style="display:inline-flex; align-items:center; justify-content:center; gap:4px; background:rgba(255, 51, 51, 0.1); color:#ff3333; border:1px solid rgba(255, 51, 51, 0.3); padding:4px 8px; border-radius:4px; text-decoration:none; font-size:0.7rem; font-weight:600; width: 100%;">
                    <i class="fa-solid fa-file-pdf"></i> Download
                </a>
            `;
        } else if (ticket.fileType === 'audio') {
            fileItem.innerHTML = `
                <div class="ticket-audio-player" style="display:flex; align-items:center; gap:10px; background:rgba(0,0,0,0.3); border:1px solid var(--glass-border); padding:8px 12px; border-radius:12px; width:260px;">
                    <i class="fa-solid fa-microphone" style="color: #00ff88; font-size: 1.2rem;"></i>
                    <audio src="${ticket.fileData}" controls style="max-width: 190px; height: 28px; outline:none; background:#000; border-radius:14px; overflow:hidden;"></audio>
                </div>
            `;
        }
        attachContainer.appendChild(fileItem);
    } else {
        attachContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted);">No attachments</span>`;
    }

    // Chat Bubbles
    const messageContainer = document.getElementById('recChatMessages');
    messageContainer.innerHTML = "";

    const replies = ticket.replies || [];
    replies.forEach(reply => {
        const bubble = document.createElement('div');
        const isMe = reply.sender === 'admin';
        
        bubble.style.maxWidth = "75%";
        bubble.style.padding = "10px 14px";
        bubble.style.borderRadius = "12px";
        bubble.style.lineHeight = "1.4";
        bubble.style.fontSize = "0.9rem";
        bubble.style.position = "relative";
        bubble.style.wordWrap = "break-word";
        bubble.style.display = "flex";
        bubble.style.flexDirection = "column";
        
        if (isMe) {
            bubble.style.alignSelf = "flex-end";
            bubble.style.background = "var(--primary-gradient)";
            bubble.style.color = "#fff";
            bubble.style.borderBottomRightRadius = "2px";
            bubble.style.boxShadow = "0 4px 10px rgba(0, 90, 255, 0.2)";
        } else {
            bubble.style.alignSelf = "flex-start";
            bubble.style.background = "rgba(255, 255, 255, 0.06)";
            bubble.style.color = "#f1f5f9";
            bubble.style.borderBottomLeftRadius = "2px";
            bubble.style.border = "1px solid var(--glass-border)";
        }
        
        const timeVal = reply.timestamp ? new Date(reply.timestamp).toLocaleTimeString('en-IN', {
            hour: '2-digit', minute: '2-digit'
        }) : '';

        bubble.innerHTML = `
            <span style="font-size: 0.75rem; font-weight: 700; margin-bottom: 3px; color: ${isMe ? '#ffd700' : 'var(--primary-color)'};">${reply.senderName || (isMe ? 'Admin (Master)' : 'Operator')}</span>
            <span style="white-space: pre-wrap;">${reply.text}</span>
            <span style="font-size: 0.7rem; opacity: 0.7; margin-top: 4px; align-self: flex-end;">${timeVal}</span>
        `;
        messageContainer.appendChild(bubble);
    });

    // Scroll chat window to bottom
    const scrollContainer = document.getElementById('recChatScrollContainer');
    if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
};

window.sendAdminChatReply = function(e) {
    if (e) e.preventDefault();

    if (!selectedRecTicketId) return;
    const input = document.getElementById('recChatInput');
    const msgText = input.value.trim();
    if (!msgText) return;

    const ticket = allWorkRequests.find(t => t.id === selectedRecTicketId);
    if (!ticket) return;

    const replies = ticket.replies || [];
    
    // Create new reply payload
    const newReply = {
        sender: 'admin',
        senderName: 'Admin (Master)',
        text: msgText,
        timestamp: Date.now()
    };

    replies.push(newReply);

    input.value = "";
    
    db.ref('cyberCafeWorkRequests/' + selectedRecTicketId + '/replies').set(replies)
        .then(() => {
            saveAdminLastViewedTime(selectedRecTicketId, Date.now());
        })
        .catch(err => {
            console.error("Admin chat send error:", err);
            showToast("Failed to send reply.", "error");
        });
};

window.handleAdminChatSubmitOnEnter = function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAdminChatReply();
    }
};

window.updateTicketStatus = function() {
    if (!selectedRecTicketId) return;
    const newStatus = document.getElementById('recStatusSelect').value;
    
    const ticket = allWorkRequests.find(t => t.id === selectedRecTicketId);
    if (!ticket) return;

    const replies = ticket.replies || [];
    
    // Status change notification bubble
    replies.push({
        sender: 'admin',
        senderName: 'Admin System',
        text: `Ticket Status Updated to: ${newStatus.toUpperCase()}`,
        timestamp: Date.now()
    });

    db.ref('cyberCafeWorkRequests/' + selectedRecTicketId).update({
        status: newStatus,
        replies: replies
    })
    .then(() => {
        showToast(`Ticket status updated to ${newStatus}!`, "success");
    })
    .catch(err => {
        console.error("Status update error:", err);
        showToast("Failed to update status.", "error");
    });
};

// Admin Local Last Viewed tracking helpers
function getAdminLastViewedTimes() {
    try {
        return JSON.parse(localStorage.getItem('cyberCafeAdminLastViewedTickets') || '{}');
    } catch(e) {
        return {};
    }
}

function saveAdminLastViewedTime(ticketId, time) {
    const times = getAdminLastViewedTimes();
    times[ticketId] = time;
    localStorage.setItem('cyberCafeAdminLastViewedTickets', JSON.stringify(times));
    updateReceiveWorkBadge();
}

function updateReceiveWorkBadge() {
    const viewTimes = getAdminLastViewedTimes();
    let unreadCount = 0;
    
    allWorkRequests.forEach(ticket => {
        // Only count unread if not selected
        if (selectedRecTicketId && ticket.id === selectedRecTicketId) return;
        
        const lastViewed = viewTimes[ticket.id] || 0;
        const opReplies = (ticket.replies || []).filter(r => r.sender === 'operator');
        
        if (opReplies.length > 0) {
            const lastOpReply = opReplies[opReplies.length - 1];
            if (lastOpReply.timestamp > lastViewed) {
                unreadCount++;
            }
        }
    });

    const badge = document.getElementById('workBadge');
    const badgeTab = document.getElementById('receiveWorkUnreadBadge');
    
    if (unreadCount > 0) {
        if (badge) {
            badge.style.display = 'inline-block';
            badge.textContent = unreadCount;
        }
        if (badgeTab) {
            badgeTab.style.display = 'inline-block';
            badgeTab.textContent = unreadCount;
        }
    } else {
        if (badge) badge.style.display = 'none';
        if (badgeTab) badgeTab.style.display = 'none';
    }
}
