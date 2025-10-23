import React from "react";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-black">
      <div className="container">
        <h2 className="fw-bold mb-5 neon-text text-center">Projects</h2>

        <div className="row g-4">
          {projects.map((p, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="card project-card h-100 text-light">
                <div className="card-body">
                  <h5 className="card-title neon-text">{p.title}</h5>
                  <p className="card-text text-pink-200">{p.blurb}</p>

                  <div className="d-flex flex-wrap gap-2 my-3">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="badge"
                        style={{
                          backgroundColor: "rgba(255,47,208,0.15)",
                          border: "1px solid rgba(255,47,208,0.4)",
                          color: "#ff2fd0",
                          textShadow: "0 0 6px #ff2fd0",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer bg-transparent border-top border-pink-500">
                  <a
                    className="btn btn-sm btn-brand"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-5 p-3 rounded-3 text-center"
          style={{
            backgroundColor: "rgba(20,20,20,0.6)",
            border: "1px solid rgba(255,47,208,0.3)",
            color: "#ff6be0",
            textShadow: "0 0 6px #ff2fd0",
          }}
        >
          <strong>Note:</strong> This section blends Tailwind utilities with
          Bootstrap’s grid, but styled with neon glow for a cyberpunk feel.
        </div>
      </div>
    </section>
  );
}