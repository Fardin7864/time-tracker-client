import { useState, useEffect } from "react";
import WorkedClock from "../workedHours/WorkedClock";

const Stopwatch = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };
          newTime.seconds++;

          if (newTime.seconds === 60) {
            newTime.seconds = 0;
            newTime.minutes++;

            if (newTime.minutes === 60) {
              newTime.minutes = 0;
              newTime.hours++;

              if (newTime.hours === 24) {
                newTime.hours = 0;
                newTime.days++;
              }
            }
          }

          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsActive(false);
  };

  // console.log(time)

  return (
    <>

      <div className="stat place-items-center">
        <div className="stat-title text-2xl font-semibold">
          Total Hours Worked
        </div>
        <div className=" text-lg">
          <WorkedClock time={time} />
        </div>
      </div>
      {/* Working clock */}
      <div className="stat place-items-center">
        <div className="stat-title text-2xl font-semibold">
          Start Work Now
        </div>
        <div className=" text-lg">
          <WorkedClock time={time} />
        </div>
        <div className=" flex gap-3 my-5">
        <button onClick={handleStartStop} className=" btn btn-xs btn-primary">{isActive ? "Brack" : "Start"}</button>
        <button onClick={handleReset} className=" btn btn-xs btn-primary">Submit</button>
      </div>
      </div>
    </>
  );
};

export default Stopwatch;
