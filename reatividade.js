const projeto = {
    id: 1,
    descricao: 'Alura Tracker 3.0'
}

const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave){
        console.log(`Alguem pediu a chave ${chave} do projeto`)
        return objetoOriginal[chave]
    },
    set(objetoOriginal, chave, valor) {
        console.log(`Alguem alterou a chave ${chave} para ${valor}`)
        objetoOriginal[chave] = valor
    }
})

proxy.descricao = 'Reatividade '
console.log(proxy.descricao)