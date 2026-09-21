// routes/authRouter.js
import express from 'express'
import User from '../models/User.js' // Import the User model

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    // 1. Check if user already exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // 2. Create new user structure
    const newUser = new User({
      username,
      email,
      password // Note: You should hash this before saving!
    })

    // 3. Save to MongoDB
    await newUser.save()

    res.status(201).json({ message: 'User created successfully', userId: newUser._x })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
