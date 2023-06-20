const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo')
const nave = document.querySelector('#pid')
const input = document.querySelector('input')
const ul = document.querySelector('ul')


console.log(h1);
console.log(p);
console.log(parrafo);
console.log(nave);
console.log(input);
console.log(ul);

h1.innerHTML = "Me llamo Erick <br>";
p.innerText = "y ya me aburri"
console.log(p.getAttribute('class'))
h1.setAttribute('class','rojo');
h1.classList.add('verde');
h1.classList.add('amarrillo');
h1.classList.remove('amarrillo');

input.value  = "pepino";
console.log(input.value)
const img = document.createElement('img');
img.setAttribute('src','./accets/Sombrero_de_Paja.jpg')
ul.appendChild(img)
// ul.innerHTML = img;