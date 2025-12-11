/* console.log('ins bu sefer olacak') */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn')



menuBtn.addEventListener('click', ()=>{
    navbar.classList.remove('hidden')
})





closeBtn.addEventListener('click', ()=>{
    navbar.classList.add('hidden')
})

