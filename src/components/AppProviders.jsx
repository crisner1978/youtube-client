import { AuthProvider } from "context/authContext";
import useDarkTheme, { ThemeProvider } from "hooks/useDarkTheme";
import { useLocationChange } from "hooks/useLocationChange";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SnackbarProvider from "react-simple-snackbar";
import { MobileNavbar, Navbar, Sidebar } from ".";

export default function AppProviders({ children }) {
  const [theme] = useDarkTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
          if (error.status === 404) return false;
          else if (failureCount < 2) return true;
          else return true;
        },
      },
    },
  });

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleCloseSidebar = () => setSidebarOpen(false);

  useLocationChange(handleCloseSidebar);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <div className="dark:bg-background bg-white dark:text-white min-h-screen">
              <Navbar toggleSidebar={toggleSidebar} />
              <MobileNavbar />
              <div className="lg:ml-60">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <div className="max-h-screen overflow-scroll scrollbar-hide pt-24">
                  {children}
                </div>
              </div>
            </div>
            <ReactQueryDevtools />
          </ThemeProvider>
        </SnackbarProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
