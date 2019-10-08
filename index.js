const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  fs.createReadStream(`./${process.env.FILE}`)
    .pipe(res)
}).listen(8081)
