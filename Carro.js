import User from "./User.js"



export default class carro extends User{
    #estoque
    #carro
    #marca
    #anoProducao
    #diaDeHoje
    #precoCarro
    
    constructor(estoque, carro, marca, anoProducao, diaDeHoje, precoCarro){
        const date = new Date()
        super()
        this.#estoque = estoque
        this.#carro = carro
        this.#marca = marca
        this.#anoProducao = anoProducao
        this.#diaDeHoje = diaDeHoje
        this.#diaDeHoje = date.getFullYear()
        this.#precoCarro = precoCarro
    }

    get estoque(){
        return this.#estoque
    }
    
    get carro() {
        return this.#carro
    }
    get marca() {
        return this.#marca
    }
    get anoProducao() {
        return this.#anoProducao
    }
    get diaDeHoje() {
        return this.#diaDeHoje
    }
    get precoCarro() {
        return this.#precoCarro
    }
}