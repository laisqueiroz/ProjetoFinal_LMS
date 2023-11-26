const tituloElement = document.querySelector('.container_titulo');

const buttonElement = document.querySelector('#botaoTeste');

buttonElement.addEventListener('click', (event)=>{
    event.preventDefault();
    tituloElement.classList.toggle('active');
})