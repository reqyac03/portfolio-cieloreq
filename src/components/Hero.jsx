import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero-gradient d-flex align-items-center text-center text-lg-start">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left column: headline + buttons */}
          <div className="col-12 col-lg-7">
            <h1 className="display-4 fw-bold neon-text animate__animated animate__fadeInUp">
              Turning real‑world problems into <br /> 
              <span className="d-inline-block">bright solutions.</span>
            </h1>
            <p className="lead mt-3 text-pink-200 animate__animated animate__fadeInUp animate__delay-1s">
              I', a Senior IT student at Kean University and owner of a phone repair shop in Union, NJ.  
              I build, fix, and document systems so people can actually use them.
            </p>
            <div className="d-flex gap-3 mt-4 animate__animated animate__fadeInUp animate__delay-2s">
              <a href="#projects" className="btn btn-brand btn-lg">
                View Projects
              </a>
              <a href="#ask-ai" className="btn btn-outline-light btn-lg neon-text">
                Ask AI
              </a>
            </div>
          </div>

          {/* Right column: focus areas card */}
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div
              className="p-4 rounded-3 project-card animate__animated animate__fadeInRight"
              style={{ backgroundColor: "rgba(10,10,15,0.7)" }}
            >
              <p className="mb-3 text-sm neon-text fw-bold">Focus Areas</p>
              <ul className="list-unstyled text-pink-200">
                <li className="mb-2">• Linux permissions, WSL2 quirks, and directory access</li>
                <li className="mb-2">• Web dev with Tailwind, Bootstrap, Foundation</li>
                <li className="mb-2">• Technical writing, user‑friendly guides, APA research</li>
                <li className="mb-2">• Hands‑on business ops and customer experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}