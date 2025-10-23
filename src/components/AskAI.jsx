import React, { useState } from "react";

/**
 * Simple AI Q&A widget.
 * - By default uses a local heuristic answer for demo.
 * - To wire up real AI, set USE_API=true and add your endpoint & key.
 */

const USE_API = true; // flip to true when you have an API ready

export default function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("gpt-4o-mini"); // label only

  async function fetchAIResponse(prompt) {
    if (!USE_API) {
      // Demo heuristic: craft helpful answers based on known domains
      const lower = prompt.toLowerCase();
      if (lower.includes("wsl") || lower.includes("permissions")) {
        return "Check file ownership with `ls -la`, then align user/group with `chown`. For WSL2, verify mount options in /etc/wsl.conf and run `wsl --shutdown` before restarting.";
      }
      if (lower.includes("tailwind") || lower.includes("bootstrap")) {
        return "Use Tailwind for layout and spacing, Bootstrap for ready-made components. Avoid deep overrides; keep utility-first layers and component layers separate.";
      }
      if (lower.includes("email") || lower.includes("professional")) {
        return "Use a clear subject, one goal per email, bullets for steps, and a specific ask with a timeline. Proofread and trim.";
      }
      return "Try breaking the problem into reproducible steps, capture screenshots, and document the fix. Then generalize it into a reusable checklist.";
    } else {
      // Example wiring (replace with your endpoint/key). Keep it simple for class demo.
      const endpoint = "/api/ask"; // or your proxy server endpoint
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // set in .env
      const body = {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      return data?.choices?.[0]?.message?.content || "No response received.";
    }
  }

  async function handleAsk(e) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    try {
      const response = await fetchAIResponse(question);
      setAnswer(response);
    } catch (err) {
      setAnswer("There was an issue reaching the AI service. Please try again or use the demo response.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ask-ai" className="py-5">
      <div className="container">
        <h2 className="fw-bold">Ask AI</h2>
        <p className="text-slate-300">
          Curious about my approach? 
        </p>
        <p className="text-slate-300">
          Ask the AI a question about troubleshooting, web dev, or documentation.
          It will answer you!
        </p>

        <form onSubmit={handleAsk} className="mt-3">
          <div className="row g-3">
            <div className="col-12 col-lg-8">
              <input
                type="text"
                className="form-control"
                placeholder="e.g., How do I fix a WSL2 permissions issue?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="col-6 col-lg-2 d-grid">
              <button className="btn btn-brand" disabled={loading}>
                {loading ? "Thinking..." : "Ask"}
              </button>
            </div>
            <div className="col-6 col-lg-2">
              <select
                aria-label="Model"
                className="form-select"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="gpt-4o-mini">gpt-4o-mini</option>
                <option value="claude-haiku">claude-haiku</option>
                <option value="llama-3.1-8b">llama-3.1-8b</option>
              </select>
            </div>
          </div>
        </form>

        <div className="mt-4">
          <div className="p-4 rounded-3 border border-slate-700" style={{ backgroundColor: "rgba(15,23,42,0.6)" }}>
            <h6 className="fw-semibold mb-2">Answer</h6>
            <p className="mb-0 text-slate-200" style={{ whiteSpace: "pre-wrap" }}>
              {answer || "Your answer will appear here."}
            </p>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Thank you for using the attached AI service.
          </p>
        </div>
      </div>
    </section>
  );
}