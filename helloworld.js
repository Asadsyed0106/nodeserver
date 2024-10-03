const express = require('express');
const router = express.Router();
const fs = require('fs');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World Adnan!');
});


app.get('/files', (req, res) => {
  fs.readdir('./files', (err, files) => {
    
    console.log(files); 
    
  });
});


app.get('/form', (req, res) => {
  res.send('This is the form page');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
