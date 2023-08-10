// se inicializa con la variable contador 
let contador = 0;


//seleciona el valor del boton
const valor  = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(boton){
        const styles = boton.currentTarget.classList;
        if (styles.contains("reducir")){
            contador--;
        }
        else if (styles.contains("aumentar")){
            contador++;
        }
        else{
            contador = 0;
        }

        if(contador > 0){
            valor.style.color = 'green';
        }

        if(contador < 0 ){
            valor.style.color = 'red';
        }

        if (contador == 0){
            valor.style.color = '#222'
        }
        valor.textContent = contador;
    })
});