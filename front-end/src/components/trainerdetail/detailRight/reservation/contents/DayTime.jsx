import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DayTime.scss";
import { FaRegCalendarCheck } from "react-icons/fa";

const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const DayTime = (props) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const availableTimes = [
    "이른 아침 (06 ~ 09시)",
    "아침 (09 ~ 12시)",
    "점심 이후 (12 ~ 15시)",
    "늦은 오후 (15 ~ 18시)",
    "저녁 (18 ~ 21시)",
    "늦은 밤 (21시 이후)",
    "아직 고민중이에요",
  ];

  const onDateChange = (newDate) => {
    setDate(newDate);
    props.setDate(newDate); // 상태 업데이트
    setTime("");
    props.setTime("");
  };

  const onTimeSelect = (selectedTime) => {
    setTime(selectedTime);
    props.setTime(selectedTime);
  };

  return (
    <div className="booking_page">
      <div className="booking_title">
        <FaRegCalendarCheck />
        <h3>날짜 및 시간 선택</h3>
      </div>
      <br />
      <Calendar
        onChange={onDateChange}
        value={date}
        minDate={new Date()}
        formatDay={(locale, date) => date.getDate()}
        tileContent={({ date, view }) =>
          view === "month" && isToday(date) ? (
            <p style={{ fontSize: "12px" }}>오늘</p>
          ) : null
        }
      />
      <div className="time-selection">
        {availableTimes.map((availableTime, index) => (
          <button
            key={index}
            className={`time-button ${
              time === availableTime ? "selected" : ""
            }`}
            onClick={() => onTimeSelect(availableTime)}
          >
            {availableTime}
          </button>
        ))}
      </div>
      {/* <div className="selected-time"> 
        <strong>선택한 날짜 :</strong>{" "}
        {date ? date.toLocaleDateString() : "선택되지 않음"}
        <br />
        <strong>선택한 시간 :</strong> {time || "선택되지 않음"}
      </div>*/}
    </div>
  );
};
export default DayTime;
