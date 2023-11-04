import User from "./User.js"

const usuario1 = new User("Vandré", "Priviati", "1991", "user", 63031.78, ["honda civic 2003"])

console.log(usuario1.comprarCarro(usuario1.saldo, 2000, "mustang"))
console.log(usuario1.veiculos)

