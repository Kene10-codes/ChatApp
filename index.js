const http = require('http') // IMPORT HTTP
const app = require('./app') // IMPORT app.js
const server = http.createServer(app) // CREATE SERVER

const PORT = 3200 // SET PORT

// START SERVER FUNCTION
function startServer() {
    server.listen(PORT, () => {
        console.log(`Server started successfully on port ${PORT}`)
    })
}

// INVOKE FUNCTION
startServer()
