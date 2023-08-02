import "./App.css";
import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { Route, Routes } from "react-router-dom";

import SignupPage from "pages/Signup/SiginupPage";
import SigninPage from "pages/Signin/SigninPage";
import TodoPage from "pages/todo/TodoPage";
import NotFound from "components/organisms/NotFound";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>

        <Route path="/todo" element={<TodoPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
