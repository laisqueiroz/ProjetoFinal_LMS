let botao = document.querySelector('#conjure-button')

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

botao.addEventListener('click', async function () {
	botao.disabled = true
	disableScroll()
	let article = document.querySelector('article')
	let circle = document.querySelector('#circle')
	let circle_container = document.querySelector('#circle-container')
	let gif = document.getElementById('gif')
	let text_input = document.getElementById('magic-caster')

	article.style.visibility = 'hidden'
	circle_container.style.visibility = 'visible !important'
	gif.style.visibility = 'visible !important'

	if (!text_input.value) {
		window.alert('Suas palavras não tiveram nenhum efeito. Tente usar seu poder de forma mais sábia.')
		article.style.visibility = 'visible'
		botao.disabled = false
		enableScroll()
		return
	}

	switch (text_input.value.toLowerCase()) {
		case 'exori flam':
			circle.classList.toggle('flam')
			gif.src = 'images/Flame_Strike_animation.gif'
            gif.style.width = '8.5%'
			gif.style.visibility = 'visible'
			gif.style.borderRadius = '85%'
			sleep(1200).then(() => {
				circle.classList.toggle('flam')
				botao.disabled = false
				gif.style.visibility = 'hidden'
				gif.style.borderRadius = '0%'
				enableScroll()
				article.style.visibility = 'visible'
			})
			return
		case 'exevo flam hur':
			circle.classList.toggle('flam-hur')
			gif.src = 'images/Fire_Wave_animation.gif'
			gif.style.visibility = 'visible'
			gif.style.width = '15%'
			gif.style.borderRadius = '85%'
			sleep(1500).then(() => {
				circle.classList.toggle('flam-hur')
				botao.disabled = false
				gif.style.visibility = 'hidden'
				gif.style.borderRadius = '0%'
				enableScroll()
				article.style.visibility = 'visible'
			})
			return
		case 'exevo gran flam hur':
			circle.classList.toggle('gran-flam-hur')
			gif.src = 'images/Great_Fire_Wave_animation.gif'
			gif.style.visibility = 'visible'
			gif.style.width = '15%'
			gif.style.borderRadius = '85%'
			sleep(1500).then(() => {
				circle.classList.toggle('gran-flam-hur')
				botao.disabled = false
				gif.style.visibility = 'hidden'
				gif.style.borderRadius = '0%'
				enableScroll()
				article.style.visibility = 'visible'
			})
			return
		case 'exevo gran mas flam':
			let input_div = document.getElementById('input-div')
			circle.classList.toggle('gran-mas-flam')
			gif.src = "images/Hell's_core.gif"
			gif.style.visibility = 'visible'
			input_div.style.marginTop = '4rem'
			gif.style.width = '25%'
			gif.style.borderRadius = '25%'
			sleep(1500).then(() => {
				circle.classList.toggle('gran-mas-flam')
				botao.disabled = false
				gif.style.visibility = 'hidden'
				gif.style.borderRadius = '0%'
				input_div.style.removeProperty('margin-top')
				enableScroll()
				article.style.visibility = 'visible'
			})
			return
		default:
			window.alert('Suas palavras não tiveram nenhum efeito. Tente usar seu poder de forma mais sábia.')
			article.style.visibility = 'visible'
			botao.disabled = false
			enableScroll()
			return
	}
})

// funçoes para desabilitar o scroll
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault(e) {
	e.preventDefault()
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e)
		return false
	}
}

var supportsPassive = false
try {
	window.addEventListener(
		'test',
		null,
		Object.defineProperty({}, 'passive', {
			get: function () {
				supportsPassive = true
			},
		})
	)
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

function disableScroll() {
	window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
	window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
	window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
	window.addEventListener('keydown', preventDefaultForScrollKeys, false)
}

function enableScroll() {
	window.removeEventListener('DOMMouseScroll', preventDefault, false)
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
	window.removeEventListener('touchmove', preventDefault, wheelOpt)
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}
