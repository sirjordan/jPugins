
/**
 * @author maritn
 */

(function ($) {
  $.fn.jTree = function  () {
	  var $this = $(this); 
	  
	  var $parents = $this.children();
	  $parents.click(function  () {
	    $(this).children().toggle(100);
	  });
	  
	  var $childs = $parents.children().hide();
  };
  
  return this;
}(jQuery));
