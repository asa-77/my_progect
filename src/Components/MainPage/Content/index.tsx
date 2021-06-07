/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, FC, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Content: FC = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const scroller = () => {
    if (window.scrollY > 100) {
      history.push("/auth");
    }
  };

  const effect = () => {
    document.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  };

  useEffect(effect, [scroller]);

  return (
    <div style={{ margin: "auto", height: "1000px" }}>
      <h1>VALUE {value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        CLICK
      </button>
    </div>
  );
};

export default Content;
