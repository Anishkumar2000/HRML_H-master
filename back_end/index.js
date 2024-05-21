const express = require("express");
const cors = require("cors");
const port = 5001;
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Emp = require("./model/Empmodel");

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

Connection.once("open", () => {
  console.log("Database Connected");
});

// Get All Employees

app.get("/users", async (req, res) => {
  const empl = await Emp.find();
  return res.json(empl);
  // return res.json([]);
});

// Add Employee

app.post("/users/add", async (req, res) => {
  const {
    empcode,
    name,
    mail,
    mobile,
    department,
    role,
    dob,
    doj,
    salary,
    aadhar,
    pan,
    pf,
  } = req.body;
  const newemp = await Emp.create({
    code: empcode,
    name: name,
    mail: mail,
    mobile: mobile,
    department: department,
    role: role,
    dob: dob,
    doj: doj,
    salary: salary,
    aadhar: aadhar,
    pan: pan,
    pf: pf,
  });
  return res.json(newemp);
});

// Edit Employee -> send Employee Deatils

app.get("/users/edit/:id", async (req, res) => {
  const Eid = req.params.id;
  const EdEmp = await Emp.findOne({ code: Eid });
  return res.json(EdEmp);
});

app.post("/users/update/:id", async (req, res) => {
  const Uid = req.params.id;
  const {
    code,
    name,
    mail,
    mobile,
    department,
    role,
    dob,
    doj,
    salary,
    aadhar,
    pan,
    pf,
  } = req.body;

  const UpEmp = await Emp.updateOne(
    { code: Uid },
    {
      $set: {
        code: code,
        name: name,
        mail: mail,
        mobile: mobile,
        department: department,
        role: role,
        dob: dob,
        doj: doj,
        salary: salary,
        aadhar: aadhar,
        pan: pan,
        pf: pf,
      },
    }
  );
  return res.json({
    message: "Employees Details Added Successfully Completed",
  });
});

// Delete Employee

app.post("/users/delete", async (req, res) => {
  const DelEmp = await Emp.deleteOne(req.body);
  // console.log(req.body);
  return res.json(DelEmp);
  // return res.json({ message: "wait" });
});

app.listen(port, (err) => {
  console.log(`App is Running in Port ${port}`);
});
