import { auth, userExists } from "../Firebase/Firebase";
import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import Inicio from "./Inicio";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/AuthProvider";

function Login() {
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  /*
  State
  0: Inicializado
  1: Loading
  2: Login completo
  3: Login pero sin registro
  4: No hay nadie Logeado
  5: Ya existe el Username
  6: Nuevo user, click para continuar
  */
  const [currentState, setCurrentState] = useState(0);

  // useEffect(() => {
  //   setCurrentState(1);
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const isRegistered = await userExists(user.uid);
  //       if (isRegistered) {
  //         //Redirigir al Dashboard
  //         navigate("/dashboard");
  //         setCurrentState(2);
  //       } else {
  //         //Redirigir a Elegir Usuario
  //         navigate("/chooseusername");
  //         setCurrentState(3);
  //       }

  //       // console.log(user.displayName);
  //     } else {
  //       setCurrentState(4);
  //       console.log("No hay nadie autenticado");
  //     }
  //   });
  // }, [navigate]);

  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleUserLoggedIn(user) {
    navigate("/dashboard");
  }

  function handleUserNotRegistered(user) {
    navigate("/chooseusername");
  }

  function handleUserNotLoggedIn() {
    setCurrentState(4);
  }

  // if (currentState === 2) {
  //   return <div>Estás autenticado y registrado</div>;
  // }

  // if (currentState === 3) {
  //   return <div>Estás autenticado pero no registrado</div>;
  // }

  if (currentState === 4) {
    return <Inicio handleOnClick={handleOnClick} />;
  }

  if (currentState === 5) {
    return <Inicio handleOnClick={handleOnClick} />;
  }

  return (
    // <div style={{ fontSize: "50px", textAlign: "center" }}>
    //   Bienvenido a Easy Car Rental
    // </div>
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div>Loading...</div>
    </AuthProvider>
  );
}

export default Login;
