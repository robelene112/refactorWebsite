const hamburgerMenu = document.querySelector('.hamburger-menu')
const header = document.querySelector('header')
const headerContainer = document.querySelector('.header-container')
const mobileNavContainer = document.querySelector('.mobile-nav-container')
const mobileNav = document.querySelector('.mobile-nav')
const desktopNav = document.querySelector('nav')

document.querySelector('.hamburger-menu').addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active')
	header.classList.toggle('active')
	mobileNavContainer.classList.toggle('active')
	mobileNav.classList.toggle('active')

	mobileNav.appendChild(desktopNav)

	mobileNav.firstChild.classList.toggle('mobile-nav-items')
})

window.onresize = () => {
	if (window.innerWidth > 1000) {
		headerContainer.appendChild(mobileNav.firstChild)
		mobileNav.removeChild(mobileNav.firstChild)
	}
}
