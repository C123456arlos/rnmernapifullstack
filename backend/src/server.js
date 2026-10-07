import express from 'express'
import dns from "node:dns/promises"
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
dns.setServers(["1.1.1.1"])
const app = express()
connectDB()
app.get('/', (req, res)=>res.send('app'))
app.listen(ENV.PORT, () => console.log('server is up and running', ENV.PORT))