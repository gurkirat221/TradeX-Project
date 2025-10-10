import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const url = new URL(window.location.href);
    const tokenParam = url.searchParams.get('token');
    const userIdParam = url.searchParams.get('userId');
    const usernameParam = url.searchParams.get('username');
    if (tokenParam) localStorage.setItem('authToken', tokenParam);
    if (userIdParam) localStorage.setItem('userId', userIdParam);
    if (usernameParam) localStorage.setItem('username', usernameParam);
    setReady(true);
  }, []);
  return (
    <>
      {ready && (
        <>
          <TopBar />
          <Dashboard />
        </>
      )}
    </>
  );
};

export default Home;