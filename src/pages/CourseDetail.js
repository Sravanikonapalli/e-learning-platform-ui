import React, { useEffect ,useRef} from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/courseDetails.css";
import { FaArrowRotateLeft } from "react-icons/fa6";

const courses = [
  {
    id: 1,
    title: "React Basics",
    description:
      "Learn the fundamentals of React, including components, state, and props. This course covers the basics of React, including JSX, components, and state. You'll learn how to build reusable UI components and manage state changes in your application.",
    video: "https://www.youtube.com/embed/Y6aYx_KKM7A?enablejsapi=1",
    duration: "9min 30sec",
    topics: ["JSX", "Components", "State", "Props", "Event Handling"],
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description:
      "Master JavaScript basics, including ES6, DOM manipulation, and functions. This course covers the fundamentals of JavaScript, including variables, data types, functions, and object-oriented programming. You'll learn how to work with the Document Object Model (DOM) and manipulate web page elements.",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk?enablejsapi=1",
    duration: "49min",
    topics: ["Variables", "Functions", "ES6", "DOM", "Objects"],
  },
  {
    id: 3,
    title: "CSS & Flexbox",
    description:
      "Explore modern CSS techniques, including Flexbox and responsive design. This course covers the basics of CSS, including selectors, properties, and values. You'll learn how to use Flexbox to create responsive layouts and how to work with CSS preprocessors like Sass.",
    video: "https://www.youtube.com/embed/fYq5PXgSsbE?enablejsapi=1",
    duration: "15min",
    topics: ["Selectors", "Flexbox", "Box Model", "Media Queries", "Positioning"],
  },
  {
    id: 4,
    title: "React Hooks",
    description:
      "Dive into the world of React Hooks, including useState, useEffect, and useContext. This course covers the basics of React Hooks, including how to use the useState hook to manage state and the useEffect hook to handle side effects.",
    video: "https://www.youtube.com/embed/LlvBzyy-558?enablejsapi=1",
    duration: "1h 27m",
    topics: ["useState", "useEffect", "useContext", "Custom Hooks"],
  },
  {
    id: 5,
    title: "Node.js Basics",
    description:
      "Learn the fundamentals of Node.js, including modules, callbacks, and async/await. This course covers the basics of Node.js, including how to work with modules, callbacks, and async/await.",
    video: "https://www.youtube.com/embed/TlB_eWDSMt4?enablejsapi=1",
    duration: "1h 18m",
    topics: ["Modules", "File System", "Callbacks", "Events", "Async/Await"],
  },
  {
    id: 6,
    title: "Express.js Fundamentals",
    description:
      "Master the basics of Express.js, including routing, middleware, and template engines. This course covers the basics of Express.js, including how to create routes, work with middleware, and use template engines.",
    video: "https://www.youtube.com/embed/dyMCr2lD5k0?enablejsapi=1",
    duration: "15m",
    topics: ["Routing", "Middleware", "Request/Response", "Template Engines"],
  },
  {
    id: 7,
    title: "MongoDB Basics",
    description:
      "Learn the fundamentals of MongoDB, including data modeling, CRUD operations, and querying. This course covers the basics of MongoDB, including how to create documents, perform CRUD operations, and query data.",
    video: "https://www.youtube.com/embed/lBBtq3Oawqw?enablejsapi=1",
    duration: "2h 16m",
    topics: ["Documents", "CRUD", "Collections", "Querying", "Indexes"],
  },
  {
    id: 8,
    title: "TypeScript Fundamentals",
    description:
      "Discover the benefits of TypeScript, including type safety, interfaces, and classes. This course covers the basics of TypeScript, including how to create types, interfaces, and classes.",
    video: "https://www.youtube.com/embed/cDeTUYkaEkg?enablejsapi=1",
    duration: "31m",
    topics: ["Types", "Interfaces", "Classes", "Generics", "Enums"],
  },
  {
    id: 9,
    title: "Web Security Essentials",
    description:
      "Learn the basics of web security, including authentication, authorization, and common web vulnerabilities. This course covers the basics of web security, including how to protect against common web vulnerabilities.",
    video: "https://www.youtube.com/embed/vInCm7Xz0sI?enablejsapi=1",
    duration: "1h",
    topics: ["Authentication", "Authorization", "XSS", "CSRF", "HTTPS"],
  },
  {
    id: 10,
    title: "Git and Version Control",
    description:
      "Master the basics of Git, including repositories, branches, and merging. This course covers the basics of Git, including how to create repositories, work with branches, and merge changes.",
    video: "https://www.youtube.com/embed/Yc8sCSeMhi4?enablejsapi=1",
    duration: "8m",
    topics: ["Init", "Commit", "Branching", "Merging", "GitHub"],
  },
  {
    id: 11,
    title: "Responsive Web Design",
    description:
      "Learn how to create responsive web applications using media queries, flexbox, and CSS grid. This course covers the basics of responsive web design, including how to use media queries, flexbox, and CSS grid.",
    video: "https://www.youtube.com/embed/x4u1yp3Msao?enablejsapi=1",
    duration: "23m",
    topics: ["Media Queries", "Flexbox", "Grid", "Mobile First", "Viewport"],
  }
];

const CourseDetail = () => {
  const { id } = useParams(); // Get course ID from the URL
  const playerContainerRef = useRef(null); // Ref to embed YouTube player

  // Find course object based on the ID from route params
  const course = courses.find((course) => course.id === parseInt(id));

  useEffect(() => {
    if (!course) return;

    // Load YouTube IFrame API if not already loaded
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer(); 
      } else {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api"; // YouTube API script
        document.body.appendChild(tag);
        window.onYouTubeIframeAPIReady = initializePlayer; 
      }
    };

    let interval;

    const initializePlayer = () => {
      if (playerContainerRef.current) {
        // Helper to extract video ID from various YouTube URL formats
        const extractVideoId = (url) => {
          const parsedUrl = new URL(url);
          if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.has("v")) {
            return parsedUrl.searchParams.get("v");
          }
          if (parsedUrl.hostname.includes("youtu.be")) {
            return parsedUrl.pathname.slice(1);
          }
          if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.pathname.includes("/embed/")) {
            return parsedUrl.pathname.split("/embed/")[1];
          }
          return null;
        };

        const videoId = extractVideoId(course.video); // Get actual video ID

        // Create YouTube player instance
        new window.YT.Player(playerContainerRef.current, {
          height: "390",
          width: "640",
          videoId: videoId,
          events: {
            // Handle player state changes
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                const duration = event.target.getDuration();
                // Poll current video time every 5s and calculate % progress
                interval = setInterval(() => {
                  const currentTime = event.target.getCurrentTime();
                  const progress = (currentTime / duration) * 100;
                  // Send progress to parent (can be used in Dashboard)
                  window.postMessage(
                    {
                      course: course.title,
                      progress,
                    },
                    "*"
                  );
                  if (progress >= 100) clearInterval(interval); // Stop when done
                }, 5000);
              }

              if (event.data === window.YT.PlayerState.ENDED && interval) {
                clearInterval(interval); 
              }
            },
          },
        });
      }
    };

    loadYouTubeAPI(); 

    return () => {
      if (interval) clearInterval(interval); 
    };
  }, [course]);

  if (!course) return <h2>Course not found!</h2>;

  return (
    <div className="course-detail">
      <div className="top-bar">
        <Link to="/courses" className="back-btn">
          <FaArrowRotateLeft size={20} /> Back to Courses
        </Link>
      </div>

      <h2>{course.title}</h2>

      <div className="video-wrapper">
        <div ref={playerContainerRef} id="player" className="course-video" />
      </div>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <p>{course.description}</p>

      <div className="topics">
        <h3>Key Topics Covered:</h3>
        <ul>
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default CourseDetail;

