import { useState, useEffect } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./context.js";

const STORAGE_KEY = "kk-lang";
const DEFAULT_LANG = "en";

function getInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "id" ? saved : DEFAULT_LANG;
  } catch {
    // localStorage might be unavailable (e.g. privacy mode) — fall back to default
    return DEFAULT_LANG;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore write errors
    }
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "id" : "en"));

  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
