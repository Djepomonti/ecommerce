const express = require('express');
const cors = require('cors');
const app = express()
const PORT = 4000

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Express!!')
  })

app.listen(PORT, () => {
    console.log(`server up and running ${PORT}`)
  })

