// Production Environment Config
window.VITE_API_URL = "__VITE_API_URL__";
if (window.VITE_API_URL.startsWith("__VITE_API_URL")) {
    window.VITE_API_URL = "http://localhost:5000";
}
console.log("eMitra Sathi Backend API URL initialized:", window.VITE_API_URL);

// Firebase v8 Compat SDK Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrctgnqTPjc0vzV_X19JjrwxkEcaiWlkY",
    authDomain: "emitra-sathi.firebaseapp.com",
    projectId: "emitra-sathi",
    storageBucket: "emitra-sathi.firebasestorage.app",
    messagingSenderId: "769463695753",
    appId: "1:769463695753:web:caddf2ad50038ecc61c958",
    measurementId: "G-7Q0BQ47QPM",
    databaseURL: "https://emitra-sathi-default-rtdb.firebaseio.com"
};

// Initialize Firebase gracefully (prevents crashing if offline or blocked)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = typeof firebase !== 'undefined' ? firebase.database() : null;
