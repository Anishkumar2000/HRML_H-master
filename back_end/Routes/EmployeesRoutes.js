const express = require("express");
const router = express.Router();
const Sal = require("../model/salary_model");
const Emp = require("../model/Empmodel");

// Get All Employees

router.get("/", async (req, res) => {
    const empl = await Emp.find().sort({code:1});
    return res.json(empl);
  });
  // Add Employee
  
router.post("/add", async (req, res) => {
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
      pf
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
      pf: pf
    });
    return res.json(newemp);
  });

  // Update Employees

  // Edit Employee -> send Employee Deatils
   router.get("/edit/:id", async (req, res) => {
    const Eid = req.params.id;
    const EdEmp = await Emp.findOne({ code: Eid });
    return res.json(EdEmp);
  });
  
  router.post("/update/:id", async (req, res) => {
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
  // Delete Employees

router.post("/delete", async (req, res) => {
  const DelEmp = await Emp.deleteOne(req.body);
  const DelSal = await Sal.deleteMany(req.body);
  console.log(req.body);
  console.log(DelSal);
  return res.json(DelEmp);
  
  // return res.json({ message: "wait" });
});
module.exports = router;