import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import SignupPage from "./pages/Signup/SiginupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<SignupPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
