import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css'
function CalendarWishX() {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  let GetApiDate = value.getDate() + "." + parseInt(value.getMonth()+1) + "." + value.getFullYear();
  const handleChange = value => {
    setDate(value);
    setShowCalendar(false);
  };
  
  return (
    <div>
      <input type='text' value={GetApiDate} readOnly className='info_input'  placeholder='Date of birth' onFocus={() => setShowCalendar(true)}></input>
      <Calendar locale='en-EN' next2Label={false} prev2Label={false} onChange={onChange} value={value} className={showCalendar ? "" : "hide"} />
    </div>
  );
}

export default CalendarWishX;