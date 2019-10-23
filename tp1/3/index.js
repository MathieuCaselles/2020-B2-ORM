const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Salle au trésor",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    
    const tailleGrille = input[0]
    let chemin = ''
    let direction = '>'
    for (let i = 1; i <= tailleGrille; i++) {
      let ligneActuelle = input[i].split('')
      for (let j = 0; i <= tailleGrille; i++) {
        if (ligneActuelle[j] === 'o') {
          chemin += 'x'
          ligneActuelle[j] = '.'
          j -= 1
        } else if (j + 1 < tailleGrille && j - 1 > -1) {
          chemin += direction
        } 
        console.log('coucou')
      }
      if (direction === '>') {
        direction = '<'
      } else {
        direction = '>'
      }

      chemin += 'v'
    }

    chemin = chemin.substring(0,chemin.length -1);

    grilleInverse = input.reverse()

    for (let i = 0; i <= tailleGrille; i++) {
      let ligneActuelle = input[i].split('')
      for (let j = 0; i <= tailleGrille; i++) {
        if (ligneActuelle[j] === '*') {
          chemin += 'x'
          ligneActuelle[j] = '.'
          j -= 1
        } else if (j + 1 < tailleGrille && j - 1 > -1) {
          chemin += direction
        } 
      }
      if (direction === '>') {
        direction = '<'
      } else {
        direction = '>'
      }

      chemin += '^'
    }

    chemin = chemin.substring(0,chemin.length -1);

    
    console.log(chemin)
    return chemin


    // AND HERE
  },
  verify: function (dataset, output) {
    const outputArray = output.split('')
    const inputMatrix = dataset.input.map(row => row.split(''))
    let score = 0
    let position = {
      x: 0,
      y: 0
    }
    for (const outputChar of outputArray) {
      switch (outputChar) {
        case 'x':
          const currentChar = inputMatrix[position.y][position.x]
          if (currentChar === 'o') {
            score++
          } else if (currentChar === '*') {
            score = score * 2
          } else {
            throw new Error('Invalid move, nothing to grab !')
          }
          break
        case '>':
          if (!inputMatrix[position.y][position.x + 1]) {
            throw new Error('Invalid move, out of matrix !')
          } else {
            position.x++
          }
          break
        case '<':
          if (!inputMatrix[position.y][position.x - 1]) {
            throw new Error('Invalid move, out of matrix !')
          } else {
            position.x--
          }
          break
        case 'v':
          if (!inputMatrix[position.y + 1][position.x]) {
            throw new Error('Invalid move, out of matrix !')
          } else {
            position.y++
          }
          break
        case '^':
          if (!inputMatrix[position.y - 1][position.x]) {
            throw new Error('Invalid move, out of matrix !')
          } else {
            position.y--
          }
          break
        default:
          throw new Error(`Invalid character ${outputChar} !`)
      }
    }
    if (dataset.output !== score) {
      throw new Error(`${bright}Got ${score} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}