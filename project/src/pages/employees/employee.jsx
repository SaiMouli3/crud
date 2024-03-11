import React, { useState, useEffect } from "react";
import DataTable from "../../components/datatable/datatable";
import Add from "../../components/add/add.jsx";
// import { XGrid } from "@mui/x-data-grid";

const Employees = () => {
  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/webapp/api/employees/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const employeesWithId = data.map((employee) => ({ id: employee.emp_ssn, ...employee }));
        setEmployees(employeesWithId || []);
      })
      .catch((error) => console.error("Error fetching employee data:", error));
  }, []);

  const columns = [
    { field: "emp_ssn", headerName: "SSN", width: 80 },
    { field: "emp_name", headerName: "Name", width: 150, editable: true },
    { field: "address", headerName: "Address", width: 150, editable: true },
    { field: "mobile", headerName: "Phone Number", type: "number", width: 200 },
    { field: "emp_efficiency", headerName: "Efficiency", width: 150, editable: true },
  ];

  const handleAddEmployee = (newEmployee) => {
    fetch("http://127.0.0.1:8000/webapp/api/employees/create/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': document.getElementsByName('csrfmiddlewaretoken')[0].value,
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmployees([...employees, { id: data.emp_ssn, ...data }]);
        setOpen(false);
        alert("Data stored successfully in the database!");
      })
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <div className="employees">
      <div className="info">
        <h1>Employees</h1>
        <button onClick={() => setOpen(true)}>ADD NEW</button>
      </div>
      <DataTable columns={columns} rows={employees} />
      {open && <Add slug="Employee" columns={columns} setOpen={setOpen} onSubmit={handleAddEmployee} />}
    </div>
  );
};

export default Employees;
