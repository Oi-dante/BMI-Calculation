import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeigth.value
  const height = inputHeight.value

  const showAlertErro = notANumber(weight) || notANumber(height)

  if (showAlertErro){
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  const massage = `Seu IMC é de ${result}`
  
  Modal.message.innerText = massage 
  Modal.open()
}

function notANumber(value){
  return isNaN(value) || value == ""
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}