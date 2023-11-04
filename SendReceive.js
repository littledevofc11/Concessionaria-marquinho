import chalk from "chalk"
import User from "./User.js"

//////
const usuario1 = new User("Vandré", "Priviati", "1991", "user", 63031.78, ["honda civic 2003"])

console.log(chalk.bgBlue(usuario1.comprarCarro(usuario1.saldo, 2000, "mustang")))
console.log(chalk.bgGray(usuario1.veiculos))

console.log(chalk.bgRed("////////////////////////////////"))

console.log(usuario1.venderCarro(usuario1.saldo, 2000, "mustang"))

console.log(chalk.bgBlue(usuario1.veiculos))
console.log(chalk.bgGray(usuario1.saldo))

