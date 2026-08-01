import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div>Welcome to Home page</div>
      <ul>
        <li>
          <a href="http://localhost:5173/e">Edit</a>
        </li>
        <li>
          <a href="http://localhost:5173/d">Delete</a>
        </li>
        <li>
          <a href="http://localhost:5173/c">Create</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
