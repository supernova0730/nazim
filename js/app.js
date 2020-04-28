const burgerBtn = document.querySelector('.burger');
const exitBtn = document.querySelector('header .links .exit');
const linksContainer = document.querySelector('header .links');
const links = document.querySelectorAll('header .links a');

burgerBtn.addEventListener('click', function() {
	linksContainer.classList.toggle("open");
});

exitBtn.addEventListener('click', function() {
	linksContainer.classList.toggle("open");
});

links.forEach(function(link) {
	link.addEventListener('click', function() {
		linksContainer.classList.toggle("open");
	});
});

document.body.addEventListener('click', function() {
	let iframe = document.querySelector('iframe');
	if (iframe) {
		let iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
});