import express from 'express'
import dotenv from 'dotenv/config.js'
import authRouter from './routes/authRouter.js'

// 1. Initialize app FIRST 🌟
const app = express()

// 2. NOW use your middleware and routers
app.use(express.json()) 
app.use('/api/v1/auth', authRouter)

// 3. Set up your port and start the server
const port = process.env.PORT || 4001 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
