import "./App.css";
import { Provider } from "./Provider";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import theme from "./temaConfig";
import Snackbars from "./Snackbar/Snackbars";
import Login from "./Inicio/Login";
import Dashboard from "./Inicio/Dashboard";
import ChooseUserName from "./Inicio/ChooseUserName";
import DashboardProfileView from "./Inicio/DashboardProfileView";
import SignOut from "./Inicio/SignOut";

function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={theme}>
          <div>
            <div
              style={{
                // backgroundImage: `url(${background})`,
                // "linear-gradient(green, white)"
                fontFamily: "Alumni Sans Pinstripe",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                position: "fixed",
                height: "100vh",
                width: "100vw",
                zIndex: -1,
                backgroundSize: "cover",
                objectFit: "scale-down",
              }}
            ></div>
            <CssBaseline />
            <Snackbars />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/dashboard/profile"
                  element={<DashboardProfileView />}
                />
                <Route path="/signout" element={<SignOut />} />
                <Route path="/chooseusername" element={<ChooseUserName />} />
                <Route path="*" element={<p>Path not resolved</p>} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
