
$(document).ready(function(){
  var $slides = $('.project-slide');  //object of all slides
  var $previousButton = $('.arrow-left');
  var $nextButton = $('.arrow-right');
  var $firstSlideName = $slides.first().data('slide-name'); //finds first slide's name
  var $firstSlide = $slides.filter(function() { //selects all slides with same name as first slide (i.e. one in each section)
    return $(this).data("slide-name") == $firstSlideName; 
  });
  var $lastSlideName = $slides.last().data('slide-name'); //finds first slide's name
  var $lastSlide = $slides.filter(function() { //selects all slides with same name as first slide (i.e. one in each section)
    return $(this).data("slide-name") == $lastSlideName; 
  });
  
  $previousButton.on('click', previous);
  $nextButton.on('click', next);
  
  function next(){
    var $activeSlides = $slides.filter('.active');
    $.each($activeSlides, function(){
      console.log(this);
      $(this).removeClass('active');
      if($(this).next().hasClass('project-slide')){
        $(this).next().addClass('active');
      }
      else{
        $firstSlide.addClass('active');
      }
    });
  };
  
  function previous(){
    var $activeSlides = $slides.filter('.active');
    $.each($activeSlides, function(){
      console.log(this);
      $(this).removeClass('active');
      if($(this).prev().hasClass('project-slide')){
        $(this).prev().addClass('active');
      }
      else{
        $lastSlide.addClass('active');
      }
    });
  };
});