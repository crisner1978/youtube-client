import useDarkTheme, { ThemeProvider } from "hooks/useDarkTheme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MobileNavbar, Navbar, Sidebar } from ".";

export default function AppProviders({ children }) {
  const [theme] = useDarkTheme();
  console.log("theme", theme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="dark:bg-background bg-white dark:text-white min-h-screen">
          <Navbar />
          <MobileNavbar />
          <Sidebar />
          <div className="lg:ml-60 pt-24">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}
