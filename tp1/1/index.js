const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE

    let position = input[0]

    for (let i = 1; i < 43; i++) {
        let depassement = input[i].split(' ')
        position += parseInt(depassement[0])
        position -= parseInt(depassement[1])
      }

    if (parseInt(position) <= 100) {
      return 1000
    } else if (parseInt(position) <= 10000) {
      return 100
    } else {
      return 'KO'
    }

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