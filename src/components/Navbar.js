import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/navbar.css"; 
import { BsThreeDots } from "react-icons/bs"; 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    // Apply dynamic classes based on sidebar state and dark mode
    <nav className={`sidebar ${isOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
      
      <div className="top-row">
        <Link to="/"><h2>E-Learning</h2></Link> 
        
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <BsThreeDots size={30}/>
        </button>
      </div>

      <ul>
        <li><Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
        <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
      </ul>

      <div className="dark-toggle-container">
        <label className="switch">
          {/* Checkbox toggle for dark mode */}
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span> {/* Slider styling */}
        </label>
        <span>{darkMode ? "Dark" : "Light"} Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
