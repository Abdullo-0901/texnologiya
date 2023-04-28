

const tabsParent = document.querySelector(".menu");
const tabs = document.querySelectorAll(".item");
const tabcontent = document.querySelectorAll(".nav2");

// 

function hideTabContent() {
  tabcontent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader-active");
  });
}
function showTabContent(i = 0) {
  tabcontent[i].style.display = "block";
  tabs[i].classList.add("tabheader-active");
}

tabsParent.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains("item")) {
    tabs.forEach((item, ind) => {
      if (target == item) {

        hideTabContent()
        showTabContent(ind)


      }
    })
  }
})

// =============TAB CIM =========================

const navParent = document.querySelectorAll('.dopdown-parent')
const tabsNavbar = document.querySelectorAll('.a-dropdown-parent')
const tabContentHeader = document.querySelectorAll('.teabheadercon')

function hideTabHeader() {
  tabContentHeader.forEach(elem => {
    elem.style.display = "none";
  })
  tabsNavbar.forEach(elem => {

    elem.classList.remove("tabheader-active");
  })
}
function showTabHeader(i = 0) {
  tabContentHeader[i].style.display = "block"
  tabsNavbar[i].classList.add("tabheader-active");
}

navParent.forEach(item => {
  
  item.addEventListener('click', (e) => {
    const target = e.target;
  
    if (target && target.classList.contains('a-dropdown-parent')) {
     
      tabsNavbar.forEach((item, ind) => {
        if (target == item) {
          console.log(1);
          hideTabHeader()
          showTabHeader(ind)

        }
      })
    }
  })
})

/// TAB ZEHN

// MENU
const btn = document.querySelector(".menu-btn");

const slide = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector('.main')
btn.addEventListener("click", (e) => {
  if (slide.classList.contains("active")) {
    slide.classList.remove("active");
  } else {
    slide.classList.add("active");
  }
});


// closeBtn.addEventListener("click", (e) => {
//   if (slide.classList.contains("active")) {
//     slide.classList.remove("active");
//   }
// });


const navLinks = document.querySelectorAll(".sub-item");
const sidebar = document.querySelector(".side-bar");
const sidebarXBtn = document.querySelector("[data-action=\"closeSidebar\"]");
const handleNavLinkClick = () => sidebar.classList.remove("active");
sidebarXBtn.addEventListener("click", handleNavLinkClick);
navLinks.forEach((navLink) => navLink.addEventListener("click", handleNavLinkClick))

// slider Muallimon

const cardSlider = document.querySelector('.card-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
  cardSlider.scrollBy(300, 0);
});

prevBtn.addEventListener('click', () => {
  cardSlider.scrollBy(-300, 0);
});

cardSlider.addEventListener('scroll', () => {
  if (cardSlider.scrollLeft < 300) {
    prevBtn.style.visibility = 'hidden';
  } else {
    prevBtn.style.visibility = 'visible';
  }
  
  if (cardSlider.scrollLeft > (cardSlider.scrollWidth - 600)) {
    nextBtn.style.visibility = 'hidden';
  } else {
    nextBtn.style.visibility = 'visible';
  }
});

addEventListener("DOMContentLoaded", (event) => {
  const password = document.getElementById("password-input");
  const passwordAlert = document.getElementById("password-alert");
  const requirements = document.querySelectorAll(".requirements");
  let lengBoolean, bigLetterBoolean, numBoolean, specialCharBoolean;
  let leng = document.querySelector(".leng");
  let bigLetter = document.querySelector(".big-letter");
  let num = document.querySelector(".num");
  let specialChar = document.querySelector(".special-char");
  const specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
  const numbers = "0123456789";

  requirements.forEach((element) => element.classList.add("wrong"));

  password.addEventListener("focus", () => {
      passwordAlert.classList.remove("d-none");
      if (!password.classList.contains("is-valid")) {
          password.classList.add("is-invalid");
      }
  });

  password.addEventListener("input", () => {
      let value = password.value;
      if (value.length < 8) {
          lengBoolean = false;
      } else if (value.length > 7) {
          lengBoolean = true;
      }

      if (value.toLowerCase() == value) {
          bigLetterBoolean = false;
      } else {
          bigLetterBoolean = true;
      }

      numBoolean = false;
      for (let i = 0; i < value.length; i++) {
          for (let j = 0; j < numbers.length; j++) {
              if (value[i] == numbers[j]) {
                  numBoolean = true;
              }
          }
      }

      specialCharBoolean = false;
      for (let i = 0; i < value.length; i++) {
          for (let j = 0; j < specialChars.length; j++) {
              if (value[i] == specialChars[j]) {
                  specialCharBoolean = true;
              }
          }
      }

      if (lengBoolean == true && bigLetterBoolean == true && numBoolean == true && specialCharBoolean == true) {
          password.classList.remove("is-invalid");
          password.classList.add("is-valid");

          requirements.forEach((element) => {
              element.classList.remove("wrong");
              element.classList.add("good");
          });
          passwordAlert.classList.remove("alert-warning");
          passwordAlert.classList.add("alert-success");
      } else {
          password.classList.remove("is-valid");
          password.classList.add("is-invalid");

          passwordAlert.classList.add("alert-warning");
          passwordAlert.classList.remove("alert-success");

          if (lengBoolean == false) {
              leng.classList.add("wrong");
              leng.classList.remove("good");
          } else {
              leng.classList.add("good");
              leng.classList.remove("wrong");
          }

          if (bigLetterBoolean == false) {
              bigLetter.classList.add("wrong");
              bigLetter.classList.remove("good");
          } else {
              bigLetter.classList.add("good");
              bigLetter.classList.remove("wrong");
          }

          if (numBoolean == false) {
              num.classList.add("wrong");
              num.classList.remove("good");
          } else {
              num.classList.add("good");
              num.classList.remove("wrong");
          }

          if (specialCharBoolean == false) {
              specialChar.classList.add("wrong");
              specialChar.classList.remove("good");
          } else {
              specialChar.classList.add("good");
              specialChar.classList.remove("wrong");
          }
      }
  });

  password.addEventListener("blur", () => {
      passwordAlert.classList.add("d-none");
  });
});


// 

// let a = 10;
// if(a % 3 === 0 || a % 5 === 0 && a % 15 != 0){
//   console.log( "Yes");
// }else {
//   console.log('No');
// }

// let x1 = 4;
// let y1 = 3;
// let x2 = 1;
// let y2 = 6;
// if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
//   console.log(true)
// } else {
//   console.log(false);
// }