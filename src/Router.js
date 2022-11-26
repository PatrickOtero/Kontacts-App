import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./Pages/LoginScreen";
import ProfileScreen from "./Pages/ProfileScreen";
//import { useLocalStorage } from "react-use";
import { ContextLoginProvider } from "./Contexts/LoginScreen";
import { ContextProfileProvider } from "./Contexts/ProfileScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import { ContextRegisterProvider } from "./Contexts/RegisterScreen";

function RouterFile() {
  return (
    <div className="Router">
      <Router>
        <ContextLoginProvider>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
          </Routes>
          <ContextRegisterProvider>
            <Routes>
              <Route path="/Register" element={<RegisterScreen />} />
            </Routes>
          </ContextRegisterProvider>
          <ContextProfileProvider>
            <Routes>
              <Route path="/Profile/:profile" element={<ProfileScreen />} />
            </Routes>
          </ContextProfileProvider>
        </ContextLoginProvider>
      </Router>
    </div>
  );
}

export default RouterFile;
