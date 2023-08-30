import React from "react";

const Test = () => {
  const handleClick = () => {
    const button = document.querySelector(".btn");
    const styles = button.style.cssText;

    console.log(styles);
  };
  return (
    <div>
      <button className=".btn" onClick={handleClick}>
        Hello world
      </button>
    </div>
  );
};

export default Test;
