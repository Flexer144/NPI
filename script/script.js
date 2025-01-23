let button = document.querySelector('.header-burger')
let bodyWrapper = document.querySelector('.body-wrapper')

button.addEventListener('click', ()=>{
  if(!bodyWrapper.classList.contains('open')){
    bodyWrapper.classList.add('open')
  } else if(bodyWrapper.classList.contains('open')){
    bodyWrapper.classList.remove('open')
  }
})