import React from "react";

function Inicio({ handleOnClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#23242a",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "380px",
          height: "420px",
          backgroundColor: "#1c1c1c",
          borderRadius: "8px",
          border: "1px solid #45f3ff",
          padding: "50px 40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            color: "#45f3ff",
            fontWeight: "500",
            textAlign: "center",
            letterSpacing: "0.1em",
          }}
        >
          Iniciar Sesión
        </h2>
        <div
          className="inputBox"
          style={{ position: "relative", width: "300px", marginTop: "35px" }}
        >
          <input
            type="text"
            required="required"
            style={{
              position: "relative",
              width: "100%",
              padding: "20px 10px 10px",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#23242a",
              fontSize: "1em",
              letterSpacing: "0.05em",
              zIndex: "10",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "0",
              padding: "20px 10px 10px",
              // fontSize: "1em",
              // color: "#8f8f8f",
              pointerEvents: "none",
              letterSpacing: "0.05em",
              transition: "0.5s",
            }}
          >
            Username
          </span>
          <i></i>
        </div>
        <div
          className="inputBox"
          style={{ position: "relative", width: "300px", marginTop: "35px" }}
        >
          <input
            type="password"
            required="required"
            style={{
              position: "relative",
              width: "100%",
              padding: "20px 10px 10px",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#23242a",
              fontSize: "1em",
              letterSpacing: "0.05em",
              zIndex: "10",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "0",
              padding: "20px 10px 10px",
              // fontSize: "1em",
              // color: "#8f8f8f",
              pointerEvents: "none",
              letterSpacing: "0.05em",
              transition: "0.5s",
            }}
          >
            Password
          </span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Olvidé mi contraseña</a>
          <a href="#">Crear cuenta</a>
        </div>
        <button>Login</button>
        <button onClick={handleOnClick}>Iniciar sesión con Google</button>
      </div>
    </div>
  );
}

export default Inicio;
