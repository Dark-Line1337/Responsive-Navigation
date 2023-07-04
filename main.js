const toggle = document.querySelector(".toggle")
const OpenNavigation = document.getElementById("mainNav")
const CloseNavigation = document.getElementById("exitnav")


function openbar() {
	OpenNavigation.style.display = 'block';
	toggle.style.display = 'none';
	CloseNavigation.style.opacity = '1';
}

function closebar() {
	OpenNavigation.style.display = 'none';
	toggle.style.display = 'block';
	CloseNavigation.style.opacity = '0';
}