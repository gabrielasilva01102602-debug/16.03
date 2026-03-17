//Criar um programa  com uma condicional composta para avaliar o desempenho escolar entre 'Exelente' , 'Ótimo', 'Regular' ou 'ruim'. Dependendo da nota
let nota = 75
if(nota >= 90){
    console.log("Excelente!")
} else if (nota >=75 && nota <=89){
    console.log("Otima")
} else if (nota >=61 && nota <= 75){
    console.log("Não fez mais que a sua obrigação")
} else if(nota >= 55 && nota <=60){
    console.log("Regular melhore!")
}else{
    console.log("Ruim")
}