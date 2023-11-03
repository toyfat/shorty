// 'use strict';

const input = document.querySelector('#link-input')
const form = document.querySelector('#link-form')
const error = document.querySelector('#err-msg')
const btn = document.querySelector('#btn')
const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector("#menu")

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}


form.addEventListener("submit", function(e){
    e.preventDefault()

    if(input.value === ''){
        error.textContent = `Please enter something`
        input.classList.add('border-red')
    } else if (!validURL(input.value)){
        error.textContent = `Please enter valid URL`
        input.classList.add('border-red')
        console.log(input.value)
    } else {
        error.textContent = ``
        input.classList.remove('border-red')
    }
})

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('open')
  menu.classList.toggle('hidden')
  menu.classList.toggle('flex')
})





