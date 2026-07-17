/* ====== HELPERS ====== */
export function highlight(text) {
  if (/^\s*(const|let|return|function|while)\b/.test(text)) {
    const m = text.match(/^(\s*)(const|let|return|function|while)(.*)$/);
    if (m)
      return (
        <>
          <span className="kw">{m[2]}</span>
          {m[3]}
        </>
      );
  }
  if (/deploy\(/.test(text)) {
    const parts = text.split("deploy(");
    return (
      <>
        <span className="fn">deploy</span>({parts[1]}
      </>
    );
  }
  return text;
}
