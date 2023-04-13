import React, { useState, useRef, useEffect } from "react";
import useInterval from "../../../hooks/useInterval";
import { Seconds, Send } from "../../LogIn-SingUp/SentRec.style";
const STATUS = {
  STOPPED: "STOPPED",
  STARTED: "STARTED",
};

const INITIAL_COUNT = 30; // 60 seconds

const OtpTimer = ({ passRecover, initialStatus }) => {
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);

  useEffect(() => {
    if (initialStatus) {
      setStatus(STATUS.STARTED);
    }
  }, []);
  const handleStart = (event) => {
    event.preventDefault();
    setStatus(STATUS.STARTED);
    passRecover && passRecover();
  };

  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };

  useInterval(
    () => {
      if (secondsRemaining === 0) {
        setStatus(STATUS.STOPPED);
        handleReset();
      } else if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  const twoDigits = (num) => String(num).padStart(2, "0");

  return (
    <div>
      <Send
        onClick={handleStart}
        disabled={status === STATUS.STARTED}
        className={
          status === STATUS.STARTED &&
          "!text-gray-300 !border-gray-300 !cursor-not-allowed"
        }
      >
        {" "}
        Send Again
      </Send>
      <Seconds>
        {twoDigits(Math.floor(secondsRemaining / 60))}:
        {twoDigits(secondsRemaining % 60)}
      </Seconds>
    </div>
  );
};

export default OtpTimer;
