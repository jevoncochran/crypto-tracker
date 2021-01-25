import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid black",
        marginTop: "4%",
        padding: "2% 0",
      }}
    >
      <h1>My Links</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a
          href="https://github.com/jevoncochran"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/jevoncochran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:jevon.cochran@gmail.com">Email</a>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
};

export default Links;
