$(document).ready(function(){
  var $slideNav= $('.portfolio-menu a');
  var $slideItems= $('.portfolio-item');

  $slideItems.addClass('visible');

  $slideNav.on('click', function(event) {
    var category = event.target.id;
    $slideItems.removeClass('visible');
    $slideNav.removeClass('active');
    $(event.target).addClass('active');

    if (category == 'all'){
      $slideItems.addClass('visible');
    }
    else{
      $.each( $slideItems, function( i, val ) {
        $val = $(val);
        if ($val.attr("data-category") == category){
          $val.addClass('visible');
        }
      });
    }
  });
});