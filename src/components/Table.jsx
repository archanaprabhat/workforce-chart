import  { useState, useEffect } from "react";
import { Table } from "antd";
import PropTypes from 'prop-types';
import data from '../data.json';

const columns = [
 {
    title: (
      <div>
        ID
        </div>
    ),
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
 },
 {
    title: "First Name",
    dataIndex: "first_name",
    sorter: (a, b) => a.first_name.localeCompare(b.first_name),
 },
 {
    title: "Last Name",
    dataIndex: "last_name",
    sorter: (a, b) => a.last_name.localeCompare(b.last_name),
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
    sorter: (a, b) => a.Salary - b.Salary,
 },
 {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
 },
 {
    title: "Phone Number",
    dataIndex: "phonenumber",
 },
];

function TableComponent({ inputSearch }) {
 const [employees, setEmployees] = useState([]);
 const [sort, setSort] = useState({ keyToSort: "id", direction: "asc" });

 useEffect(() => {
  setEmployees(data)
   /*  fetch("https://harimetaz.pythonanywhere.com/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data:", error)); */
 }, []);

 const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some(value =>
      String(value).toLowerCase().includes(inputSearch.toLowerCase())
    )
 );

 const sortedEmployees = filteredEmployees.sort((a, b) => {
    const direction = sort.direction === "asc" ? 1 : -1;
    return a[sort.keyToSort] > b[sort.keyToSort] ? direction : -direction;
 });

 const handleHeaderClick = (key) => {
    setSort(prevSort => ({
      keyToSort: key,
      direction: prevSort.keyToSort === key ? (prevSort.direction === "asc" ? "desc" : "asc") : "asc",
    }));
 };
 

 return (
    <div className="w-full">
      <Table
        className='w-[95%] mx-auto border-2 rounded-lg '
        columns={columns}
        dataSource={sortedEmployees}
        pagination={true}
        onChange={(pagination, filters, sorter) => {
          if (sorter.columnKey && sorter.order) {
            handleHeaderClick(sorter.columnKey);
          }
        }}
      />
    </div>
 );
}

TableComponent.propTypes = {
  inputSearch: PropTypes.string.isRequired,
 };

export default TableComponent;