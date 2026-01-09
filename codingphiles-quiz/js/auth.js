import { auth, provider } from "./firebase-config.js";
import {
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

/* INDEX PAGE */
export function indexAuth() {
  const loginBtn = document.getElementById("googleLogin");

  if (loginBtn) {
    loginBtn.onclick = () => {
      signInWithRedirect(auth, provider);
    };
  }

  getRedirectResult(auth).catch(() => {});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "dashboard.html";
    }
  });
}

/* DASHBOARD PAGE */
export function dashboardAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "index.html";
      return;
    }

    document.getElementById("userName").textContent = user.displayName;
    document.getElementById("userPhoto").src = user.photoURL;
  });
}

/* LOGOUT */
export function logoutAuth() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.onclick = async () => {
    await signOut(auth);
    window.location.href = "index.html";
  };
}
