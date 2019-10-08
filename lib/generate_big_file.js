const fs = require('fs')
const faker = require('faker')

const items = []

for (let i = 0 ; i < 10000000 ; i++) {
  items.push({ name: faker.name.firstName() })
}

fs.writeFileSync('../big.json', JSON.stringify(items))
