


// Sidebar====================
$(function() {
    $(".toggle-menu").click(function() {
      $(this).toggleClass("active");
      $('.menu-drawer').toggleClass("open");
      $('.backdrop').toggleClass("remove-backdrop");
    });
    $(".menu-drawer ul li a").click(function() {
      $('.toggle-menu').toggleClass("active");
      $('.menu-drawer').toggleClass("open");
      $('.backdrop').toggleClass("remove-backdrop");

    });
  });

//  Header Sticky ========================

    	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.top-header').addClass("nav-sticky");
		}
		else{
			$('.top-header').removeClass("nav-sticky");
		}
	});


// Work Slider======================
  $(document).ready(function() {
      var $slider = $('.slider');
      var $progressBar = $('.progress-line');
      var $progressBarLabel = $( '.slider__label' );
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
          var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
          
          $progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
          
          $progressBarLabel.text( calc + '% completed' );
      });
  
      $slider.slick({
          fade: true,
          cssEase: 'linear',
          loop: Infinity,
          speed: 400,
          prevArrow: $(".pp2"),
          nextArrow: $(".nn2"),
          focusOnSelect: true,
          asNavFor: '.slider2, .slider3, .slider',
      }); 
      
      $('.slider2').slick({
          fade: true,
          cssEase: 'linear',
          loop: Infinity,
          speed: 400,
          prevArrow: $(".pp2"),
          nextArrow: $(".nn2"),
          focusOnSelect: true,
          asNavFor: '.slider2, .slider3, .slider',
          });

          $('.slider3').slick({
          fade: true,
          cssEase: 'linear',
          loop: Infinity,
          speed: 400,
          prevArrow: $(".pp2"),
          nextArrow: $(".nn2"),
          focusOnSelect: true,
          asNavFor: '.slider2, .slider3, .slider',
          });

      });
          var $status = $('.counter-info');
          var $status2 = $('.total-count');
          var $slickElement = $('.project-carousel');
          $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.html( '<span class="current_slide">' + 0 + i + '</span>');
          $status2.html( '<span class="total_slides"> ' + 0 + slick.slideCount + '</span>');
      });



// Clients Slider=========================
$(document).ready(function() {
$('.clients-slider').slick({
dots: false,
slidesPerRow: 6,
rows: 2,
prevArrow: '.client-prev',
nextArrow: '.client-next',
responsive: [
{
breakpoint: 1367,
settings: {
  slidesPerRow: 1,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  dots: false
}
},
{
breakpoint: 1200,
settings: {
  slidesPerRow: 1,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: false
}
},
{
breakpoint: 1024,
settings: {
  slidesPerRow: 1,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: false
}
},
{
breakpoint: 600,
settings: {
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false
}
},
{
breakpoint: 480,
settings: {
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false
}
}
]
});
});



// Awards slider=====================

$(document).ready(function() {
$('.awards-slider').slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  prevArrow: '.award-prev',
  nextArrow: '.award-next',
  asNavFor: '.awards-slider , .award-slider-img'
});
$('.award-slider-img').slick({
   fade: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.award-prev',
  nextArrow: '.award-next',
  asNavFor: '.award-slider-img, .awards-slider'
});

});



// Testimonial slider===================================
$(document).ready(function() {
  var $slider = $('.tslider');
  var $progressBar = $('.progress-line2');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
  });

  $slider.slick({
      fade: true,
      cssEase: 'linear',
      loop: Infinity,
      speed: 400,
      prevArrow: $(".testi-prev"),
      nextArrow: $(".testi-next"),
      focusOnSelect: true,
      asNavFor: '.tslider, .testi-img-slider, .testimonial-brands',
  }); 
  
  $('.testi-img-slider').slick({
      fade: true,
      cssEase: 'linear',
      loop: Infinity,
      speed: 400,
      prevArrow: $(".testi-prev"),
      nextArrow: $(".testi-next"),
      focusOnSelect: true,
      asNavFor: '.tslider, .testi-img-slider, .testimonial-brands',
  });

  $('.testimonial-brands').slick({
      // fade: true,
      cssEase: 'linear',
      loop: Infinity,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 400,
      prevArrow: $(".testi-prev"),
      nextArrow: $(".testi-next"),
      focusOnSelect: true,
      asNavFor: '.tslider, .testi-img-slider, .testimonial-brands',


      responsive: [
          {
          breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          },
          {
          breakpoint: 600,
          settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          },
          {
          breakpoint: 480,
          settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          }
      ]


  });

  });
      var $status3 = $('.counter-info2');
      var $status4 = $('.total-count2');
      var $slickElementt = $('.tslider');
      $slickElementt.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status3.html( '<span class="current_slide">' + 0 + i + '</span>');
      $status4.html( '<span class="total_slides"> ' + 0 + slick.slideCount + '</span>');
  });


  // FIle upload 

var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i])
}

function customInput (el) {
  const fileInput = el.querySelector('[type="file"]')
  const label = el.querySelector('[data-js-label]')
  
  fileInput.onchange =
  fileInput.onmouseout = function () {
    if (!fileInput.value) return
    
    var value = fileInput.value.replace(/^.*[\\\/]/, '')
    el.className += ' -chosen'
    label.innerText = value
  }
}



  
