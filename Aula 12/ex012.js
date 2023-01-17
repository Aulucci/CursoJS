var agora = new Date() // PEGAR HORA DO SISTEMA
var hora = agora.getHours() //PEGAR HORA DO SISTEMA
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5){ // HORA FOR IGUAI OU MENOR DE 5
    console.log(`Boa madrugada!`) // RESULTADO
} else if (hora < 12){ // MENOR QUE 12 E MAIOR QUE 5 POIS ESTA ACIMA
    console.log(`Bom dia!`) // RESULTADO
} else if (hora <=18) { // MENOR OU IGUAL A 18 E ACIMA DE 12 QUE ESTA ACIMA
    console.log(`Boa tarde!`) // RESULTADO
} else if (hora > 18) { // MAIOR QUE 18
    console.log(`Boa noite!`) // RESULTADO
} 