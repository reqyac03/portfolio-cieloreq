import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // For class demo, just simulate success. Wire to your backend or a service (e.g., Formspree/Netlify) for production.
    setTimeout(() => setSent(true), 600);
  }

  return (
    <section id="contact" className="py-5 bg-black">
      <div className="container">
        <h2 className="fw-bold neon-text text-center mb-3">Contact Me</h2>
        <p className="text-pink-300 text-center mb-5">
          For collaborations, freelance work, or to share a tricky bug—reach out.  
          I'll be happy to  in contact with you ASAP!
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="row g-4 justify-content-center">
            <div className="col-12 col-md-5">
              <label className="form-label neon-text">Name</label>
              <input
                className="form-control bg-white text-black border border-pink-500"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{ boxShadow: "0 0 8px rgba(255,47,208,0.6)" }}
              />
            </div>
            <div className="col-12 col-md-5">
              <label className="form-label neon-text">Email</label>
              <input
                className="form-control bg-white text-black border border-pink-500"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{ boxShadow: "0 0 8px rgba(255,47,208,0.6)" }}
              />
            </div>
            <div className="col-12 col-md-10">
              <label className="form-label neon-text">Message</label>
              <textarea
                className="form-control bg-white text-black border border-pink-500"
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                style={{ boxShadow: "0 0 8px rgba(255,47,208,0.6)" }}
              />
            </div>
            <div className="col-12 col-md-10 d-grid d-md-block text-center">
              <button className="btn btn-brand btn-lg mt-3" type="submit">
                Send
              </button>
            </div>
          </form>
        ) : (
          <div
            className="mt-4 p-4 rounded-3 text-center"
            style={{
              backgroundColor: "rgba(20,20,20,0.7)",
              border: "1px solid rgba(255,47,208,0.4)",
              color: "#ff6be0",
              textShadow: "0 0 6px #ff2fd0",
            }}
          >
            Thanks for reaching out! I’ll get back to you shortly.
          </div>
        )}
      </div>
    </section>
  );
}