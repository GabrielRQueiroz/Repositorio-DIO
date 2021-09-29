$(function() {
   $('a[href*=#]').on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
   });
 });

//  Scrolling fade

function scrollFade() {
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (height / winScroll) - 1.75;
   document.getElementById("scroll").style.opacity = scrolled;
}

document.addEventListener("scroll", scrollFade)

// Show temporary page on click

function popUp() {
   
}