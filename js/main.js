const foooterSpan = document.querySelector('.footer__location--date')
const body = document.querySelector('body')
const backBtn = document.querySelector('.backBtn')
const nav = document.querySelector('.navbar')
// YEAR IN FOOTER
let year = new Date().getFullYear()
foooterSpan.textContent = year

// SHOW BACK BTN
const showBackBtn = () => {
	if (window.scrollY >= 900) {
		backBtn.classList.add('showBackBtn')
	} else {
		backBtn.classList.remove('showBackBtn')
	}
}

//INITIALIZE AOS
AOS.init({
	duration: 800,
	once: true,
})

//ADD SHADOW TO NAV
const addBg = () => {
	if (window.scrollY >= 165) {
		nav.classList.add('darkBg')
	} else {
		nav.classList.remove('darkBg')
	}
}

const widthBg = () => {
	if (window.innerWidth <= 991) {
		nav.classList.add('darkBg')
	} else {
		nav.classList.remove('darkBg')
	}
}

document.addEventListener('scroll', showBackBtn)
document.addEventListener('scroll', () => {
	if (window.innerWidth >= 992) {
		addBg()
	}
})
document.addEventListener('DOMContentLoaded', widthBg)
