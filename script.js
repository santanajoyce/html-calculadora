function calcularValorHora(){
    const totalDias = document.getElementById("total-dias").valueAsNumber

    const horasDia = document.getElementById("horas-dia").valueAsNumber
    
    const valorHora = document.getElementById("valor-hora").valueAsNumber

    const valorHoraTotal = (totalDias * horasDia) * valorHora
document.getElementById("resultado-calculo").textContent = "Você receberá R$ " + valorHoraTotal
}


// Total do tempo =  dias x horas do dia
// valor total horas = total do tempo x valor da hora


// valor total de horas = (dias x horas do dia) x valor da hora
  
                 //tempo     X   valor do tempo em horas
