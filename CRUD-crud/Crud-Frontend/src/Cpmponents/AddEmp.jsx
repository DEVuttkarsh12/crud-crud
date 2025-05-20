import React, { useState } from "react";
import "./AddEmp.css";

const AddEmp = () => {
  const [formValue, setFormValue] = useState({
    EmployeeName:"",
    EmployeeId:"",
    EmployeeDesignation:"",
    EmployeeEmail:"",
    EmployeeAddress:"",
    EmployeeEducation:"",
    EmployeeSalary:"",
    EmployeeJoiningDate:"",
    EmployeePerformance:"normal",

  });

  const hadleChange = (e) => {
    const {name , value} = e.target;
    // console.log("name", name);
    // console.log("value", value);
    setFormValue({...formValue, [name]:value})

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('form-value', formValue )
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h2 className="h1h1h1">Add-Employee</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Name :
                    </label>
                    <input
                      type="text"
                      placeholder="Employee-Name"
                      className="form-control"
                      name="EmployeeName"
                      onChange={hadleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Id :
                    </label>
                    <input
                      type="text"
                      placeholder="Employee-Id"
                      className="form-control"
                      name="EmpoyeeId"
                      onChange={hadleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Designation :
                    </label>
                    <input
                      type="text"
                      placeholder="Employee-Designation"
                      className="form-control"
                      onChange={hadleChange}
                      name="EmployeeDesignation"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Email :
                    </label>
                    <input
                      type="text"
                      placeholder="Employee-Email"
                      className="form-control"
                      name="EmployeeEmail"
                      onChange={hadleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Address :
                    </label>
                    <input
                      type="text"
                      name="EmployeeAddress"
                      placeholder="Employee-Address"
                      className="form-control"
                      onChange={hadleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Education :
                    </label>
                    <input
                      type="text"
                      name="EmployeeEducation"
                      placeholder="Employee-Education"
                      className="form-control"
                      onChange={hadleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Salary :
                    </label>
                    <input
                      type="text"
                      name="EmployeeSalary"
                      placeholder="Employee-Salary"
                      className="form-control"
                      onChange={hadleChange}
                    />
                  </div>{" "}
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Joining Date :
                    </label>
                    <input
                      type="date"
                      name="EmployeeJoiningDate"
                      placeholder="Employee-Joining Date"
                      className="form-control"
                      onChange={hadleChange}
                    />
                  </div>{" "}
                  <div className="col-3">
                    <label htmlFor="" className="enoeno">
                      Employee-Performance :
                    </label>
                    <select
                      name="EmployeePerformance"
                      id=""
                      className="form-input12"
                      
                      onChange={hadleChange}
                      
                    >
                      <option value="normal">NORMAL</option>
                      <option value="average">AVERAGE</option>

                      <option value="excellent">EXCELLENT</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-121">
                      <button className="btn btn-primary" type="submt">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
