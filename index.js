// creating JSON server
// 1) import json server library
const jsonServer = require('json-server')
// 2) create json server using create() method
const mediaPlayerServer = jsonServer.create()
// 3) connect json server with db.json file using router() method
const router = jsonServer.router('db.json')
// 4) create a middleware that process request and response using defaults() method
const middleWare = jsonServer.defaults()
// 5) use middleware
mediaPlayerServer.use(middleWare)
// 6) use router
mediaPlayerServer.use(router)

// create a port for running server
const PORT = 5000

// running media player server
mediaPlayerServer.listen(PORT, () => {
    console.log(`Media player server is running in PORT ${PORT}`)
})