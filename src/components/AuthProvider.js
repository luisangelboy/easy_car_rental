import { useNavigate } from "react-router-dom";
import {
  auth,
  getUserInfo,
  registerNewUser,
  userExists,
} from "../Firebase/Firebase";
import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

export default function AuthProvider({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegistered,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          const userInfo = await getUserInfo(user.uid);
          if (userInfo.processCompleted) {
            onUserLoggedIn(userInfo);
          } else {
            onUserNotRegistered(userInfo);
          }
          //Redirigir al Dashboard

          //   navigate("/dashboard");
          //   setCurrentState(2);
        } else {
          //Redirigir a Elegir Usuario
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            username: "",
            processCompleted: false,
          });
          onUserNotRegistered(user);
          //   navigate("/chooseusername");
          //   setCurrentState(3);
        }

        // console.log(user.displayName);
      } else {
        // setCurrentState(4);
        // console.log("No hay nadie autenticado");
        onUserNotLoggedIn();
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered]);
  return <div>{children}</div>;
}
