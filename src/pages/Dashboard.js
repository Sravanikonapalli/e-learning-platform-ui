import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const userCourses = [
  { id: 1, course: "React Basics" },
  { id: 2, course: "JavaScript Fundamentals" },
  { id: 3, course: "CSS & Flexbox" },
  { id: 4, course: "React Hooks" },
  { id: 5, course: "Node.js Basics" },
  { id: 6, course: "Express.js Fundamentals" },
  { id: 7, course: "MongoDB Basics" },
  { id: 8, course: "TypeScript Fundamentals" },
  { id: 9, course: "Web Security Essentials" },
  { id: 10, course: "Git and Version Control" },
  { id: 11, course: "Responsive Web Design" },
];

const Dashboard = ({ darkMode }) => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("videoProgress")) || {};
    setProgress(savedProgress);

    const handleMessage = (event) => {
      if (event.data && event.data.course && typeof event.data.progress === "number") {
        const updatedProgress = {
          ...savedProgress,
          [event.data.course]: Math.min(Math.round(event.data.progress), 100), 
        };

        // Save updated progress in localStorage and update state
        localStorage.setItem("videoProgress", JSON.stringify(updatedProgress));
        setProgress(updatedProgress);
      }
    };
    window.addEventListener("message", handleMessage);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className={`dashboard-wrapper ${darkMode ? 'dark' : ''}`}>
      {/* Left panel with welcome message and social links */}
      <div className="left-panel">
        <h2>Welcome to E-Learning</h2>
        <p>Empowering your journey through tech learning. Explore, learn, and track your progress.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      {/* Main dashboard section displaying user progress */}
      <div className="dashboard-container">
        <h2>Your Learning Progress</h2>
        <div className="progress-list">
          {userCourses.map(({ id, course }) => (
            <div key={id} className="progress-item">
              <h3>{course}</h3>

              {/* Progress bar visual */}
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress[course] || 0}%` }}
                ></div>
              </div>
              <p>{progress[course] ? `${progress[course]}% Completed` : "Not Started"}</p>
              <Link to={`/courses/${id}`} className="start-course-btn">
                Start Course
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
