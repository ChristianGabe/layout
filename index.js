let menuIcon= document.querySelector(".menu-icon");
menuIcon.addEventListener("click", commerce);

function commerce(){
    let shopingCar= document.querySelector('.shoping-cart');
    shopingCar.classList.toggle('on');
}



let menuNavbar= document.querySelector(".menu-navbar");
menuNavbar.addEventListener("click",sneaky);

let close= document.querySelector(".close");
close.addEventListener('click', sneaky);

function sneaky(){
let navLinks= document.querySelector('.nav-links');
navLinks.classList.toggle('off');
}

// change no slide


//let thumbs = document.querySelectorAll('.main-left-footer-img')
//for(let i = 0; i<thumbs.length; i++){
  //thumbs[i].addEventListener("click", slideImage)
//}

//function slideImage(){
  //document.querySelector('.img-active').src =this.children[0].src.substr(0, 44) + '.jpg'
//}


//slide


let thumbs = document.querySelectorAll('.main-left-footer-img');
var percentage = 0;

for(let i = 0; i<thumbs.length; i++){
  thumbs[i].addEventListener("click", slideImage)
}
function slideImage(){
  let id = this.id;
  document.querySelector('.slide-box').style.transform = `translateX(-${id * 100}%)`;
}
  //responsive slide

  let btn_prev = document.querySelector('.btn-prev');
  btn_prev.addEventListener('click', slidePrev);

  function slidePrev() {
    if(percentage > 0) {
      percentage-=100;
    }
    document.querySelector('.slide-box').style.transform = `translateX(-${percentage}%)`;
  }

  let btn_next = document.querySelector('.btn-next');
  btn_next.addEventListener('click', slideNext);

  function slideNext() {
    percentage+=100;
    if(percentage == 400){
      percentage =0;
    }
    document.querySelector('.slide-box').style.transform = `translateX(-${percentage}%)`;
  }


