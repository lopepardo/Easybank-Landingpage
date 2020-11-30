const navToggle = (btn, nav, navBg) => {
  const btnNav = document.getElementById(btn);
  const headerNav = document.getElementById(nav);
  const navGradient = document.querySelector(navBg);

  if (btnNav && headerNav && navGradient) {
    btnNav.addEventListener("click", () => {
      headerNav.classList.toggle("show");
      navGradient.classList.toggle("show-bg");
    });
  }
};

navToggle("btn-nav", "header-nav", ".nav-bg");
