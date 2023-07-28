import React from "react";

const SignupPage = () => {
  return (
    <div>
      <input data-testid="email-input" placeholder="이메일" />

      <input
        data-testid="password-input"
        type="password"
        placeholder="비밀번호"
      />

      <button data-testid="signup-button" type="button">
        회원가입
      </button>
    </div>
  );
};

export default SignupPage;
