import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Current_month.css";
import axios from "axios";

function Current_month() {
  const { id } = useParams();
  const [Emp, setEmp] = useState([]);

  let user = async () => {
    await axios.get(`http://localhost:5001/users/edit/${id}`).then((res) => {
      setEmp(res.data);
    });
  };

  useEffect(() => {
    user();
  }, []);

  // test

  // const submit = () => {
  //   let val = document.querySelector("#test");
  //   console.log(val.value);
  // };

  return (
    // <div></div>
    <>
      <div className="container">
        <div className="curhead">
          <div className="prebtn">
            <Link to={`/view/previous_month/${Emp.code}`}>
              <button className="curbtn blue">Previous Month</button>
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
                <th>Date</th>
                <th>Worked Hours</th>
                <th>Amount</th>
                <th>OT</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <input type="date" id="test" />
                <button onClick={submit}>Submit</button> */}
              </tr>
            </tbody>
          </table>
        </div>
        <footer>
          <button className="curbtn green">Completed</button>
        </footer>
      </div>
    </>
  );
}

export default Current_month;
