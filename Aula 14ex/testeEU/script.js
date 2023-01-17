function tabuada() {
    let num = document.getElementById(`txtn`)
    let tab = document.getElementById(`seltab`)
    if (num.value.length == 0){
        alert(`Digite um número!`)
    } else { 
        let n = Number(num.value)
        let c =1
        do { 
            let item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}` // metodo do
            tab.appendChild(item)
            c++
        } while (c <=20)

        /*for (let c = 1; c<=10; c ++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` *METODO FOR*
            tab.appendChild(item)
        }*/
        
        /*let c = 1 **METODO WHILE**
        tab.innerHTML = ""
         while (c<=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}` // so serve para outras linguagens de cria
            tab.appendChild(item)
            c++
        } */
    }
}