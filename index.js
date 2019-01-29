console.log('JavaScript Number')

const number1 = 1
const number2 = 20
const number3 = 300

console.log(`number1 = ${number1}`)
console.log(`number2 = ${number2}`)
console.log(`number3 = ${number3}`)

const result1 = number1 + number2
const result2 = number2 + number3
const result3 = number3 + number1

console.log(result1)
console.log(result2)
console.log(result3)

console.log(`result1 = ${number1} + ${number2} = ${result1}`)
console.log(`result2 = ${number2} + ${number3} = ${result2}`)
console.log(`result3 = ${number3} + ${number1} = ${result3}`)

const string1 = 'Hello'
const string2 = 'World'
const string3 = 'Coding'

const resultNumberString1 = number1 + string1
const resultNumberString2 = number2 + string2
const resultNumberString3 = number3 + string3

console.log(resultNumberString1)
console.log(resultNumberString2)
console.log(resultNumberString3)

const array1 = [1, 2, 3]
const array2 = ['One', 'Two', 'Three']
const array3 = [
  {
    name: 'Imba',
    cost: 25000000
  },
  {
    name: 'Hax',
    cost: 40000000
  },
  {
    name: 'Ref',
    cost: 30000000
  },
  {
    name: 'Bnr',
    cost: 0
  }
]

array1.push(4)
array2.push('Four')
array3.push({
  name: 'Lewa',
  cost: 120000000
})

console.log(array1)
console.log(array2)
console.log(array3)
