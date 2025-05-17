import React, { useState } from "react";
import "./Events.css";

// Import images
import codeMantraImage from "../PIC/Events/2022-2023/code_mantra.jpg";
import gitImage from "../PIC/Events/2022-2023/Git.jpg";
import techTriviaImage from "../PIC/Events/2023-2024/Tech_Trivia.jpg";
import logicMasterImage from "../PIC/Events/2024-2025/Logic_Master.jpg";
import logoDesigningImage from "../PIC/Events/2024-2025/Logo_Designing.jpg";
import techTalkImage from "../PIC/Events/2024-2025/Tech_Talk.jpg";

// Import PDFs
import codeMantraPDF from "../Documents/Events/2022-2023/code_mantra.pdf";
import gitPDF from "../Documents/Events/2022-2023/Git.pdf";
import techTriviaPDF from "../Documents/Events/2023-2024/Tech_Trivia.pdf";
import logicMasterPDF from "../Documents/Events/2024-2025/Logic_Master.pdf";
import logoDesigningPDF from "../Documents/Events/2024-2025/Logo_Designing.pdf";
import techTalkPDF from "../Documents/Events/2024-2025/Tech_Talk.pdf";

const Events = () => {
  // Event data for each year
  const eventsData = {
    "2022-2023": [
      {
        title: "Code Mantra",
        img: codeMantraImage,
        report: codeMantraPDF,
      },
      {
        title: "GitHub Workshop",
        img: gitImage,
        report: gitPDF,
      },
    ],
    "2023-2024": [
      {
        title: "Tech Trivia",
        img: techTriviaImage,
        report: techTriviaPDF,
      },
    ],
    "2024-2025": [
      {
        title: "Logic Master",
        img: logicMasterImage,
        report: logicMasterPDF,
      },
      {
        title: "Logo Designing",
        img: logoDesigningImage,
        report: logoDesigningPDF,
      },
      {
        title: "Tech Talk",
        img: techTalkImage,
        report: techTalkPDF,
      },
    ],
  };

  // State to manage the selected year
  const [selectedYear, setSelectedYear] = useState("2024-2025");

  return (
    <div className="events-page">
      <h1 className="events-title">Events</h1>

      {/* Year selection buttons */}
      <div className="year-buttons">
        {Object.keys(eventsData).map((year) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Events for the selected year */}
      <div className="events-container">
        {eventsData[selectedYear].map((event, index) => (
          <div key={index} className="event-card">
            <img
              src={event.img}
              alt={event.title}
              className="event-image"
              onClick={() => window.open(event.report, "_blank")}
            />
            <div
              className="event-title"
              onClick={() => window.open(event.report, "_blank")}
            >
              {event.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
