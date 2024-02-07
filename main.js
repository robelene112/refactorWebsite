const hamburgerMenu = document.querySelector('.hamburger-menu')
const header = document.querySelector('header')
const headerContainer = document.querySelector('.header-container')
const navMenuContainer = document.querySelector('.nav-menu-container')
const navContainer = document.querySelector('.nav-container')
const mobileNav = document.querySelector('.mobile-nav')
const desktopNav = document.querySelector('nav')

document.querySelector('.hamburger-menu').addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active')
	header.classList.toggle('active')
	navMenuContainer.classList.toggle('active')
	navContainer.classList.toggle('active')
	mobileNav.classList.toggle('active')
})

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		headerContainer.classList.add('scrolled')
	} else {
		headerContainer.classList.remove('scrolled')
	}
})
