var navTop = document.querySelector('.nav-top');
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
var $header = $('.header-section');

	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		  this.setAttribute('data-state', 'inactive');
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
	    this.setAttribute('data-state', 'active');
		}
	});
	
	$headerSection.waypoint(function () {
	$header.addClass('js-header-fade');
}, { offset: '50%' });
	
