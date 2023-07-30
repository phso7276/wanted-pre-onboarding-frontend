import "./App.css";
import { Route, Routes } from "react-router-dom";

import SignupPage from "pages/Signup/SiginupPage";
import SigninPage from "pages/Signin/SigninPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="signin" element={<SigninPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
