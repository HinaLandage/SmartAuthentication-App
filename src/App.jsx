import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm.jsx";
import SignUp from "./Components/SignUp.jsx";
import OtpVerify from "./Components/OtpVerify.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Profile from "./Components/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/OtpVerify" element={<OtpVerify />} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/Profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
