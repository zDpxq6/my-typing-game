import { useState } from "react";

export const Watch = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 500);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2em",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Watch;
