const relogio = document.querySelector(".relogio");

function timer (){


// Aqui está pegando uma hora zerada. Ou seja, uma hora 00:00:00.
// Aqui também formata a hora para que venha no formato de 00:00:00
const getTimeFromSeconds = (segundos) =>{
    const data = new Date(segundos * 1000); //Está *1000, porque o new Date recebe em milessimos de segundos
    return data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'GMT'});
    // Usa-se o timeZone: "GMT", devido ao fuso-horário.
}

// Aqui está criando um setInterval que de 1 em 1 segundo adiciona 1 segundo na variavel segundo que é exibida no HTML.
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

// Mudanças: 
// Colocar no botão pausar: quando os segundos for = 0, não mudar sua cor, apenas quando os segundor forem maior que 0. Assim, quando a pessoa clicar no pausar de imediato, sua cor não vai ficar vermelha.

// Anotar no seu caderno o método "contains", que significa contem. Ex:if(el.classList.contains("pausar")) --> se o elemento conter a classe pausar

const hourTimer = (segundos)=>{
    const data = new Date(segundos);
    data.toLocaleTimeString("pt-br", )
}