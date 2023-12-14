let page1_js = document.querySelector('.pageone')
let page2_js = document.querySelector('.pagetwo')
let button = document.querySelector('button')

page2_js.style.display='none'

button.addEventListener('click', function(){
    page2_js.style.display='flex'
    page1_js.style.display='none'
    })