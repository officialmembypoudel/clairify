import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { user, setUser, error, setError, promptAsync, setCallback } =
    useContext(AuthContext);

  return { user, setUser, error, setError, promptAsync, setCallback };
};
