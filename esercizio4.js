/*Esercizio 4 - DOM e eventi*/

window.addEventListener('load', () => {

     const btn = document.getElementById('btn');
     const input = document.getElementById('input');
     const p = document.getElementById('errorMessage');
     const ul = document.getElementById('tasks');

     btn.addEventListener('click', () => {
        
       if (input.value === ''){
            p.innerText = `Per favore, inserisci del testo.`

       } else {
        p.innerText = '';
        const li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value = '';
       }

     })

})