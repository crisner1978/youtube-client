import { AuthProvider } from "context/authContext";
import useDarkTheme, { ThemeProvider } from "hooks/useDarkTheme";
import { useLocationChange } from "hooks/useLocationChange";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SnackbarProvider from "react-simple-snackbar";
import { ErrorFallback, MobileNavbar, Navbar, Sidebar } from ".";
import { ErrorBoundary } from "react-error-boundary";
// import { gapi } from "gapi-script";

export const queryClient = new QueryClient({
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

// gapi.load("client:auth2", () => {
//   gapi.auth2.getAuthInstance({
//     client_id:
//       "73535695397-05ihej7t5p58j85rmsovfvodaa30dkeo.apps.googleusercontent.com",
//     plugin_name: "youtube_clone",
//   });
// });

export default function AppProviders({ children }) {
  const [theme] = useDarkTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleCloseSidebar = () => setSidebarOpen(false);

  useLocationChange(handleCloseSidebar);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SnackbarProvider>
            <ThemeProvider theme={theme}>
              <div className="dark:bg-background bg-white dark:text-white min-h-screen">
                <Navbar toggleSidebar={toggleSidebar} />
                <MobileNavbar />
                <div className="lg:ml-60">
                  <Sidebar isSidebarOpen={isSidebarOpen} />
                  <div className="h-screen overflow-scroll scrollbar-hide pt-16">
                    {children}
                  </div>
                </div>
              </div>
              <ReactQueryDevtools />
            </ThemeProvider>
          </SnackbarProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
