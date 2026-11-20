import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(() => {
    // Lê o que o script inline já aplicou no <html>
    const aplicado = document.documentElement.getAttribute("data-tema");
    if (aplicado) return aplicado;

    // Fallback (caso o script não tenha rodado por algum motivo)
    const salvo = localStorage.getItem("tema");
    if (salvo) return salvo;

    const prefereEscuro = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefereEscuro ? "escuro" : "claro";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  function alternarTema() {
    setTema((atual) => (atual === "claro" ? "escuro" : "claro"));
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme precisa estar dentro de ThemeProvider");
  }
  return ctx;
}