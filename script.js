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

  // Delayed underline animation for "Home"
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
  });
});


//about section//////////////////
// JavaScript to make the image slide in every time it comes into view
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



//grid videos ////////////////
// JavaScript for autoplaying video on hover
document.querySelectorAll('.grid-box').forEach(box => {
  const video = box.querySelector('.box-video');
  box.addEventListener('mouseenter', () => {
    video.play();
  });
  box.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset video to start
  });
});

// JavaScript for auto-slide on smaller screens (768px)
if (window.innerWidth <= 768) {
  const gridContainer = document.querySelector('.grid-container');
  let scrollPosition = 0;
  setInterval(() => {
    scrollPosition += window.innerWidth;
    if (scrollPosition >= gridContainer.scrollWidth) {
      scrollPosition = 0;
    }
    gridContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, 3000); // Change slide every 3 seconds
}


//timeline///////////////////////

