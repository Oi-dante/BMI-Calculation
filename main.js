import { Modal } from './modal.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeigth.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const massage = `Seu IMC é de ${result}`
  
  Modal.message.innerText = massage 
  Modal.open()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}