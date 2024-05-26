const mongoose = require("mongoose");

const sal_schema = mongoose.Schema({
    code:{type:String},
    month:{type:String},
    date:{type:String },
    w_hrs:{type:Number},
    w_amt:{type:Number},
    ot_hrs:{type:Number},
    ot_amt:{type:Number},
    total:{type:Number},
    leave:{type:Number}
});


const salarymodel = mongoose.model('Salaries',sal_schema);


module.exports = salarymodel;
