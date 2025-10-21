"use client";

import React from "react";

const Button = ({ classname, content, onClick, spanContent }) => {
  return (
    <button onClick={onClick} className={classname}>
      {content}
      {spanContent && <span>{spanContent}</span>}
    </button>
  );
};

export default Button;
