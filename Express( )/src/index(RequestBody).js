require("dotenv").config();
const express = require("express");

const app = express();

// El metodo text() permite que express pueda procesar el texto
app.use(express.text());
app.use(express.json());
// El metodo urlencoded permite que express pueda interpretar el form
app.use(express.urlencoded({extended: false}))

app.post("/user", (req, res) => {
    console.log(req.body)
  res.send("Nuevo Usuario Creado");
});

app.listen(process.env.PORT || 4000);
console.log(`Server On Port: ${process.env.PORT || 4000}`);
