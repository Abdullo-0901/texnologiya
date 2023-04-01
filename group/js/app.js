

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
 
tabsParent.addEventListener('click',(event)=>{
  const target = event.target;
  if(target && target.classList.contains("item")){
    tabs.forEach((item,ind)=>{
      if(target == item){
      
        hideTabContent()
        showTabContent(ind)
        
       
      }
    })
  }
})

// NAVBAR
const navParent = document.querySelectorAll('.dopdown-parent')
const tabsNavbar = document.querySelectorAll('.a-dropdown-parent')
const tabContentHeader = document.querySelectorAll('.teabheadercon')

function hideTabHeader(){
  tabContentHeader.forEach(elem=>{
    elem.style.display = "none";
  })
  tabsNavbar.forEach(elem=>{
    elem.classList.remove("tabheader-active");
  })
}
function showTabHeader(i = 0){
tabContentHeader[i].style.display = "block"
tabsNavbar[i].classList.add("tabheader-active");
}

navParent.forEach(item=>{
  item.addEventListener('click',(e)=>{
  const target = e.target;
  if(target && target.classList.contains('a-dropdown-parent')){
    console.log(1);
    tabsNavbar.forEach((item,ind)=>{
      if(target == item){
        hideTabHeader()
        showTabHeader(ind)
        
      }
    })
  }
})
})

// MENU
const btn = document.querySelector(".menu-btn");

const slide  = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector('.main')
btn.addEventListener("click", (e) => {
  if (slide.classList.contains("active")) {
    slide.classList.remove("active");
    
  } else {
    slide.classList.add("active");

  }
});


closeBtn.addEventListener("click", (e) => {
  if (slide.classList.contains("active")) {
    slide.classList.remove("active");
  }
});
