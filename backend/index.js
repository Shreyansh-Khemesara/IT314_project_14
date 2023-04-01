import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true, }))

app.use(cors()) // Allow all origins

app.get('/', async (req, res) => {
    res.status(200).json({ message: 'Menulize backend', })
})

// 404 route
app.use((req, res) => {
    
    res.status(404).json({ message: 'Not Found', })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})