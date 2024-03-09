import BigText from "ink-big-text";
import { render } from "ink";
import { keypress, KeyPressEvent } from "$cliffy/keypress/mod.ts";

import React, { useEffect, useState } from "react";
import { useApp } from "ink";

function getTimeRemainingText(timeRemaining: number): string {
  const date = new Date(timeRemaining);

  const seconds = date.getUTCSeconds() < 10
    ? `0${date.getUTCSeconds()}`
    : date.getUTCSeconds();
  const minutes = date.getUTCMinutes() < 10
    ? `0${date.getUTCMinutes()}`
    : date.getUTCMinutes();
  const hours = date.getUTCHours() < 10
    ? `0${date.getUTCHours()}`
    : date.getUTCHours();

  return `${hours}:${minutes}:${seconds}`;
}

type CountdownProps = {
  font?: Font;
};

enum Font {
  Block = "block",
  Slick = "slick",
  Tiny = "tiny",
  Grid = "grid",
  Pallet = "pallet",
  Shade = "shade",
  Simple = "simple",
  SimpleBlock = "simpleBlock",
  "3d" = "3d",
  Simple3d = "simple3d",
  Chrome = "chrome",
  Huge = "huge",
}

const Countdown = ({ font = Font.Chrome }: CountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState(60_000);

  const { exit } = useApp();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining1 = timeRemaining - 1000

      setTimeRemaining(timeRemaining1);

      if (timeRemaining1 === 0) {
        exit();
        return; // maybe not needed.
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining, setTimeRemaining]);

  useEffect(() => {
    keypress().addEventListener("keydown", (event: KeyPressEvent) => {
      if (event.key === "c" && event.ctrlKey) {
        exit();
        keypress().dispose(); // maybe not needed.
      }
    });
  }, []);

  return <BigText font={font} text={getTimeRemainingText(timeRemaining)} />;
};

export function renderCountdown() {
  render(<Countdown />);
}
