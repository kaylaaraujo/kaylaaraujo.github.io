var navTop = document.querySelector('.nav-top');
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);

	
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
	

dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
		menu = el.querySelector('.dropdown-menu');
dropdownArray.forEach(function(el){
	var menu = el.querySelector('.dropdown-menu');
		menu.classList.remove('hide');
		menu.classList.add('show');
});

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			event.preventDefault();
		}
	};

})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};