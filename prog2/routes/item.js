//ye sare item specefic rout ko store karege

const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
     res.send('got a get request');
   // res.sendFile('../index.html',{root:__dirname});
  });

router.post('/item', (req, res) => {
    // res.send('got a post request');
    res.json({x:1,y:2,z:3})
  });

router.put('/item/:id', (req, res) => {
    res.send('got a put request');
  });

router.delete('/item/:id', (req, res) => {
    res.send('got a delet request');
  });

module.exports = router
