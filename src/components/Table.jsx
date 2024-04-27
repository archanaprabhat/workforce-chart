import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Search from "./Search";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Department",
    dataIndex: "department",
  },
  {
    title: "Salary",
    dataIndex: "Salary",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phonenumber",
  },
];

function TableComponent({ inputSearch }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://harimetaz.pythonanywhere.com/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredEmployees = employees.filter((employee) =>
 Object.values(employee).some(value =>
    String(value).toLowerCase().includes(inputSearch.toLowerCase())
 )
);

  return (
    <div className="w-full">
      <Table
        className='w-[95%] mx-auto border-2  rounded-lg '
        columns={columns}
        dataSource={filteredEmployees}
        pagination={true}
      />
    </div>
  );
}

export default TableComponent;
