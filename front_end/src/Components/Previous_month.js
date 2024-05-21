import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Current_month.css";
import axios from "axios";

function Previous_month() {
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

  return (
    // <div></div>
    <>
      <div className="container">
        <div className="curhead">
          <div className="prebtn">
            <Link to={`/view/current_month/${Emp.code}`}>
              <button className="curbtn blue">Current Month</button>
            </Link>
            <Link to="/view/current_month/add_salary">
              <button className="curbtn green">Add</button>
            </Link>
          </div>
          <div className="curheading">
            {/* <div className="curmonth">
              <h3>Previous Month</h3>
            </div> */}
            {/* <div className="curemp"> */}
            <h3>{Emp.code}</h3>
            <h3>{Emp.name}</h3>
            <h3>{Emp.mobile}</h3>
            {/* </div> */}
          </div>
          <div className="curtotal">
            <h3>Total : Rs.10,000</h3>
            <h3>No.Of Leaves : 5</h3>
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
          </table>
        </div>
        <footer>
          <button className="btn green">Paid</button>
        </footer>
      </div>
    </>
  );
}

export default Previous_month;
