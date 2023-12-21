let page1_js = document.querySelector('.pageone')
let page2_js = document.querySelector('.pagetwo')
let button = document.querySelector('.button1')
let page3_js = document.querySelector('.pagethree')
let button1 = document.querySelector('.button2') 
let button2 = document.querySelector('.button') 
page2_js.style.display='none'

button.addEventListener('click', function(){
    page2_js.style.display='flex'
    page1_js.style.display='none'
    page3_js.style.display='none'
    })
    
page3_js.style.display='none'

button1.addEventListener('click', function(){
    page3_js.style.display='flex'
    page2_js.style.display='none'
    page1_js.style.display='none'
    })

    page2_js.style.display='none'

button2.addEventListener('click', function(){
    page1_js.style.display='flex'
    page2_js.style.display='none'
    page3_js.style.display='none'
    })
    
    