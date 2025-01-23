let menu = document.querySelector('.body-wrapper')

menu.addEventListener('click', ()=>{
  if(!menu.classList.contains('open')){
    menu.classList.add('open')
  } else if(menu.classList.contains('open')){
    menu.classList.remove('open')
  }
})