const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://unifeso:unifeso-password@unifeso.kwuxv.gcp.mongodb.net/unifeso-financial-control?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("MongoDB Connected.");
});

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

require('../controllers/authController')(app);


app.get('/', (req, res) => {
    res.send("Ok");
})

const port = 8090;
app.listen(port, () => console.log(`Rodando em localhost:${port}`));