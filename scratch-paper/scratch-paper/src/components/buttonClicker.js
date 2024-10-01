import { useState } from "react";

const ButtonClicker = (props) => {
  const [count, setCount] = useState(0);

  const onClickHandler = (event) => {
    let newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Second Example Event</h1>
      <button onClick={onClickHandler}>CLick Me!</button>
      <p>The count is: {count}</p>
      {count > 5 && <p>condition is true</p>}
    </div>
  );
};

export default ButtonClicker;
