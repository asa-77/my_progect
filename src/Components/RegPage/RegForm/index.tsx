import React, { FC, useState } from "react";
import TextInput from "../../Common/Form/TextInput";
import style from "./RegForm.module.scss";

const RegForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const passwordInputHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div
      className={`${style.reg_form_wrapper} ${
        name ? style.hasName : style.notHasName
      }`}>
      <h3>Reg Form</h3>
      <TextInput placeholder="Login" handler={setLogin} />
      <TextInput placeholder="Name" handler={setName} />
      <input
        type="password"
        className={style.reg_form_input}
        onChange={passwordInputHandler}
        placeholder="Password"
      />
      <button
        type="button"
        className={style.reg_form_btn}
        onClick={() => console.log({ login, password, name })}>
        registration
      </button>
    </div>
  );
};

export default RegForm;
