import  { useState, useEffect } from 'react';
function Table() {
    const [employees, setEmployees] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API
      fetch("https://harimetaz.pythonanywhere.com/employees")
        .then(response => response.json()) 
        .then(data => {
          console.log(data); 
          setEmployees(data); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []); 
  
    return (
      <div>
        <table className="table-auto w-screen border-2">
          <thead className="bg-black text-white ">
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.gender}</td>
                <td>{employee.department}</td>
                <td>{employee.Salary}</td>
                <td>{employee.email}</td>
                <td>{employee.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table;
  