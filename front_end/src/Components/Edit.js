import React, { useEffect, useState } from "react";
import "./Add.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();

  const [User, setUser] = useState([]);

  let edituser = async () => {
    await axios.get(`http://localhost:5001/users/edit/${id}`).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    edituser();
  });

  const change = async () => {
    let code = document.querySelector("#code").value;
    let name = document.querySelector("#name").value;
    let mail = document.querySelector("#mail").value;
    let mobile = document.querySelector("#mobile").value;
    let department = document.querySelector("#department").value;
    let role = document.querySelector("#role").value;
    let dob = document.querySelector("#dob").value;
    let doj = document.querySelector("#doj").value;
    let salary = document.querySelector("#salary").value;
    let aadhar = document.querySelector("#aadhar").value;
    let pan = document.querySelector("#pan").value;
    let pf = document.querySelector("#pf").value;

    let updatedetails = {
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
    };
    //  console.log(updatedetails.code);
    await axios
      .post(`http://localhost:5001/users/update/${id}`, updatedetails)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <div className="dfcc c">
        <div className="addhead">
          <h3>Edit Employee</h3>
        </div>
        <div className="addbox">
          <div className="addform1">
            <div className="empcode">
              <label htmlFor="code">Employee Code</label>
              <input type="text" id="code" defaultValue={User.code} readOnly />
            </div>
            <div className="empname">
              <label htmlFor="name">Employee Name</label>
              <input type="text" id="name" defaultValue={User.name} />
            </div>
            <div className="empmail">
              <label htmlFor="mail">Employee E-Mail Id</label>
              <input type="text" id="mail" defaultValue={User.mail} />
            </div>
            <div className="empmobile">
              <label htmlFor="mobile">Employee Mobile Number</label>
              <input type="text" id="mobile" defaultValue={User.mobile} />
            </div>
            <div className="empdepartment">
              <label htmlFor="department">Employee Department</label>
              <input
                type="text"
                id="department"
                defaultValue={User.department}
              />
            </div>
            <div className="emprole">
              <label htmlFor="role">Employee Role</label>
              <input type="text" id="role" defaultValue={User.role} />
            </div>
          </div>
          <div className="addform2">
            <div className="empdob">
              <label htmlFor="dob">Date of Birth</label>
              <input type="text" id="dob" defaultValue={User.dob} />
            </div>
            <div className="empdoj">
              <label htmlFor="doj">Date Of Join</label>
              <input type="text" id="doj" defaultValue={User.doj} />
            </div>
            <div className="empbasicsal">
              <label htmlFor="salary">Employee Basic Salary</label>
              <input type="text" id="salary" defaultValue={User.salary} />
            </div>
            <div className="empaadhar">
              <label htmlFor="aadhar">Employee Aadhar Card No</label>
              <input type="text" id="aadhar" defaultValue={User.aadhar} />
            </div>
            <div className="emppan">
              <label htmlFor="pan">Employee Pan Card Number</label>
              <input type="text" id="pan" defaultValue={User.pan} />
            </div>
            <div className="emppf">
              <label htmlFor="pf">Employee PF</label>
              <input type="text" id="pf" defaultValue={User.pf} />
            </div>
          </div>
        </div>
        <div className="addbtn">
          <button className="btn green" onClick={change}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
