import React, { useState } from "react";

export default function Home() {
  const [timesClicked, setTimesClicked] = useState<number>(0);

  return (
    <>
      <p>You have clicked this {timesClicked} many times</p>
      <button
        onMouseOver={() => {
          setTimesClicked(timesClicked + 1);
        }}
      >
        Click me
      </button>
    </>
  );
}
