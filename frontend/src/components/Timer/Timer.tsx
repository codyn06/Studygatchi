import { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";

const FOCUS_DURATION = 25 * 60;
// const SHORT_DURATION = 5 * 60;
// const LONG_DURATION = 15 * 60;

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION);
  const [isActive, setActive] = useState(false);
  // const [mode, setMode] = useState("focus");
  const endTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const displayMinutes = String(minutes).padStart(2, "0");
    const displaySeconds = String(remainingSeconds).padStart(2, "0");

    return `${displayMinutes}:${displaySeconds}`;
  };

  useEffect(() => {
    if (!isActive) {
      endTimeRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      return;
    }

    if (endTimeRef.current === null) {
      endTimeRef.current = Date.now() + timeLeft * 1000;
    }

    let lastSecond = -1;

    const updateTimer = () => {
      if (endTimeRef.current === null) return;

      const remaining = Math.max(
        0,
        Math.round((endTimeRef.current - Date.now()) / 1000),
      );

      if (remaining !== lastSecond) {
        lastSecond = remaining;

        if (remaining <= 0) {
          setTimeLeft(0);
          setActive(false);
          endTimeRef.current = null;
          return;
        } else {
          setTimeLeft(remaining);
        }
      }

      rafRef.current = requestAnimationFrame(updateTimer);
    };

    rafRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isActive]);

  const toggleTimer = () => {
    setActive(!isActive);
  };

  return (
    <Card>
      <div id="timer-display">{formatTime(timeLeft)}</div>
      <div id="controls">
        <button id="activity-button" onClick={toggleTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </Card>
  );
};

export default Timer;
