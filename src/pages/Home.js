import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const slides = [
  { image: "https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Ignite-Learning-Uncover-the-Best-E-Learning-Platforms.png", 
    text: "Learn at your own pace with top courses!" },
  { image: "https://www.actitime.com/wp-content/uploads/2021/01/monitoring-project-progress.png", 
    text: "Track your progress and improve!" },
  { image: "https://www.teachsecondary.com/images/uploads/How_To_Use_Video_In_Teaching_Lessons.jpg", 
    text: "Watch video lessons from experts!" },
];

const Home = ({darkMode}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/courses");
    }
  };

  return (
      <div className={`home-container ${darkMode ? "dark" : ""}`}>
      <img src={slides[currentSlide].image} alt="Slide" className="slide-image" />
      <p className="slide-text">{slides[currentSlide].text}</p>

      {/* Dots Indicator */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${currentSlide === index ? "active" : ""}`} />
        ))}
      </div>

      <div className="home-buttons">
        <button type="button" className="get-start-btn" onClick={handleNextSlide}>Get Started</button>
        <button type="button" className="skip-btn" onClick={() => navigate("/courses")}>Skip</button>
      </div>
    </div>
  );
};

export default Home;
