const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
})

let lines = []
rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  let colleagues = +lines[0]
  let result = 0
  let chunks = 1

  while (chunks < colleagues) {
    result += 1
    chunks *= 2
  }

  process.stdout.write(result.toString())
})
