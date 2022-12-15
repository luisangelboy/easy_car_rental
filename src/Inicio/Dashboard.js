import React, { useState } from "react";
import AuthProvider from "../components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import DashboardWrapper from "../components/DashboardWrapper";

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [currentState, setCurrentState] = useState(0);

  function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setCurrentState(2);
  }

  function handleUserNotRegistered(user) {
    navigate("/login");
  }

  function handleUserNotLoggedIn() {
    navigate("/login");
  }

  if (currentState === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
      >
        Loading...
      </AuthProvider>
    );
  }

  return (
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;
