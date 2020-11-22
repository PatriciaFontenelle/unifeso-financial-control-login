const express = require('express');
const mongoose = require('mongoose');
const { ErrorHandlerMiddleware } = require("../middlewares");
//const cors = require('cors');

const { userRouter } = require("../routers");

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

//app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use(ErrorHandlerMiddleware);

const port = 8090;
app.listen(port, () => console.log(`Rodando em localhost:${port}`));