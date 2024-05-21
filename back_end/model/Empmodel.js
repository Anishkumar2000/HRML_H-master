const mongoose = require ('mongoose');

const Empschema = mongoose.Schema({
  code:{type:String},
  name:{type:String},
  mail:{type:String},
  mobile:{type:String},
  department:{type:String},
  role:{type:String},
  dob:{type:String},
  doj:{type:String},
  salary:{type:String},
  aadhar:{type:String},
  pan:{type:String},
  pf:{type:String}
});

const empmodel = mongoose.model('Employee',Empschema);


module.exports = empmodel;