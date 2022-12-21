const relogio = document.querySelector(".relogio");

function timer (){
const getTimeFromSeconds = (segundos) =>{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'GMT'});
}

let segundos = 0;
let timer;
const startTimer = () =>{
    timer = setInterval(function () {
        segundos ++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

document.addEventListener("click", (e) => {
    const el = e.target;
    
    if(el.classList.contains("iniciar")){
        relogio.classList.remove("pausado");
        clearInterval(timer);
        startTimer();
    }
    
    if(el.classList.contains("pausar")){
        if(segundos !== 0){
            relogio.classList.add("pausado");
        }
    clearInterval(timer);
    }

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.classList.remove("pausado");
        relogio.innerHTML = "00:00:00";
        segundos = 0;
    }
})
}
timer();

// Anotar no seu caderno o método "contains", que significa contem. Ex:if(el.classList.contains("pausar")) --> se o elemento conter a classe pausar