import React, { useState } from "react";
import "../Leaderboard.css";

const Leaderboard = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const studentsData = {
    Frontend: [
      {
        id: 1,
        name: "Kathy Som",
        profilePic: `${process.env.PUBLIC_URL}/student1.jpg`,
        grades: [85, 95, 90],
      },
      {
        id: 2,
        name: "Max Smith",
        profilePic: `${process.env.PUBLIC_URL}/student2.jpg`,
        grades: [90, 85, 88],
      },
      {
        id: 3,
        name: "Felix Johnson",
        profilePic: `${process.env.PUBLIC_URL}/student3.jpg`,
        grades: [85, 90, 88],
      },
      {
        id: 4,
        name: "Emily Brown",
        profilePic: `${process.env.PUBLIC_URL}/student4.jpg`,
        grades: [80, 90, 85],
      },
      {
        id: 5,
        name: "Sarah Davis",
        profilePic: `${process.env.PUBLIC_URL}/student5.jpg`,
        grades: [75, 85, 80],
      },
    ],
    Backend: [
      {
        id: 1,
        name: "Michael Johnson",
        profilePic: `${process.env.PUBLIC_URL}/student6.jpg`,
        grades: [85, 88, 98],
      },
      {
        id: 2,
        name: "Nate Martinez",
        profilePic: `${process.env.PUBLIC_URL}/student7.jpg`,
        grades: [90, 85, 89],
      },
      {
        id: 3,
        name: "David Brown",
        profilePic: `${process.env.PUBLIC_URL}/student8.jpg`,
        grades: [85, 90, 84],
      },
      {
        id: 4,
        name: "Sophia Taylor",
        profilePic: `${process.env.PUBLIC_URL}/student9.jpg`,
        grades: [70, 85, 88],
      },
      {
        id: 5,
        name: "Noah Garcia",
        profilePic: `${process.env.PUBLIC_URL}/student10.jpg`,
        grades: [85, 50, 88],
      },
    ],
    ProductDesign: [
      {
        id: 1,
        name: "Ebu Thompson",
        profilePic: `${process.env.PUBLIC_URL}/student11.jpg`,
        grades: [82, 88, 90],
      },
      {
        id: 2,
        name: "James White",
        profilePic: `${process.env.PUBLIC_URL}/student12.jpg`,
        grades: [90, 85, 83],
      },
      {
        id: 3,
        name: "Ava Rodriguez",
        profilePic: `${process.env.PUBLIC_URL}/student13.jpg`,
        grades: [85, 89, 83],
      },
      {
        id: 4,
        name: "William Lee",
        profilePic: `${process.env.PUBLIC_URL}/student14.jpg`,
        grades: [80, 83, 78],
      },
      {
        id: 5,
        name: "Sophia Miller",
        profilePic: `${process.env.PUBLIC_URL}/student15.jpg`,
        grades: [80, 82, 75],
      },
    ],
    Web3: [
      {
        id: 1,
        name: "Sophia Wilson",
        profilePic: `${process.env.PUBLIC_URL}/student16.jpg`,
        grades: [82, 88, 90],
      },
      {
        id: 2,
        name: "Ethan Anderson",
        profilePic: `${process.env.PUBLIC_URL}/student17.jpg`,
        grades: [90, 85, 70],
      },
      {
        id: 3,
        name: "Mia Martinez",
        profilePic: `${process.env.PUBLIC_URL}/student18.jpg`,
        grades: [85, 70, 88],
      },
      {
        id: 4,
        name: "Isabella Johnson",
        profilePic: `${process.env.PUBLIC_URL}/student19.jpg`,
        grades: [90, 60, 88],
      },
      {
        id: 5,
        name: "Lucas Garcia",
        profilePic: `${process.env.PUBLIC_URL}/student20.jpg`,
        grades: [85, 40, 88],
      },
    ],
  };

  const handlePathClick = (path) => {
    setSelectedPath(path);
  };

  return (
    <div className="leaderboard-container">
      <h2>Learnable Leaderboard</h2>
      <div className="path-buttons">
        <button onClick={() => handlePathClick("Frontend")}>Frontend</button>
        <button onClick={() => handlePathClick("Backend")}>Backend</button>
        <button onClick={() => handlePathClick("ProductDesign")}>
          Product Design
        </button>
        <button onClick={() => handlePathClick("Web3")}>Web 3</button>
      </div>
      {selectedPath && (
        <div className="path-details">
          <h3>{selectedPath} </h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                {/* <th>Profile Picture</th> */}
                <th>Task 1</th>
                <th>Task 2</th>
                <th>Task 3</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
              {studentsData[selectedPath].map((student) => (
                <tr key={student.id}>
                  <td className="picture">
                    <img
                      className="profile-pic"
                      src={student.profilePic}
                      alt={student.name}
                    />
                    <p className="name">{student.name}</p>
                  </td>
                  {/* Add content for additional table cell here */}
                  <td>{student.grades[0]}</td>
                  <td>{student.grades[1]}</td>
                  <td>{student.grades[2]}</td>
                  <td>
                    {student.grades.reduce((acc, grade) => acc + grade, 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
