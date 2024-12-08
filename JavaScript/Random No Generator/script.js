// RANDOM NUMBER GENERATOR

const btnEl = document.querySelector('#roll')
btnEl.addEventListener('click', function(){
    let num = Math.floor(Math.random()*6) + 1;

    const label = document.querySelector('#no')
    label.textContent = num
})

