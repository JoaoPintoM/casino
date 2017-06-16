import { bank } from './bank'

const startAmountWin = 40
const taxPercent = 80
const chancePercent = 0.15
let amountToWin = startAmountWin

const play = (money) => {
  const net = tax(money)
  amountToWin += net

  const chance = Math.random()
  if (chance < chancePercent) {
    const winningAmount = amountToWin
    amountToWin = startAmountWin
    bank.sub(winningAmount)
    return winningAmount
  }
  return false
}

const tax = (amount) => {
  const tax = (amount / 100) * taxPercent
  bank.add(tax)
  return amount - tax
}

export const game = { play }
