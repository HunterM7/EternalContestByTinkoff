const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
})

let lines = []
rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const [price, trafic, extraPrice, plannedTrafic] = lines[0].split(/\s+/g)

  const extraTrafic =
    +plannedTrafic - +trafic > 0 ? +plannedTrafic - +trafic : 0

  const result = +price + extraTrafic * +extraPrice

  process.stdout.write(result.toString())
})
