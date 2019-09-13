try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}


$.ajaxSetup({
	headers: {
	  	'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
		'X-Requested-With': 'XMLHttpRequest'
	}
});

$(document).on("mousedown", ".h-ripple", function(e){
	var $self = $(this);

	if($self.closest("[data-ripple], .h-ripple")){
		e.stopPropagation();
	}
	if ($self.hasClass('disabled')) {
		return;
	}

	var rippleColor;

	if ($self.hasClass('light')) {
		rippleColor = '#3F51B5';
	}
	var initPos = $self.css("position"),
	offs = $self.offset(),

	w = Math.min(this.offsetWidth, 160),
	h = Math.min(this.offsetHeight, 160),
	x = e.pageX - offs.left,
	y = e.pageY - offs.top,

	$ripple = $('<div/>', {class : "ripple",appendTo : $self });

	if(!initPos||initPos==="static"){
		$self.css({position:"relative"});
	}

	$('<div/>', {
		class: "rippleWave",
		css: {
			background: rippleColor,
			width: h,
			height: h,
			left: x - (h/2),
			top: y - (h/2),
		},
		appendTo: $ripple,
		one: {
			animationend: function(){
				$ripple.remove();
			}
		}
	});
});