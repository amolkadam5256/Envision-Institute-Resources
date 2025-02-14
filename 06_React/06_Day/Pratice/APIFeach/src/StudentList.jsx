import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students_mock_data.json") // Ensure the file is in the public folder
      .then((response) => response.json())
      .then((data) => setStudents(data.students))
      .catch((error) => console.error("Error loading students:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.fullName}</td>
                <td>{student.gender}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
                <td>{student.city}</td>
                <td>{student.state}</td>
                <td>{student.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
