const relogio = document.querySelector(".relogio")


const timerToSeconds = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-br', {timeZone: "GMT"})
}

let seconds = 0;
let timer;
const iniciaRelogio = () =>{
    timer = setInterval(()=>{
        seconds++
        relogio.innerHTML = timerToSeconds(seconds);
    }, 1000)
}

document.addEventListener("click", (e)=>{
    el=e.target;

    if(el.classList.contains("iniciar")){
        clearInterval(timer);
        relogio.classList.remove("pausado");
        iniciaRelogio(timer);
    }

    if(el.classList.contains("pausar")){
        clearInterval(timer);
        if(seconds !== 0){
            relogio.classList.add("pausado")
        }
    }

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.classList.remove("pausado")
        seconds = 0
        relogio.innerHTML = "00:00:00"; 
    }
})