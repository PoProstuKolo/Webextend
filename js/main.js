const foooterSpan = document.querySelector('.footer__location--date')
const body = document.querySelector('body')
const backBtn = document.querySelector('.backBtn')

// YEAR IN FOOTER
let year = new Date().getFullYear()
foooterSpan.textContent = year

// SHOW BACK BTN
const showBackBtn = () => {
	if (window.scrollY >= 900) {
		backBtn.classList.add('show')
	} else {
		backBtn.classList.remove('show')
	}
}

//INITIALIZE AOS
AOS.init({
	duration: 800,
	once: true,
})

document.addEventListener('scroll', showBackBtn)
