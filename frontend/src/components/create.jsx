import React from "react";

const Create = () => {
    return (
      <div className="home-container">
        <div className="home-card">Welcome to create page</div>
        <ul>
          <li>
            <a href="http://localhost:5173/">Home</a>
          </li>
          <li>
            <a href="http://localhost:5173/e">Edit</a>
          </li>
          <li>
            <a href="http://localhost:5173/d">Delete</a>
          </li>
        </ul>
      </div>
    );
} 

export default Create