import React from "react";
import "./add.css";
import axios from 'axios';
// import { XGrid } from "@mui/x-data-grid";

/**
 * @typedef {Object} Props
 * @property {string} slug
 * @property {import('@mui/x-data-grid').GridColDef[]} columns
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setOpen
 */

/**
 * @param {Props} props
 */

const Add = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new item
    axios.post(`/api/${props.slug}s`);
  };

  // Change Props to props here
  const { slug, columns, setOpen } = props; // Destructure props here
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                {/* Rename placeholder "avatar" with "id" */}
                <input
                  type={column.type}
                  placeholder={column.field === "avatar" ? "id" : column.field}
                />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
