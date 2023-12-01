let cards = document.querySelectorAll('.card-principal')
cards.forEach((card) => card.addEventListener('click', cardClicked))

function cardClicked(e) {
	var card = e.currentTarget
	var containerPai = card.parentNode
	var cardDeInformacao = containerPai.children.item(1)
	console.log(cardDeInformacao)
	cardDeInformacao.classList.toggle('card-info-ativado')
}
