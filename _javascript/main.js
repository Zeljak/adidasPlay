document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

var aleksandra = document.querySelector('.aleksandra_parallax');
new simpleParallax(aleksandra, {
  delay: .6,
	scale: 1.5
});

var zara = document.querySelector('.zara_parallax');
new simpleParallax(zara, {
  delay: .6,
	scale: 1.5
});

var andrea = document.querySelector('.andrea_parallax');
new simpleParallax(andrea, {
  delay: .6,
	scale: 1.5
});