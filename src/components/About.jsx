import React from "react";
import me from "../assets/me.jpg";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <img
    src={me}
    alt="Cielo Reque Y"
    className="img-fluid rounded-3 shadow-lg mb-4"
    style={{ maxWidth: "250px" }}
  />

            <h2 className="fw-bold">About me</h2>
            <p className="mt-3 text-slate-300">
              I am an Information Technology student at Kean University, 
              pursuing my Bachelor of Science degree with an expected graduation in 
              May 2026. With a strong foundation in technical support across macOS, 
              Windows, and Linux environments, I bring both academic knowledge and 
              real-world experience to every project I take on.

            </p>
            <p className="text-slate-300">
              My professional background includes supporting clients as an IT 
              Technical Assistant, where I optimized home and small business networks, 
              streamlined Apple ecosystem setups, and developed troubleshooting 
              documentation that reduced resolution times. As a Technical Support 
              Intern at 1HourRepair.com Store, I provided hands-on support 
              for over 300 devices, authored student-facing technical guides, and 
              implemented configuration protocols that improved efficiency across 
              the team.

I am passionate about solving problems through technology, whether it’s configuring 
devices, writing clear documentation, or ensuring seamless user experiences. 
Bilingual in English and Spanish, I thrive in diverse environments and pride
 myself on clear communication, adaptability, and a customer-first mindset.


            </p>
          </div>

          <div className="col-12 col-lg-5">
            <div className="p-4 rounded-3 border border-slate-700" style={{ backgroundColor: "rgba(15,23,42,0.6)" }}>
              <h5 className="fw-semibold">Core skills</h5>
              <ul className="mt-3">
                <li>Technical writing & documentation</li>
                <li>Bilingual in English and Spanish</li>
                <li>React, Tailwind, Bootstrap, Foundation</li>
                <li>Device Configuration & Troubleshooting</li>
                <li>Technical Support Expertise</li>
                <li>Network Setup & Support</li>
              </ul>
              <h5 className="fw-semibold mt-4">Values</h5>
              <ul className="mt-3">
                <li>Reliability</li>
                <li>Clarity</li>
                <li>Efficiency</li>
                <li>User-Centerd Mindset</li>
                <li>Adaptability</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
