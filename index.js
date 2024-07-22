

// let parra = document.getElementsByClassName('p')[0];

// console.log(parra)

// console.log(document.getElementsByTagName('h1'))

// let nirvana = document.querySelectorAll('p')

// console.log(nirvana)

// console.log(document.getElementsByClassName('div').parentNode);


let btn = document.createElement('button');

document.body.appendChild(btn)

// btn.style.color = 'orange'
// btn.innerHTML = 'Hello World'
// btn.style.fontSize = 'large'

// document.getElementById('divcito').appendChild(btn)

function evento(){
    console.log('otra cosa2')
}
function evento2(){
    console.log('pesaooooo')
}

let btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', evento2)