const express = require('express')
const app = express()
const port = 3000

const item =require('./routes/item.js');
const bird = require('./routes/birds.js');

app.use('/api', item);
app.use('/muz', bird);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})