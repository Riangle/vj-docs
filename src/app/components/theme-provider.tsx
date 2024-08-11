"use client";
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "cherry-styled-components/src/lib";

interface ThemeContextProps {
  setTheme: any;
}

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: null,
});

function CherryThemeProvider({
  children,
  theme,
  themeDark,
}: {
  children: React.ReactNode;
  theme: Theme;
  themeDark?: Theme;
}) {
  const [currentTheme, setTheme] = useState(theme);
  useEffect(() => {
    if (!themeDark) return setTheme(theme);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme(themeDark);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      setTheme(theme);
    }
  }, []);
  const GlobalStylesComponent = GlobalStyles(currentTheme);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ setTheme }}>
        <GlobalStylesComponent />
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
}

export { CherryThemeProvider };
