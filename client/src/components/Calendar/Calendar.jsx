import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css"

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="calendarDiv">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      
    </div>
  );
};

export default Calendar;
