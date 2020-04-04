$(function(){
   //project slider 
    
 $('.project-slider').slick({
  slidesToShow:1,
  slidesToScroll: 1,
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  
});
 // counter up
    
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    //venibox
 $('.venobox').venobox(); 
    
});