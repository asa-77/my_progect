import React, { FC, useState } from "react";
import TextInput from "../../Common/Form/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const passwordInputHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className={`${style.auth_form_wrapper}`}>
      <h3>Auth Form</h3>
      <TextInput placeholder="Login" handler={setLogin} />
      <input
        type="password"
        className={style.auth_form_input}
        onChange={passwordInputHandler}
        placeholder="Password"
      />
      <button
        type="button"
        className={style.auth_form_btn}
        onClick={() => console.log({ login, password })}>
        Login
      </button>
    </div>
  );
};

export default AuthForm;
