const PORT = 4000
const express = require('express');
const cors = require('cors')
const app = express()
const mongoDBClient = require('./mongoClient')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/index.js')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Express! 🎉')
})

// API Rest 
const Product = require('./models/product');
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(err)
    }
})

app.get('/products/:category', async (req, res) => {
    const category = req.params.category
    const products = await Product.find({ category : category})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(err)
    }
})

// GraphQL UI
app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema, 
      graphiql: true,
    }),
  );
  

app.listen(PORT, () => {
    console.log(`Server up and running on port http://localhost:${PORT} 🎉`)
    mongoDBClient.initialize()
})