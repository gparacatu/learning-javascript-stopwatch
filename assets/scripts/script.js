let timer;

function cronometro() {

    let segundosHTML = document.getElementById("segundos");
    let minutosHTML = document.getElementById("minutos");
    let minutosHorasHTML = document.getElementById("minutos-horas");
    let horasHTML = document.getElementById("horas");

    if (parseInt(segundosHTML.innerHTML) < 59) {
        segundosHTML.innerHTML = parseInt(segundosHTML.innerHTML) + 1;
    } else {
        segundosHTML.innerHTML = 0;
        minutosHTML.innerHTML = parseInt(minutosHTML.innerHTML) + 1;
        minutosHorasHTML.innerHTML = parseInt(minutosHorasHTML.innerHTML) + 1;
        if (parseInt(minutosHorasHTML.innerHTML) === 60) {
            minutosHorasHTML.innerHTML = 0;
            horasHTML.innerHTML = parseInt(horasHTML.innerHTML) + 1;
        }
    }

}

function startStop() {
    
    startStopButton = document.getElementById("start-stop-button");
    if(startStopButton.innerHTML == "START") {
        timer = setInterval(cronometro, 10);
        startStopButton.innerHTML = "STOP";
    } else {
        clearInterval(timer);
        startStopButton.innerHTML = "START";
    }
}

function resetar() {
    document.querySelectorAll(".conteudo").forEach((item) => item.innerHTML = 0);
}
 
