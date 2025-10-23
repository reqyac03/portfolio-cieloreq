import React from "react";
export default function Navbar({ setActiveSection }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-shadow bg-black z-50">
      <div className="container">
        <a
          className="navbar-brand fw-bold neon-text"
          onClick={() => setActiveSection("about")}
          style={{ cursor: "pointer" }}
        >
          Cielo Reque Y
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <a
                className="nav-link neon-text"
                onClick={() => setActiveSection("about")}
                style={{ cursor: "pointer" }}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link neon-text"
                onClick={() => setActiveSection("projects")}
                style={{ cursor: "pointer" }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link neon-text"
                onClick={() => setActiveSection("ask-ai")}
                style={{ cursor: "pointer" }}
              >
                Ask AI
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link neon-text"
                onClick={() => setActiveSection("contact")}
                style={{ cursor: "pointer" }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}