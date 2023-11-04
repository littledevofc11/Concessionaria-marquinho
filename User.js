import carro from "./Carro.js"

export default class User extends carro {
    #nome
    #sobrenome
    #anoNascimento
    #role
    #saldo
    #veiculos
    constructor(nome, sobrenome, anoNascimento, role, saldo, veiculos){
        super()
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#anoNascimento = anoNascimento
        this.#role = role
        this.#saldo = saldo
        this.#veiculos = veiculos
    }
    get nome() {
        return this.#nome
    }
    get sobrenome() {
        return this.#sobrenome
    }
    get anoNascimento() {
        return this.#anoNascimento
    }
    get role() {
        return this.#role
    }
    get saldo() {
        return this.#saldo
    }
    get veiculos() {
        return this.#veiculos
    }


    comprarCarro(saldo, precoCarro, carro){
        if(saldo > precoCarro){
            let novoSaldo = saldo - precoCarro
            this.veiculos.push(carro)
            return console.log("saldo novo: " + novoSaldo)
        }else{
            return console.log("saldo insuficiente")
        }
        
    }
    venderCarro(saldo, precoCarro, carro){
        //se possuir o carro, vender
    }
}