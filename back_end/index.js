const express = require("express");
const cors = require("cors");
const port = 5001;
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
// const Emp = require("./model/Empmodel");
const Sal = require('./model/salary_model');
const salrouter = require("./Routes/salRouter");
const userrouter = require("./Routes/EmployeesRoutes");

const uri = process.env.Atlas_Uri;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// database Connection

mongoose.connect(uri);
const Connection = mongoose.connection;

try{
  Connection.once("open", () => {
    console.log("Database Connected");
  });
}
catch{
  console.log("Database Not Connected");
}
// test

// Routes
app.use('/users',userrouter);

app.use('/sal',salrouter);

app.listen(port, (err) => {
  console.log(`App is Running in Port ${port}`);
});