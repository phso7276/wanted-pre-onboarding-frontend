import React from "react";
import { GlobalStyle } from "styles/globalStyles";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { Todo } from "./Todo";
import { NotFound } from "./NotFound";
import { Main } from "./Main";

export default function AppRoute() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>

        <Route path="/todo" element={<Todo />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
