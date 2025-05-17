import React, { useState } from "react";
import "./Our_Team.css";

// Import Faculty images
import Faculty2022_1 from "../PIC/Our_Team/2022-2023/Faculty/1.png";
import Faculty2022_2 from "../PIC/Our_Team/2022-2023/Faculty/2.png";
import Faculty2022_3 from "../PIC/Our_Team/2022-2023/Faculty/3.png";

import Faculty2023_1 from "../PIC/Our_Team/2023-2024/Faculty/1.png";
import Faculty2023_2 from "../PIC/Our_Team/2023-2024/Faculty/2.png";
import Faculty2023_3 from "../PIC/Our_Team/2023-2024/Faculty/3.png";

import Faculty2024_1 from "../PIC/Our_Team/2024-2025/Faculty/1.png";
import Faculty2024_2 from "../PIC/Our_Team/2024-2025/Faculty/2.png";
import Faculty2024_3 from "../PIC/Our_Team/2024-2025/Faculty/3.png";

// Import Student images
import Student2022_1 from "../PIC/Our_Team/2022-2023/Students/1.png";
import Student2022_2 from "../PIC/Our_Team/2022-2023/Students/2.png";
import Student2022_3 from "../PIC/Our_Team/2022-2023/Students/3.png";
import Student2022_4 from "../PIC/Our_Team/2022-2023/Students/4.png";
import Student2022_5 from "../PIC/Our_Team/2022-2023/Students/5.png";

import Student2023_1 from "../PIC/Our_Team/2023-2024/Students/1.png";
import Student2023_2 from "../PIC/Our_Team/2023-2024/Students/2.png";
import Student2023_3 from "../PIC/Our_Team/2023-2024/Students/3.png";
import Student2023_4 from "../PIC/Our_Team/2023-2024/Students/4.png";
import Student2023_5 from "../PIC/Our_Team/2023-2024/Students/5.png";

import Student2024_1 from "../PIC/Our_Team/2024-2025/Students/1.png";
import Student2024_2 from "../PIC/Our_Team/2024-2025/Students/2.png";
import Student2024_3 from "../PIC/Our_Team/2024-2025/Students/3.png";
import Student2024_4 from "../PIC/Our_Team/2024-2025/Students/4.png";
import Student2024_5 from "../PIC/Our_Team/2024-2025/Students/5.png";

const OurTeam = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  // Data for team members
  const teamData = {
    "2024-2025": {
      faculty: [
        { img: Faculty2024_1, name: "SRI DADI RATNAKAR", role: "INSTITUTE CHAIRMAN" },
        { img: Faculty2024_2, name: "DR. K . SUJATHA", role: "FACULTY SPONSOR"},
        { img: Faculty2024_3, name: "MRS. S. VENKATA LAKSHMI", role: "FACULTY COORDINATOR" },
      ],
      students: [
        { img: Student2024_1, name: "CHINNI VIJAY KUMAR", role: "ACM CHAIR"},
        { img: Student2024_2, name: "K. PADMA SRI", role: "ACM VICE CHAIR" },
        { img: Student2024_3, name: "G. VARSHA VENKATA KUMARI", role: "ACM SECRETARY" },
        { img: Student2024_4, name: "CHANDANI", role: "ACM TREASURER"},
        { img: Student2024_5, name: "AKSHYA", role: "ACM EVENT HANDLING" },
      ],
    },
    "2023-2024": {
      faculty: [
        { img: Faculty2023_1, name: "SRI DADI RATNAKAR", role: "INSTITUTE CHAIRMAN" },
        { img: Faculty2023_2, name: "DR. K . SUJATHA", role: "FACULTY SPONSOR"},
        { img: Faculty2023_3, name: "MRS. S. VENKATA LAKSHMI", role: "FACULTY COORDINATOR" },
      ],
      students: [
        { img: Student2023_1, name: "CHINNI VIJAY KUMAR", role: "ACM CHAIR" },
        { img: Student2023_2, name: "K. PADMA SRI", role: "ACM VICE CHAIR" },
        { img: Student2023_3, name: "G. VARSHA VENKATA KUMARI", role: "ACM SECRETARY" },
        { img: Student2023_4, name: "CHANDANI", role: "ACM TREASURER" },
        { img: Student2023_5, name: "AKSHYA", role: "ACM EVENT HANDLING" },
      ],
    },
    "2022-2023": {
      faculty: [
        { img: Faculty2022_1, name: "SRI DADI RATNAKAR", role: "INSTITUTE CHAIRMAN" },
        { img: Faculty2022_2, name: "DR. K . SUJATHA", role: "FACULTY SPONSOR" },
        { img: Faculty2022_3, name: "MRS. S. VENKATA LAKSHMI", role: "FACULTY COORDINATOR" },
      ],
      students: [
        { img: Student2022_1, name: "BILWA SHANKARAN KARRI", role: "ACM CHAIR" },
        { img: Student2022_2, name: "UDAY KUMAR CHINNI", role: "ACM VICE CHAIR" },
        { img: Student2022_3, name: "SREYA POTHALA", role: "ACM SECRETARY" },
        { img: Student2022_4, name: "P.S.S HARSHA", role: "ACM MEMBERSHIP COORDINATOR" },
        { img: Student2022_5, name: "SAI MAHESH CHUKKA", role: "ACM TREASURER" },
      ],
    },
    
    
  };

  return (
    <div className="our-team">
      <h1 className="team-heading">Team Members</h1>
      <div className="year-buttons">
        {Object.keys(teamData).map((year) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <h2 className="section-heading">Institute Coordinators</h2>
      <div className="faculty-section">
        {teamData[selectedYear].faculty.map((faculty, index) => (
          <div key={index} className="member-card">
            <img src={faculty.img} alt={`Faculty ${index + 1}`} />
            <p className="member-name">{faculty.name}</p>
            <p className="member-role">{faculty.role}</p>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Executive Committee Members</h2>
      <div className="student-section">
        {teamData[selectedYear].students.map((student, index) => (
          <div key={index} className="member-card">
            <img src={student.img} alt={`Student ${index + 1}`} />
            <p className="member-name">{student.name}</p>
            <p className="member-role">{student.role}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default OurTeam;
