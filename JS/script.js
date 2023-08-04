import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeigth.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber ){
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
 
}

function displayResultMessage(result){
  const massage = `Seu IMC é de ${result}`
  
  Modal.message.innerText = massage 
  Modal.open()
}

