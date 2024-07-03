// Import the necessary modules
import * as WebBrowser from "expo-web-browser";
import React, { createContext, useEffect, useState } from "react";
import * as GoogleAuth from "expo-auth-session/providers/google";

// handle the redirect URL
WebBrowser.maybeCompleteAuthSession();

// Create a context for managing authentication state
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Define the user and error state
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [callback, setCallback] = useState(null);

  const [request, response, promptAsync] = GoogleAuth.useAuthRequest({
    androidClientId:
      "441413522005-0etkplj323rgf3q7raffj6fiacsqn9u4.apps.googleusercontent.com",
    iosClientId:
      "441413522005-12tf4p4ob4ppo3lpafbij4mnkhau3p6p.apps.googleusercontent.com",
    clientId:
      "441413522005-0etkplj323rgf3q7raffj6fiacsqn9u4.apps.googleusercontent.com",
  });

  useEffect(() => {
    // if authentication is successful, get the user data
    if (response?.type === "success") {
      getUserInfo(response.authentication.accessToken);
    }
    // if authentication is dismissed, set an error
    if (response?.type === "dismiss") {
      setError("Failed to authenticate with Google");
    }
  }, [response]);

  // function to fetch user data from Google API
  const getUserInfo = async (token) => {
    //absent token
    if (!token) return;
    //present token
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      // set the user state after parsing the response
      setUser(user);
    } catch (error) {
      console.error(
        "Failed to fetch user data from Google API:",
        response.status,
        response.statusText
      );
      setError("Failed to fetch user data from Google API");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, setUser, setError, promptAsync, setCallback }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
