import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DayTime.scss";
import { FaRegCalendarCheck } from "react-icons/fa";

const DayTime = () => {
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
    setTime(""); // 날짜를 변경하면 시간 선택을 리셋합니다.
  };

  const onTimeSelect = (selectedTime) => {
    setTime(selectedTime);
  };

  return (
    <div className="booking-page">
      <div className="booking_title">
        <FaRegCalendarCheck />
        <h2>날짜 및 시간 선택</h2>
      </div>
      <Calendar
        onChange={onDateChange}
        value={date}
        minDate={new Date()} // 오늘 날짜 이전은 선택 불가
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
      {time && (
        <div className="selected-time">
          선택한 날짜: {date.toLocaleDateString()}
          <br />
          선택한 시간: {time}
        </div>
      )}
    </div>
  );
};
export default DayTime;