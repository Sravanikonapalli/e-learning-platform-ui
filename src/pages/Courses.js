import React from "react";
import { Link } from "react-router-dom";
import "../styles/courses.css";

const courses = [
  { id: 1, 
    title: "React Basics",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s", 
    description: "Learn the fundamentals of React, including components, state, and props." },
  { id: 2, 
    title: "JavaScript Fundamentals", 
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLLqiTiFvI6IHt5F3WY4Stw5fw__PoWgirw&s",
    description: "Master JavaScript basics, including ES6, DOM manipulation, and functions." },
  { id: 3, 
    title: "CSS & Flexbox", 
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5de_guEif2jP5wIa2VUAQBvikDGIOFKr05g&s",
    description: "Explore modern CSS techniques, including Flexbox and responsive design." },
    {
      id: 4,
      title: "React Hooks",
      image:"https://miro.medium.com/v2/resize:fit:1400/1*-Ijet6kVJqGgul6adezDLQ.png",
      description:
        "Dive into the world of React Hooks, including useState, useEffect, and useContext.",
    },
    {
      id: 5,
      title: "Node.js Basics",
      image:"https://solguruz.com/wp-content/uploads/2022/12/Node.Js-Development-Company.png",
      description:
        "Learn the fundamentals of Node.js, including modules, callbacks, and async/await.",
    },
    {
      id: 6,
      title: "Express.js Fundamentals",
      image:"https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
      description:
        "Master the basics of Express.js, including routing, middleware, and template engines.",
    },
    {
      id: 7,
      title: "MongoDB Basics",
      image:"https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png",
      description:
        "Learn the fundamentals of MongoDB, including data modeling, CRUD operations, and querying.",
    },
    {
      id: 8,
      title: "TypeScript Fundamentals",
      image:"https://blog.theodo.com/_astro/ts_logo.BstCNrTU_1Dbxpr.webp",
      description:
        "Discover the benefits of TypeScript, including type safety, interfaces, and classes.",
    },
    {
      id: 9,
      title: "Web Security Essentials",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BkqAwVIoFJPMcFwyAk75cXiuv9AbXydkxQ&s",
      description:
        "Learn the basics of web security, including authentication, authorization, and common web vulnerabilities.",
    },
    {
      id: 10,
      title: "Git and Version Control",
      image:"https://brandlogos.net/wp-content/uploads/2021/11/git-logo.png",
      description:
        "Master the basics of Git, including repositories, branches, and merging.",
    },
    {
      id: 11,
      title: "Responsive Web Design",
      image:"https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png",
      description:
        "Learn how to create responsive web applications using media queries, flexbox, and CSS grid.",
    },
      
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
              <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="title">{course.title}</h3>
            <p className="description">{course.description}</p>
            <Link to={`/courses/${course.id}`} className="details-btn">View Course</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
