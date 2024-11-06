//hero section//////////////////
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");
const navItems = document.querySelectorAll(".nav-item");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
  menuIcon.classList.toggle("open");

  if (menuIcon.classList.contains("open")) {
    menuIcon.innerHTML = '<i class="bx bx-x"></i>';
  } else {
    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
  }

  if (navList.classList.contains("open")) {
    setTimeout(() => {
      navItems[0].classList.add("active");
    }, 500);
  } else {
    navItems.forEach(item => item.classList.remove("active"));
  }
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    navList.classList.remove("open");
    menuIcon.classList.remove("open");
    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
  });
});



//about section//////////////////

document.addEventListener("DOMContentLoaded", function() {
  const mainImage = document.querySelector('.image-content');
  const secondaryImage = document.querySelector('.secondary-image');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.5 });

  observer.observe(mainImage);
  observer.observe(secondaryImage);
});


//faqs////////////

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;

    faqItem.classList.toggle('active');

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});






