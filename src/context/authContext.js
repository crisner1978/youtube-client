import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { client } from "utils/api-client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data } = useQuery(["AuthProvider"], () =>
    client.get("/auth/me").then((res) => res.data.user)
  );
  const user = data || null;

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider component");
  }

  return context;
}
