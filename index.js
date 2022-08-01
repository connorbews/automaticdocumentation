const express = require('express');
const { testFunc } = require('./Child_Process/echo.js');

const app = express()
const port = 3000

app.use(express.static('C:\\Users\\RAZER\\Desktop\\doxygenoutput\\html'));

app.get('/', (req, res) => {
  res.sendFile('C:\\Users\\RAZER\\Desktop\\doxygenoutput\\html\\index.html');
})

app.get('/test', (req, res) => {
  const checkdirectory = testFunc()
  checkdirectory.then((message) => {
    res.sendFile('C:\\Users\\RAZER\\Desktop\\doxygenoutput\\html\\index.html');
    console.log(message);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})