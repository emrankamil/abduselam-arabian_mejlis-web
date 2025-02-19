"use client";

import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// Define the shape of the context
interface AuthContextType {
  token: string | null;
  setToken: (newToken: string | null) => void;
}

// Create the context with an initial value
const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {}, // Default to a no-op function
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  // Function to set the authentication token
  const setToken = (newToken: string | null) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return AuthContext.Provider({ value: contextValue, children });
  //   (
  //     <MyAuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  //   );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
