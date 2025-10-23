import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-slate-300">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <small>© {new Date().getFullYear()} Cielo Reque Y. All rights reserved.</small>
        <div className="d-flex gap-3">
          <a className="link-light" href="#about">About
          </a>
          <a className="link-light" href="#project">Projects
          </a>
          <a className="link-light" 
          onClick={() => setActiveSection("ask-ai")}
          style={{ cursor: "pointer" }}> Ask AI
          </a>
          <a className="link-light" href="#contact">Contact
          </a>
        </div>
      </div>
    </footer>
  );
}