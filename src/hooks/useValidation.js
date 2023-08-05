import React, { useState, useEffect } from "react";

export default function useValidation(form) {
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
  });
  // useEffect(() => {
  //   console.log(isValid);
  // }, [isValid]);

  useEffect(() => {
    const email = form.email;
    // const emailExp =
    //   /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!email.includes("@")) {
      setIsValid({ ...isValid, isEmail: false });
    } else {
      setIsValid({ ...isValid, isEmail: true });
    }
  }, [form.email]);

  useEffect(() => {
    if (form.password.length < 8) {
      setIsValid({ ...isValid, isPassword: false });
    } else {
      setIsValid({ ...isValid, isPassword: true });
    }
  }, [form.password]);

  return { isValid };
}
