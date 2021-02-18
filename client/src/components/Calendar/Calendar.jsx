import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setDate(date);
    console.log(date);
  }, []);

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      minDate={new Date()}
      filterDate={(date) => date.getDay() !== 0}
    />
  );
};

export default Calendar;
