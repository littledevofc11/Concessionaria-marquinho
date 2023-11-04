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
        if(this.#veiculos.includes(carro)){
            console.log("Você já tem esse veículo")
        }else{
            if(saldo > precoCarro){
                let novoSaldo = saldo - precoCarro
                this.veiculos.push(carro)
                return console.log("saldo novo: " + novoSaldo)
            }else{
                return console.log("saldo insuficiente")
            }
        }

        
    }
    venderCarro(saldo, precoCarro, carro){
        if(this.#veiculos.includes(carro)){
            let indice = this.#veiculos.indexOf(carro);
        
            if (indice !== -1) {
              this.#veiculos.splice(indice, 1);
              saldo = saldo + precoCarro
            } else {
              console.log(`O veiculo '${carro}' não foi encontrado na conta.`);
            }
        }else{
            console.log("Você não possui esse veículo para vendê-lo")
        }

    }
}