import "./employee.css";
import React, { useState } from "react";
import DataTable from "../../components/datatable/datatable";
import "../../data.js";
import Add from "../../components/add/add.jsx";

const columns = [
  { field: "id", headerName: "SSN", width: 80 },

  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    headerName: "Name",
    width: 150,
    editable: true,
  },

  {
    field: "Address",
    headerName: "Address",

    width: 150,
    editable: true,
  },
  {
    field: "Phone",
    headerName: "Phone Number",
    type: "number",
    description: "This are fake numbers .",
    sortable: false,
    width: 200,
    valueGetter: (params) => params.row.Phone, // Retrieve phone number from rows
  },
  {
    field: "Efficney",
    headerName: "Effciency",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    Phone: 657856789,
    status: false,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    Phone: 657856789,
    status: true,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    Phone: 6578567891,
    status: true,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    Phone: 657856789,
    status: true,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    Phone: 657856789,
    status: false,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "antony",
    Phone: 657856789,
    status: true,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    Phone: 657856789,
    status: true,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    Phone: 657856789,
    status: true,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    Phone: 657856789,
    status: false,
  },
  {
    id: 10,
    lastName: "tommy ",
    firstName: "hilfiger",
    Phone: 657856789,
    status: true,
  },
  {
    id: 11,
    lastName: "richard",
    firstName: "antony",
    Phone: 657856789,
    status: true,
  },
  {
    id: 12,
    lastName: "king",
    firstName: "charles",
    Phone: 657856789,
    status: true,
  },
  {
    id: 13,
    lastName: "celoptra II",
    firstName: "Ferrara",
    Phone: 657856789,
    status: true,
  },
  {
    id: 14,
    lastName: "celoptra",
    firstName: "I",
    Phone: 657856789,

    status: true,
  },
  {
    id: 15,
    lastName: "ram",
    firstName: "cherry",
    Phone: 657856789,
    status: true,
  },
];

const Employees = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="employees">
      <div className="info">
        <h1>Employees</h1>
        <button onClick={() => setOpen(true)}>ADD NEW</button>
      </div>
      <DataTable columns={columns} rows={rows} />
      {open && <Add slug="Employee" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Employees;
