import { initIndexAuth } from "./auth.js";

console.log("index-init loaded");
initIndexAuth();

const goBtn = document.getElementById("goDashboard");
if (goBtn) {
  goBtn.onclick = () => {
    window.location.href = "dashboard.html";
  };
}
