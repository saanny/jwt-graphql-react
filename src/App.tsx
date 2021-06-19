import React, { useState, useEffect } from "react";
import { setAccessToken } from "./accessToken";
import { Routes } from "./Routes";
interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    }).then(async (response) => {
      const { accessToken } = await response.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  return <Routes />;
};
