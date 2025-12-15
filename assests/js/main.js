console.log("Website Loaded Successfully!");
const modal = document.getElementById('contactModal');
const btn = document.getElementById('contactBtn');
const closeBtn = document.getElementById('closeModal');

btn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};