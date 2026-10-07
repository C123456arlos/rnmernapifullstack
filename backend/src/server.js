import express from 'express'
import dns from "node:dns/promises"
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
dns.setServers(["1.1.1.1"])
const app = express()
app.get('/', (req, res)=>res.send('app'))
const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, ()=>console.log('server is up and running on PORT', ENV.PORT))
    } catch (error) {
        console.error('failed to start server', error.message)
        process.exit(1)
    }
}
startServer()