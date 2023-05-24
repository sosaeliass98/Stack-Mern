require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/myFile", (req, res) => {
  res.sendFile("files/myFile.txt", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Elías",
    lastname: "Sosa",
    age: 24,
    address: {
      city: "San Miguel de Tucumán",
      street: "Miguel Lillo",
    },
  });
});

app.get('/isAlive', (req,res) => {
    res.sendStatus(204)
});

app.listen(process.env.PORT || 4000);
console.log(`Server On Port: ${process.env.PORT || 4000}`);
