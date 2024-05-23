import React, { useEffect, useState } from "react";
import "./sal_add_edit.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Sal_Add() {
  const { id } = useParams();
  const [userdata , setuserdata] = useState([]); // backend
   const [User, setUser] = useState([]);
   const [w_amt,setw_amt] = useState(0);
   const [ot_amt,setot_amt] = useState(0);
   const [total,settotal] = useState(0);
  let Months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
 
  let one = async () => {
    await axios.get(`http://localhost:5001/users/edit/${id}`).then((res) => {
      setuserdata(res.data);
    });
  };

  useEffect(()=>{
    one();
  },[]);



  const whrs = (e) => {
    let whr = userdata.salary*e.target.value;
    setw_amt(Number(whr));
  };
 
  function othrs(e) {
    let otamt = e.target.value*(userdata.salary*1.5);
    setot_amt(Number(otamt));
    
  };
  useEffect(()=>{
    settotal(w_amt + ot_amt);
  },[w_amt,ot_amt]);

  
function done() {
  let code = userdata.code;
  let date = document.querySelector('#date').value;
  let mon = new Date(date).getMonth();
  let month = Months[mon];
  let w_hrs = document.querySelector("#w_hrs").value;
  let ot = document.querySelector('#ot').value;
 };


  return (
    <div className="sal_container dfcc">
      <div className="sal_form dfcc c">
        <div className="box1 dfcc">
          <h3>Name</h3>
        </div>
        <div className="box2 dfs c">
          <div className="box">
            <label htmlFor="date">date</label>
            <input type="date" id="date" />
          </div>
          <div className="box">
            <label htmlFor="w_hrs">Worked Hours</label>
            <input
              type="text"
              id="w_hrs"
              onChange={whrs}
              placeholder="Enter Worked Hours"
            />
          </div>
          <div className="box">
            <label htmlFor="wor_amt">Amount</label>
            <input type="text" id="wor_amt" Value={w_amt} readOnly/>
          </div>
          <div className="box">
            <label htmlFor="ot">OT</label>
            <input
              type="text"
              id="ot"
              onChange={othrs}
              placeholder="Enter Worked Hours"
            />
          </div>
          <div className="box">
            <label htmlFor="ot_amt">Amount</label>
            <input type="text" id="ot_amt" Value={ot_amt} readOnly />
          </div>
          <div className="box">
            <label htmlFor="total">Total</label>
            <input type="text" id="total" Value={total} readOnly />
          </div>
        </div>
        <div className="box3 dfcc">
          <button className="btn green" onClick={done}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sal_Add;
