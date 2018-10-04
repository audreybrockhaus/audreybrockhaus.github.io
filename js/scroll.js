$(document).ready(function(){

  // Generate anchors and side nav anchor links
  $('.box').each(function(){
    var text = $(this).find('h1').text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'');
    $(this).addClass('anchor').attr('id', text);
    $('.sidemenu').append('<a href="#' + text + '"><i class="square"></i></a>');
  });

  // Anchor scroll
  $('.sidemenu a').on('click', function(event) {

    var position = $($(this).attr("href")).offset().top;

    $("html, body").animate({scrollTop: position}, 400);
    event.preventDefault();
  });

  // Set anchor sections
  var anchors = $('.box');
  var anchorLinks = $('.sidemenu a');

  // var sectionHeight = function() {
  //   var total    = $(window).height(),
  //       $section = $('.site-content').css('height','auto');

  //   if ($section.outerHeight(true) < total) {
  //     var margin = $section.outerHeight(true) - $section.height();
  //     $section.height(total - margin - 20);
  //   } else {
  //     $section.css('height','auto');
  //   }
  // }

  // var resizeHandler = function(){
  //   sectionHeight();
  // }

  // Check section on scroll
  var scrollHandler = function() {
    for (var i = 0; i < anchors.length; i++){
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        $(anchorLinks).removeClass('active');
        $(anchorLinks).last().addClass('active');
      }
      else if ($(document).scrollTop() >= ($(anchors[i]).offset().top -20) && $(document).scrollTop() <= ($(anchors[i]).offset().top + 20)) {
        $(anchorLinks).removeClass('active');
        $(anchorLinks[i]).addClass('active');
        break;
      }
    }
  }

  $(window).resize(scrollHandler);

  scrollHandler();
  $(document).scroll(function() {
    scrollHandler();
  });

  // smooth anchors
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});