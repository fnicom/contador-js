const btnIncrementar = document.getElementById('btn_incrementar');
const btnDecremento = document.getElementById('btn_decremento');
const p$ = document.getElementById('contador');

let contador = 0;

p$.innerHTML = contador;

btnIncrementar.addEventListener("click", function (){
    contador++;

    p$.innerHTML = contador; 
});

btnDecremento.addEventListener("click", function (){
    contador--;

    p$.innerHTML = contador;
})



// console.log(btnIincrementar);
// console.log(p$);

