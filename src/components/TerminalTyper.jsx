import { useState, useEffect } from "react";
import { highlight } from "../utils/highlight.jsx";

/**
 * Renders the hero terminal with a typewriter effect.
 * Mount this with a `key` tied to the current language so it
 * restarts cleanly whenever the code snippet changes.
 */
export default function TerminalTyper({ codeLines, title, pills }) {
  const [typedLines, setTypedLines] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let li = 0;

    function typeLine() {
      if (cancelled) return;
      if (li >= codeLines.length) {
        setTimeout(() => {
          if (!cancelled) setShowResult(true);
        }, 300);
        return;
      }
      const full = codeLines[li].text;
      let ci = 0;
      function step() {
        if (cancelled) return;
        ci++;
        setTypedLines((prev) => {
          const next = [...prev];
          next[li] = full.slice(0, ci);
          return next;
        });
        if (ci < full.length) {
          setTimeout(step, 22);
        } else {
          li++;
          setTimeout(typeLine, 160);
        }
      }
      setTypedLines((prev) => {
        const next = [...prev];
        next[li] = "";
        return next;
      });
      step();
    }

    // Defer the first tick so we never set state synchronously inside the effect body.
    const startTimer = setTimeout(typeLine, 0);

    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, [codeLines]);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot r"></span>
        <span className="dot y"></span>
        <span className="dot g"></span>
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">
        {codeLines.map((l, i) => (
          <div className={`line ${l.cls}`} key={i}>
            {highlight(typedLines[i] || "")}
          </div>
        ))}
        <div className={`terminal-result ${showResult ? "show" : ""}`}>
          {pills.map((p, i) => (
            <span className="pill" key={i}>
              ✓ {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
