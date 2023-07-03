//Toggle classs active

const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu onclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click di luar navbar menu hilang
const hambuger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal Box
let itemDetailModal = document.querySelectorAll(".modal-open");

itemDetailModal.forEach((btn) => {
  btn.onclick = (e) => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
let closeBtns = document.querySelectorAll(".close-icon");
closeBtns.forEach((btn) => {
  btn.onclick = (e) => {
    btn.closest(".modal").style.display = "none";
    e.preventDefault();
  };
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};

// var id_aktif;x
// function on(clicked_id) {
//   document.getElementById("modal").style.display = "block";
//   document.getElementById(clicked_id).style.display = "block";
//   id_aktif = clicked_id;
// }
// function off() {
//   document.getElementById("modal").style.display = "none";
//   document.getElementById(id_aktif).style.display = "none";
// }
