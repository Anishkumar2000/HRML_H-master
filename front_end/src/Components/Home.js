import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [Employees, setEmployees] = useState([]);

  // Delete All Employees

  const getallemployees = async () => {
    await axios.get("http://localhost:5001/users").then((res) => {
      setEmployees(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    getallemployees();
  }, []);

  // Delete a Employee
  const delEmp = async (id) => {
    const code = id;
    await axios
      .post("http://localhost:5001/users/delete", { code })
      .then((res) => {
        console.log(res.data);
        getallemployees();
      });
  };
  return (
    <div className="container">
      <div className="head">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2021/11/26/HR-Logo-design-vector-Graphics-20767349-1-580x386.jpg"
          alt="Logo"
        ></img>
        <input type="search" placeholder="Search" />
        <Link to="/add">
          <button className="btn green">Add</button>
        </Link>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Emp Code</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((emp, index) => {
              return (
                <tr key={emp.code}>
                  <td>{index + 1}</td>
                  <td>{emp.code}</td>
                  <td>{emp.name}</td>
                  <td>{emp.mobile}</td>
                  <td>{emp.department}</td>
                  <td>{emp.role}</td>
                  <td>
                    <Link to={`/view/current_month/${emp.code}`}>
                      <button className="btn blue">View</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/edit/${emp.code}`}>
                      <button className="btn green">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn red"
                      onClick={() => delEmp(emp.code)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <footer>{/* <h3>This is footer</h3> */}</footer>
    </div>
  );
}

export default Home;
