function calcularValorHora(){
    const totalDias = document.getElementById("total-dias").valueAsNumber

    const horasDia = document.getElementById("horas-dia").valueAsNumber
    
    const valorHora = document.getElementById("valor-hora").valueAsNumber

    const valorHoraTotal = (totalDias * horasDia) * valorHora
document.getElementById("resultado-calculo").textContent = `Você receberá R$ ${valorHoraTotal.toFixed(2)}`
}



function calcularValorFreela(){

    const diasSemana = document.getElementById("dias-sem").valueAsNumber
    const horasPorDia = document.getElementById("horas-por-dia").valueAsNumber
    const ganhoMensal = document.getElementById("ganho-mensal").valueAsNumber

    const horasPorSemana = diasSemana * horasPorDia
    const totalHorasPorMes = horasPorSemana * 4 // quantidade de semanas no mês

    const valorPorHoraMensal = ganhoMensal / totalHorasPorMes

    console.log(valorPorHoraMensal);

    document.getElementById("resultado-mensal").textContent = `você recebe R$ ${valorPorHoraMensal.toFixed(2)}`


}