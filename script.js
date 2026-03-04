function contar(){
    let inicio = Number(document.getElementById('txtinicio').value) // se vc nao usa .value vc nao pega o resultado dentro dele e sim o html inteiro utilizar number para alterar seu valor
    let fim = Number(document.getElementById('txtfim').value)
    let passo = Number(document.getElementById('txtpasso').value)
    let res = document.getElementById('res')
    res.innerHTML = "Contando: <br>"
    if(inicio <= 0 || fim <= 0 || passo<= 0 ){
        window.alert('erro verifique os dados e tente novamente')
    } else {
        for(let i = inicio; i <= fim; i += passo ){
            res.innerHTML += i;
            
            if(i + passo <= fim){
                res.innerHTML += " → ";
            }
        }
        res.style.textAlign = 'center' // centralizando a linha  
    }
}