import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/AuthProvider";
import { existUsername, updateUser } from "../Firebase/Firebase";

function ChooseUserName() {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");

  function handleUserLoggedIn(user) {
    navigate("/dashboard");
  }

  function handleUserNotRegistered(user) {
    setCurrentUser(user);
    setCurrentState(3);
  }

  function handleUserNotLoggedIn() {
    navigate("/");
  }

  function handleInputUsername(e) {
    setUsername(e.target.value);
  }

  async function handleContinue() {
    if (username !== "") {
      const exists = await existUsername(username);
      if (exists) {
        setCurrentState(5);
      } else {
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
      }
    }
  }

  if (currentState === 3 || currentState === 5) {
    return (
      <>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre de usuario</p>
        {currentState === 5 ? (
          <p>El nombre de usuario ya existe, elige otro</p>
        ) : (
          ""
        )}
        <div>
          <input type="text" onChange={handleInputUsername} />
        </div>

        <div>
          <button onClick={handleContinue}>Continuue</button>
        </div>
      </>
    );
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    ></AuthProvider>
  );
}

export default ChooseUserName;
