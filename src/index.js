import { bank } from './bank'
import { game } from './joaoGame'

const price = 10
const playedGames = 100
console.log(`Bank balance: ${bank.balance()}`)

let count = 0
for (let i = 0; i < playedGames; i++) {
  count++
  const result = game.play(price)
  if (result) {
    console.log(`played ${count} times; cost ${price * count}: won: ${result}`)
    count = 0
  }
}

console.log(`Bank balance: ${bank.balance()}`)
