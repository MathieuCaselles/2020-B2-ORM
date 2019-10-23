const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE

    let compteur = 1
    const inputLength = input[0]
    const chargeMax = 100
    let chargeActuelle = 0

    for (let i = 1; i <= inputLength; i++) {
      if (chargeActuelle + input[i] <= chargeMax) {
        chargeActuelle += input[i]
      } else {
        compteur += 1
        chargeActuelle = 0
        chargeActuelle += input[i]
      }
    }
    return compteur

    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}