import User from "./User.js"

export default class carro {
    #carro
    #marca
    #anoLancamento
    #diaDeHoje
    #precoCarro
    constructor(carro, marca, anoLancamento, diaDeHoje, precoCarro){
        //super()
        this.#carro = carro
        this.#marca = marca
        this.#anoLancamento = anoLancamento
        this.#diaDeHoje = diaDeHoje
        this.#precoCarro = precoCarro
    }

    get carro() {
        return this.#carro
    }
    get marca() {
        return this.#marca
    }
    get anoLancamento() {
        return this.#anoLancamento
    }
    get diaDeHoje() {
        return this.#diaDeHoje
    }
    get precoCarro() {
        return this.#precoCarro
    }
}