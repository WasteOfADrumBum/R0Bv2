const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
//const path = require('path')
require('dotenv').config()

app.use(express.json())
app.use(cors())

// DB Connection
mongoose
  .connect(process.env.REACT_APP_ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err))

// API Routes
app.use('/api/employment', require('./routes/employmentRoutes'))
app.use('/api/portfolio', require('./routes/portfolioRoutes'))

app.get('/', (req, res) => res.send('Server is up and running'))

// PORT
const PORT = process.env.REACT_APP_SERVER_PORT || 6060
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
