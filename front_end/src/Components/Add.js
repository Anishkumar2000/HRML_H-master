import React, { useState } from "react";
import "./Add.css";
import axios from "axios";

function Add() {
  const [Newemp, setNewemp] = useState("");

  const addemp = (e) => {
    setNewemp({ ...Newemp, [e.target.id]: e.target.value });
  };

  // Send Data to Back-End (Input Data)

  const submit = async () => {
    await axios.post("http://localhost:5001/users/add", Newemp).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="addcontainer">
        <div className="addhead">
          <h3>Add Employee</h3>
        </div>
        <div className="addbox">
          <div className="addform1">
            <div className="empcode">
              <label htmlFor="empcode">Employee Code</label>
              <input
                type="text"
                onChange={addemp}
                id="empcode"
                placeholder="Enter Code"
              />
            </div>
            <div className="empname">
              <label htmlFor="name">Employee Name</label>
              <input
                type="text"
                onChange={addemp}
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="empmail">
              <label htmlFor="mail">Employee E-Mail Id</label>
              <input
                type="text"
                onChange={addemp}
                id="mail"
                placeholder="Enter E-Mail Id"
              />
            </div>
            <div className="empmobile">
              <label htmlFor="mobile">Employee Mobile Number</label>
              <input
                type="text"
                onChange={addemp}
                id="mobile"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="empdepartment">
              <label htmlFor="department">Employee Department</label>
              <input
                type="text"
                onChange={addemp}
                id="department"
                placeholder="Enter Department"
              />
            </div>
            <div className="emprole">
              <label htmlFor="role">Employee Role</label>
              <input
                type="text"
                onChange={addemp}
                id="role"
                placeholder="Enter Role"
              />
            </div>
          </div>
          <div className="addform2">
            <div className="empdob">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="text"
                onChange={addemp}
                id="dob"
                placeholder="Enter Date of Birth"
              />
            </div>
            <div className="empdoj">
              <label htmlFor="doj">Date Of Join</label>
              <input
                type="text"
                onChange={addemp}
                id="doj"
                placeholder="Enter Date of Join"
              />
            </div>
            <div className="empbasicsal">
              <label htmlFor="salary">Employee Basic Salary</label>
              <input
                type="text"
                onChange={addemp}
                id="salary"
                placeholder="Enter Basic Salary"
              />
            </div>
            <div className="empaadhar">
              <label htmlFor="aadhar">Employee Aadhar Card No</label>
              <input
                type="text"
                onChange={addemp}
                id="aadhar"
                placeholder="Enter Aadhar Card No"
              />
            </div>
            <div className="emppan">
              <label htmlFor="pan">Employee Pan Card Number</label>
              <input
                type="text"
                onChange={addemp}
                id="pan"
                placeholder="Enter Pan Card No"
              />
            </div>
            <div className="emppf">
              <label htmlFor="pf">Employee PF</label>
              <input
                type="text"
                onChange={addemp}
                id="pf"
                placeholder="Enter Pf"
              />
            </div>
          </div>
        </div>
        <div className="addbtn">
          <button className="btn green" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Add;
