import { bank } from './bank'

const startAmountWin = 10
const taxPercent = 80
let amountToWin = startAmountWin

const baseCherryPrice = 5
const baseMelonPrice = 30
const baseBananaPrice = 50
const baseDiamondPrice = 250

const chancePercentCherry = 0.2
const chancePercentMelon = 0.1
const chancePercentBanana = 0.01
const chancePercentDiamond = 0.001

const play = (money) => {
  const net = tax(money)
  amountToWin += net

  const chance = Math.random()

  switch (true) {
    case (chance < chancePercentDiamond):
      return winingScenario('diamond', baseDiamondPrice)
    case (chance < chancePercentBanana):
      return winingScenario('banana', baseBananaPrice)
    case (chance < chancePercentMelon):
      return winingScenario('melon', baseMelonPrice)
    case (chance < chancePercentCherry):
      return winingScenario('cherry', baseCherryPrice)
    default:
      return false
  }
}

const winingScenario = (type, priceItem) => {
  const winningAmount = amountToWin + priceItem
  amountToWin = startAmountWin
  bank.sub(winningAmount)
  return { type, gains: winningAmount }
}

const _items = {
  cherry: amountToWin + baseCherryPrice,
  melon: amountToWin + baseMelonPrice,
  diamond: amountToWin + baseDiamondPrice
}
const items = () => _items

const tax = (amount) => {
  const tax = (amount / 100) * taxPercent
  bank.add(tax)
  return amount - tax
}

export const game = { play, items }
