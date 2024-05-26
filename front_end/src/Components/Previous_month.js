import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Current_month.css";
import axios from "axios";

function Current_month() {
  const { id } = useParams();
  const [Emp, setEmp] = useState([]);
  const [Empsal, setEmpsal] = useState([]);
  // const [total, settotal] = useState(0);

  let user = async () => {
    await axios.get(`http://localhost:5001/users/edit/${id}`).then((res) => {
      setEmp(res.data);
    });
  };
   
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
  let sal = async ()=>{
    let mon = new Date().getMonth();
    let month = Months[mon-1];
    await axios.get(`http://localhost:5001/sal/${id}/${month}`).then((res)=>{
      setEmpsal(res.data);
    });
  }
  useEffect(() => {
    user();
    sal(); 
    
  }, []);
  // Delete Salary 
 
 async function del(id){
  
      await axios.delete(`http://localhost:5001/sal/${id}`).then((res)=>{
        console.log(res.data);
        sal();
      })
  }
  
  

  return (
    // <div></div>
    <>
      <div className="container">
        <div className="curhead">
          <div className="prebtn">
            <Link to={`/view/current_month/${Emp.code}`}>
              <button className="curbtn blue">Current Month</button>
            </Link>
            <Link to={`/view/current_month/sal_add/${Emp.code}`}>
              <button className="curbtn green">Add</button>
            </Link>
          </div>
          <div className="curheading">
            {/* <div className="curmonth">
              <h3>Current Month</h3>
            </div> */}
            {/* <div className="curemp"> */}
            <h3>{Emp.code}</h3>
            <h3>{Emp.name} </h3>
            <h3>{Emp.mobile}</h3>
            {/* </div> */}
          </div>
          <div className="curtotal">
            
            <h3>Total : Rs.5000</h3>
            <h3>No.Of Leaves : 2</h3>
          </div>
        </div>
        <div className="curtable">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Worked Hours</th>
                <th>Amount</th>
                <th>OT</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                
                Empsal.map((sal,index)=>{
                  let id = sal._id; 
                  return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{sal.date}</td>
                        <td>{sal.w_hrs}</td>
                        <td>{sal.w_amt}</td>
                        <td>{sal.ot_hrs}</td>
                        <td>{sal.ot_amt}</td>
                        <td >{sal.total}</td>
                        <td><Link to={`/sal/edit/${sal.code}/${id}`}><button className="btn green">Edit</button></Link></td>
                        <td><button className="btn red" onClick={()=>{del(id)}}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <footer>
        </footer>
      </div>
    </>
  );
}

export default Current_month;
