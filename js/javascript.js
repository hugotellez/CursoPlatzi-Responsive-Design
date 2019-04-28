const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-button')

const ipad = window.matchMedia('screen and (max-width: 767px)')
ipad.addListener(validation)





function validation(event){
    if(event.matches)
        burgerButton.addEventListener('click', hideShow)
    else
        burgerButton.removeEventListener('click', hideShow)
   
}

    validation(ipad)


function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active')

    }else{
        menu.classList.add('is-active')
    }
}
