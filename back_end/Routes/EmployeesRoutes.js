const router = require('express').Router;
const Emp = require('../model/Employeemodel');

 router.route('/').get(async (req,res)=>{
    const Employees = await Emp.find();
    return res.json(Employees);
})


module.exports = router;