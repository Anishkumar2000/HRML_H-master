import axios from 'axios';
import "./sal_add_edit.css";
import React, { useEffect , useState} from 'react';
import { useParams } from "react-router-dom";

function Sal_edit() {

    const { id } = useParams();
    const { code } = useParams();
  const [userdata , setuserdata] = useState([]); // backend data
  const [Emp , setEmp] = useState([]); // backend data
  const [w_hrs,setw_hrs] = useState(0);
  const [ot_hrs,setot_hrs] = useState(0);
  const [w_amt,setw_amt] = useState(0);
  const [ot_amt,setot_amt] = useState(0);
  const [total,settotal] = useState(0);



// Get Salary Detail

const getsal = async()=>{

    await axios.get(`http://localhost:5001/sal/edit/view/${id}`).then((res) => {
    setuserdata(res.data);
      });
};
  // Employee Details

  let one = async () => {
    await axios.get(`http://localhost:5001/users/edit/${code}`).then((res) => {
      setEmp(res.data);      
    });
  };
  
useEffect(()=>{
  getsal();
  one();
},[]);

useEffect(()=>{
  setw_hrs(userdata.w_hrs);
  setw_amt(userdata.w_amt);
  setot_hrs(userdata.ot_hrs);
  setot_amt(userdata.ot_amt);
  settotal(userdata.total);
},[userdata]);

useEffect(()=>{
  setw_amt(w_hrs*Number(Emp.salary));
  settotal(w_amt+ot_amt);
},[w_hrs]);

useEffect(()=>{
  setot_amt(ot_hrs*(Number(Emp.salary)*1.5));
},[ot_hrs]);


useEffect(()=>{
  settotal(w_amt+ot_amt);
},[w_amt,ot_amt]);

const whrs = (e)=>{
   setw_hrs(Number(e.target.value));
}
const othrs = (e) =>{
   setot_hrs(Number(e.target.value));
}

const done = async ()=>{
  console.log("update");
  let data = {
    w_hrs:w_hrs,
    w_amt:w_amt,
    ot_hrs:ot_hrs,
    ot_amt:ot_amt,
    total:total
  }
  // console.log(data);
  await axios.patch(`http://localhost:5001/sal/edit/${id}`,data).then((res)=>{
    console.log(res.data);
  })
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
            <input type="text" value={userdata.date} id="date" readOnly />
          </div>
          <div className="box">
            <label htmlFor="w_hrs">Worked Hours</label>
            <input
              type="text"
              id="w_hrs"
              onChange={whrs}
              defaultValue={userdata.w_hrs}
              placeholder="Enter Worked Hours"
            />
          </div>
          <div className="box">
            <label htmlFor="wor_amt">Amount</label>
            <input type="text" id="wor_amt" value={w_amt} readOnly/>
          </div>
          <div className="box">
            <label htmlFor="ot">OT</label>
            <input
              type="text"
              id="ot"
              onChange={othrs}
              defaultValue={userdata.ot_hrs}
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
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sal_edit;
