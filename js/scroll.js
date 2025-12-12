function Scroll(){    /* Declare a function */
	var top = document.getElementById('main-header'); /* Variable linked to header */
	var ypos = window.pageYOffset; /* Waypass. Variable when offset */
	if (ypos > 587) {
		top.style.height = "52px";
	}
	else{
		top.style.height = "90px";
		}

	window.addEventListener("scroll",Scroll); /* EventListner. Scroll White is function name */

function Scroll(){    /* Declare a function */
	var top = document.getElementById('logo_del_2'); /* Variable linked to header */
	var ypos = window.pageYOffset; /* Waypass. Variable when offset */
	if (ypos > 587) {
		top.style.display = "none";
	}
	else{
		top.style.display = "block";
		}

	window.addEventListener("scroll",Scroll); /* EventListner. Scroll White is function name */

	function Scroll(){    /* Declare a function */
	var top = document.getElementById('navigation'); /* Variable linked to header */
	var ypos = window.pageYOffset; /* Waypass. Variable when offset */
	if (ypos > 587) {
		top.style.margin = "0 10px 0 0";
		top.style.padding = "9px 0";
		top.style.float = "left";

	}
	else{
		top.style.margin = "20px 10px 0 0";
		top.style.padding = "10px 0";
		top.style.float = "left";
		}

	window.addEventListener("scroll",Scroll); /* EventListner. Scroll White is function name */

	function Scroll(){    /* Declare a function */
	var top = document.getElementById('logo_del_1'); /* Variable linked to header */
	var ypos = window.pageYOffset; /* Waypass. Variable when offset */
	if (ypos > 587) {
		top.style.margin = "7px 0";

	}
	else{
		top.style.margin = "15px 0";
		}

	window.addEventListener("scroll",Scroll); /* EventListner. Scroll White is function name */
}

}

}

}

window.addEventListener("scroll",Scroll); /* EventListner. Scroll White is function name */

