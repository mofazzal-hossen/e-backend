import express from 'express'

const router = express.Router()

router.post("/register", (req,res)=>{
 res.json({ message: "Registration successful" })
})




export default router