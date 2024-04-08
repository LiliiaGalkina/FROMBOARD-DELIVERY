'use strict'

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');
let info = document.querySelector('#info')

burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
   menu.classList.toggle('active');
   info.classList.toggle('active')
}

//--------------------------------------------------------------------------

$(document).ready(function () {
   $('.slider').slick({
      infinite: false,  //отключить бесконечную прокрутку
      slidesToShow: 2, // показывать на экране 2 слайда
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   })
})


   //-------------------------------------------------------
$(document).ready(
   function () {
      $('.slick-prev').hide();
   }
)

if (window.innerWidth > 1024) {
   $('.slider').on('afterChange', function(){
    let currentSlide = $('.slider').slick('slickCurrentSlide');
   if(currentSlide==0)
   {
      $('.slick-prev').hide();
      $('.slick-next').show();
   }
   else if(currentSlide == 4)
   {
   $('.slick-next').hide();
   $('.slick-prev').show();
   }
   
   if(currentSlide>0 && currentSlide < 4)
   {
      $('.slick-prev').show();
      $('.slick-next').show();
   }
   
   });
} else {
      $('.slider').on('afterChange', function(){
     console.log($('.slider').slick('slickCurrentSlide'));
     var currentSlide = $('.slider').slick('slickCurrentSlide');
   if(currentSlide==0)
   {
      $('.slick-prev').hide();
      $('.slick-next').show();
   }
   else if(currentSlide == 5)
   {
   $('.slick-next').hide();
   $('.slick-prev').show();
   }
   
   if(currentSlide>0 && currentSlide < 5)
   {
      $('.slick-prev').show();
      $('.slick-next').show();
   }
   
   });
}


