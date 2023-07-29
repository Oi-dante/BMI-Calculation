const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMassage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')


form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeigth.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const massage = `Seu IMC é de ${result}`
  
  modalMassage.innerText = massage 
  modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}