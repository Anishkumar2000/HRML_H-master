import React, { useEffect, useState } from "react";
import "./sal_add_edit.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Sal_Add() {
  const { id } = useParams();
  const [userdata , setuserdata] = useState([]); // backend
   const [date, setdate] = useState("");
   const [month, setmonth] = useState("");
   const [w_hrs,setw_hrs] = useState(0);
   const [w_amt,setw_amt] = useState(0);
   const [ot_hrs,setot_hrs] = useState(0);
   const [ot_amt,setot_amt] = useState(0);
   const [total,settotal] = useState(0);
  //  const [valu,setvalu] = useState("");
   
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
  one();
   const date1 = (e)=>{
      setdate(e.target.value);
   }

  const whrs = (e) => {
    setw_hrs(Number(e.target.value));
    // let whr = userdata.salary*e.target.value;
    
  };
 
  function othrs(e) {
    setot_hrs(Number(e.target.value));
    let otamt = e.target.value*(userdata.salary*1.5);
    setot_amt(Number(otamt));
    
  };
  
  useEffect(()=>{
    let mon = new Date(date).getMonth();
    setmonth(Months[mon]);
    setw_amt((Number(userdata.salary)*w_hrs));
    setot_amt((Number(userdata.salary)*1.5)*ot_hrs);
    settotal(w_amt + ot_amt);
  },[date,w_hrs,w_amt,ot_amt]);

  // console.log(userdata);

const done = async()=>{
const data = {
  code:userdata.code,
  month:month,
  date:date,
  w_hrs:w_hrs,
  w_amt:w_amt,
  ot_hrs:ot_hrs,
  ot_amt:ot_amt,
  total:total,
  leave:0
};
await axios.post("http://localhost:5001/sal/add",data).then((res)=>{
  console.log(res.data);
 setw_hrs(0);
 setot_hrs(0);
});

 };


  return (
    <div className="container dfcc">
      <div className="sal_form dfcc c">
        <div className="box1 dfcc">
          <h3>{userdata.code}</h3>
        </div>
        <div className="box2 dfs c">
          <div className="box">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={date1} />
          </div>
          <div className="box">
            <label htmlFor="w_hrs">Worked Hours</label>
            <input
              type="text"
              id="w_hrs"
              value={w_hrs}
              onChange={whrs}
              
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
              value={ot_hrs}
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
