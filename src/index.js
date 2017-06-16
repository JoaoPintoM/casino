import colors from 'colors'
import { bank } from './bank'
import { game } from './joaoGame'

const price = 10
const playedGames = 1000
console.log(`Bank balance: ${bank.balance()}`)

let count = 0
for (let i = 0; i < playedGames; i++) {
  count++
  const result = game.play(price)
  if (result) {
    if (result.type === 'diamond') {
      console.log(colors.green(`played ${count} times; cost ${price * count}: won: ${result.gains} [TYPE: ${result.type}]`))
    } if (result.type === 'banana') {
      console.log(colors.yellow(`played ${count} times; cost ${price * count}: won: ${result.gains} [TYPE: ${result.type}]`))
    } else {
      console.log(`played ${count} times; cost ${price * count}: won: ${result.gains} [TYPE: ${result.type}]`)
    }
    count = 0
  }
}

console.log(`Bank balance: ${bank.balance()}`)
