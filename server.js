
import express from 'express'
import dotenv from 'dotenv/config.js'

const app = express()
const port = process.env.PORT || 4001 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
