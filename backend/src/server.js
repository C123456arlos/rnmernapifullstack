import express from 'express'
import dns from "node:dns/promises"
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import {clerkMiddleware} from '@clerk/express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
dns.setServers(["1.1.1.1"])
const app = express()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
app.get('/', (req, res) => res.send('app'))
app.use('/api/users', userRoutes)
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