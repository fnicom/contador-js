const btnIncrementar = document.getElementById('btn_incrementar');
const btnDecremento = document.getElementById('btn_decremento');
const numeroAtual$ = document.getElementById('contador');

let contador = 0;

numeroAtual$.innerHTML = contador;

btnIncrementar.addEventListener("click", function (){
    contador++;

    numeroAtual$.innerHTML = contador; 
});

btnDecremento.addEventListener("click", function (){
    contador--;

    numeroAtual$.innerHTML = contador;
})


