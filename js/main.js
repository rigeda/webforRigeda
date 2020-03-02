// slide up effect
(function($) {

  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  var win = $(window);
  
  var allMods = $(".mod");
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });
  
  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

//   Navbar

$('nav .innernav .close').on('click',()=>{
    $('.innernav').css('transform','translateX(100%)');
});
$('nav .menu').on('click',()=>{
    $('.innernav').css('transform','translateX(0%)');
});
if(window.innerWidth<640){
    $('.innernav a').on('click',()=>{
        $('.innernav').css('transform','translateX(100%)');
    });
}