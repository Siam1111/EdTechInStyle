let navIconMobile = document.getElementsByClassName("nav-icon-mobile");
let navItems = document.getElementsByClassName("nav-items");
let crossNav = document.getElementsByClassName("nav-cross");
let navItem = document.getElementsByClassName("nav-item");

// Responsive Styling for mobile
for (let i = 0; i < navItems.length; i++) {
  navIconMobile[i].addEventListener('click', () => {
    navIconMobile[i].classList.add("hide-icon-mobile")
    navItems[i].classList.add("show-nav-items");
    crossNav[i].classList.add("show-nav-cross");
  });

  crossNav[i].addEventListener('click', () => {
    navIconMobile[i].classList.remove("hide-icon-mobile")
    navItems[i].classList.remove("show-nav-items");
    crossNav[i].classList.remove("show-nav-cross");
  });
}

// Styling active tab
for (let index = 0; index < navItem.length; index++) {
  navItem[index].addEventListener('click', (e) => {
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("active");
      e.target.classList.add("active");
    }
  });
}

