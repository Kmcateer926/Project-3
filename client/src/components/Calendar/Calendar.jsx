import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  // const [tutor, setTutor] = useState("");
  // const [sessionLength, setSessionLength] = useState("");

  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
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
