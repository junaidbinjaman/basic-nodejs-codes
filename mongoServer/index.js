const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

const users = ['Asad', 'Moin', 'Saber', 'Shusmita', 'Shohana', 'Shabana']


app.get('/', (req, res) => {
  const fruit = {
    product: 'Ada',
    price: 220,
  }
  res.send(fruit)
})
app.get('/fruits/banana', (req, res) => {
  res.send({ fruit: 'Banana', Quantity: 1000, Price: 10000 })
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id
  console.log(req.query)
  const name = users[id]
  res.send({ id, name })
})


app.post('/addUser', (req, res) => {
  console.log('data received', req.body)
  res.send(req.body)
})




app.listen(3000, () => console.log('Listening to port 3000'))