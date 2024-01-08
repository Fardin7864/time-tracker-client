import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [localDate, setLocalDate] = useState(new Date());

  useEffect(() => {
    // Update the local date every second
    const intervalId = setInterval(() => {
      setLocalDate(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
// console.log(localDate.toDateString())
  return (
    <div className='text-[#fff] flex flex-col'>
      <div className=' flex items-center gap-3 font-medium'>
      <p>{localDate.toLocaleTimeString([], { hour12: true })}</p>
      </div>
      <div className=' flex items-center gap-3 text-xs'>
      <p>{localDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default Clock;
