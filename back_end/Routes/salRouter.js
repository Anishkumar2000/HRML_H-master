const express = require("express");
const router = express.Router();
const Emp = require("../model/Empmodel");
const Sal = require('../model/salary_model');
const salarymodel = require("../model/salary_model");


// Get Someone Employee Current month Salary Details

router.get("/:id/:month", async (req, res) => {
    const Eid = req.params.id;
    const Mon = req.params.month;
    const Empsal = await Sal.find({ code: Eid, month:Mon }).sort({date:1});
    return res.json(Empsal);
    // console.log(Eid); 
    // console.log(Empsal); 
    // 

});


// add Someone Employee Salary
router.post("/add", async (req, res) => {
    
    const { code, month, date, w_hrs, w_amt, ot_hrs, ot_amt, total, leave } = req.body;
    const addsal = await Sal.create({
        code: code,
        month: month,
        date: date,
        w_hrs: w_hrs,
        w_amt: w_amt,
        ot_hrs: ot_hrs,
        ot_amt: ot_amt,
        total: total
        
    });
    return res.json(addsal);
    // console.log(addsal);
});

// Edit Salary

router.get("/edit/view/:id",async(req,res)=>{
    const Eid = req.params.id;
    const Editid = await Sal.findOne({_id:Eid});
    return res.json(Editid);
  
});

router.patch("/edit/:id",async(req,res)=>{
    const Eid = req.params.id;
    // console.log(Eid);
    const { w_hrs, w_amt, ot_hrs, ot_amt, total} = req.body;
    
    const updsal = await Sal.updateOne({_id:Eid},{$set:{
        w_hrs: w_hrs,
        w_amt: w_amt,
        ot_hrs: ot_hrs,
        ot_amt: ot_amt,
        total: total
    }});
    return res.send("done");
});

// Delete Salary

router.delete("/:id",async(req,res)=>{
    const Eid = req.params.id;
   const delsal = await Sal.deleteOne({_id:Eid});
   return res.json(delsal);

});

module.exports = router;