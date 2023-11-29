window.onload = async function () {
	let section = document.querySelector('section')
	let spinnerContainer = document.querySelector('#spinnerContainer')

	let vetorDePokemons = []
	let vetorDeElementos = []

	await fetchPokemons(vetorDePokemons)
	generateElementos(vetorDePokemons, vetorDeElementos)

	vetorDeElementos.forEach((card) => {
		section.appendChild(card)
	})
	spinnerContainer.removeChild(spinnerContainer.lastElementChild)
}

async function fetchPokemons(vetorDePokemons) {
	while (vetorDePokemons.length < 3) {
		console.log(vetorDePokemons.length)
		let numeroAleatorio = Math.floor(Math.random() * 1290 + 1)
		if (numeroAleatorio > 1017) numeroAleatorio = numeroAleatorio - 1017 + 10000

		let resultado = vetorDePokemons.filter((pokemon) => {
			if (pokemon.id == numeroAleatorio) return true
			return false
		})
		if (!resultado.includes(true)) {
			let novoPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
			vetorDePokemons.push(await novoPokemon.json())
		}
	}
}

function generateElementos(vetorDePokemons, vetorDeElementos) {
	for (let i = 0; i < 3; i++) {
		let card = document.createElement('div')
		card.classList.add('card')
		card.style.width = '25%'

		let cardImg = document.createElement('img')
		cardImg.classList.add('card-img-top')
		cardImg.src = vetorDePokemons[i].sprites.other['official-artwork'].front_default
		cardImg.style.width = 'auto'

		let cardBody = document.createElement('div')
		cardBody.classList.add('card-body')

		let cardTitle = document.createElement('h4')
		cardTitle.classList.add('card-title')
		let nomeDoPokemon = ''
		let vetorNomePokemon = vetorDePokemons[i].name.split('-')

		vetorNomePokemon.forEach((palavra) => {
			const capitalized = palavra.charAt(0).toUpperCase() + palavra.slice(1)
			nomeDoPokemon += capitalized + ' '
		})
		cardTitle.innerHTML = nomeDoPokemon

		let cardText = document.createElement('p')
		cardText.innerHTML =
			'<br><b>Id do pokemon:</b> ' + vetorDePokemons[i].id + '<br><b>Altura:</b> ' + (vetorDePokemons[i].height / 10).toFixed(1) + ' m<br><b>Peso:</b> ' + (vetorDePokemons[i].weight / 10).toFixed(1) + ' kg'
		let tipos = '<b>Tipo:</b> '
		vetorDePokemons[i].types.forEach((tipo) => {
			tipos += tipo.type.name + ' '
		})
		cardText.innerHTML = tipos + cardText.innerHTML 
		cardBody.appendChild(cardTitle)
		cardBody.appendChild(cardText)
		card.appendChild(cardImg)
		card.appendChild(cardBody)

		vetorDeElementos.push(card)
	}
}

function generateSpinner() {
	let spinnerContainer = document.querySelector('#spinnerContainer')
	spinnerContainer.innerHTML = `<div class="text-center" id="spinner">
    <div class="spinner-border" role="status">
    </div>
    </div>`
}

function removeSpinner() {
	let spinnerContainer = document.querySelector('#spinnerContainer')
	spinnerContainer.removeChild(spinnerContainer.lastElementChild)
}

let botaoGerarPokemons = document.querySelector('#botaoGerarPokemons')

botaoGerarPokemons.addEventListener('click', async (event) => {
	generateSpinner()
	let elemento = document.querySelector('section')
	let vetorDePokemons = []
	let vetorDeElementos = []

	while (elemento.firstChild) elemento.removeChild(elemento.firstChild)

	await fetchPokemons(vetorDePokemons)
	generateElementos(vetorDePokemons, vetorDeElementos)
	vetorDeElementos.forEach((card) => {
		elemento.appendChild(card)
	})
	removeSpinner()
})
