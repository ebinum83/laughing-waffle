document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("menuButton").addEventListener("click", function () {
  document.getElementById("dropdownMenu").classList.toggle("active");
});

// Close dropdown if clicked outside
window.addEventListener("click", function (e) {
  if (!document.getElementById("menuButton").contains(e.target)) {
    document.getElementById("dropdownMenu").classList.remove("active");
  }
});
