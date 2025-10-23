import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import AskAI from "./components/AskAI.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("about"); // default = About

  useEffect(() => {
    let percent = 0;
    const percentEl = document.getElementById("percent");
    const barEl = document.querySelector(".loading-bar");
    const preloader = document.getElementById("preloader");

    const interval = setInterval(() => {
      percent += 1;
      if (percentEl) percentEl.textContent = percent + "%";
      if (barEl) barEl.style.width = percent + "%";

      if (percent >= 100) {
        clearInterval(interval);
        if (preloader) {
          preloader.style.opacity = "0";
          setTimeout(() => (preloader.style.display = "none"), 600);
        }
      }
    }, 30);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader" className="preloader">
        <div className="text-centered">
          <h1 className="neon-text fw-bold" style={{ fontSize: "5.5rem" }}>
            Cielo Reque Yaipen
          </h1>
          <p
            id="percent"
            className="neon-text mt-3"
            style={{ fontSize: "2.5rem", letterSpacing: "2px" }}
          >
            0%
          </p>
        </div>
        <div className="loading-bar"></div>
      </div>

      {/* Navbar */}
      <Navbar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main
        className="
          pt-24   /* mobile: ~96px */
          sm:pt-28 /* small screens: ~112px */
          md:pt-32 /* medium screens: ~128px */
          lg:pt-40 /* large screens: ~160px */
        "
      >
        {activeSection === "about" && (
          <section className="mt-8 sm:mt-12">
            <About />
          </section>
        )}
        {activeSection === "projects" && (
          <section className="mt-8 sm:mt-12">
            <Projects />
          </section>
        )}
        {activeSection === "ask-ai" && (
          <section className="mt-8 sm:mt-12">
            <AskAI />
          </section>
        )}
        {activeSection === "contact" && (
          <section className="mt-8 sm:mt-12">
            <Contact />
          </section>
        )}
      </main>

      <Footer />
      <div className="cursor-glow" id="cursor"></div>
    </>
  );
}