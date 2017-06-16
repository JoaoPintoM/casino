let money = 1000

const balance = () => money

const add = amount => {
  money += amount
  return money
}

const sub = amount => {
  money -= amount
  return money
}

export const bank = { add, sub, balance }
