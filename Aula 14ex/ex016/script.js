function contar() { 
    let ini = document.getElementById('txti') // SALVAR O NUMERO DIGITADO NA ID TXTI QUE É A CAIXA
    let fim = document.getElementById('txtf') // ... TXTF
    let passo = document.getElementById('txtp') // ... TXTP
    let res = document.getElementById('res') // muda o conteudo da div RES

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       // window.alert(`#ERRO! Faltam dados.`) // PARA NÃO DEIXAR UM DOS CAMPOS EM BRANCO
        res.innerHTML = `Impossivel contar`//RES.INNERHTML É O RES DA VAR ACIMA
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value) // ... / let mesma coisa que var
        let f = Number(fim.value) // TRANFORMAR O QUE DIGITADO EM NUMERO PARA CALCULAR
        let p = Number(passo.value) // ...
        if (p <=0 ){ // se o passo for 0 ele muda para 1
            window,alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }
            if (i < f){
                //contatem crescente
                for(let c = i; c <= f; c += p) { // REALIZAR A REPETIÇÃO INICINADO PELO C = I DE INICIO
                    res.innerHTML += `${c} \u{1F595}`// RESULTADO E EMOJI
                } 
            } else {
                    //contagem regressiva
                    for(let c = i; c >=f; c -= p)
                    res.innerHTML +=` ${c} \u{1F595}`
                }
                res.innerHTML += `\u{1F3C1}` // COLOCAR EMOJI NO FINAL
            }
            
    }
