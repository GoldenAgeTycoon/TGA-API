const express = require("express")
const app = express()

const path = __dirname + '/views/';

app.use(express.static(path));

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

  app.listen(25612, () => {
    console.log("Website being hosted!")
  })