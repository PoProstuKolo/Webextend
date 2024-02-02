const foooterSpan = document.querySelector('.footer__location--date')
const body = document.querySelector('body')

let year = new Date().getFullYear()
foooterSpan.textContent = year
