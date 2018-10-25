import React from "react";
import "./WrongData.scss";

export default () => {
  const exit = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="wrongData">
      <div>Неверный ID или пароль</div>
      <span onClick={exit} className="closeWrong" href="/" />
    </div>
  );
};
