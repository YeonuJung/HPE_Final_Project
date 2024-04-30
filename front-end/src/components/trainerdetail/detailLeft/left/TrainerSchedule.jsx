import React from "react";
import "./TrainerSchedule.scss";
const TrainerSchedule = ({ data }) => {
  return (
    <div id="intro_page_contents_wrap" className="trainer_schedule">
      <h1>레슨 스케줄</h1>
      <ul id="wrap_container">
        {!!data.weekday && (
          <li className="trainerScheduleList">
            <div className="trainerScheduleList__dayOfWeek">평일</div>
            <div className="trainerScheduleList__time">
              {data.weekday_start} ~ {data.weekday_end}
            </div>
          </li>
        )}
        {!!data.saturday && (
          <li className="trainerScheduleList">
            <div className="trainerScheduleList__dayOfWeek">토요일</div>
            <div className="trainerScheduleList__time">
              {data.saturday_start} ~ {data.saturday_end}
            </div>
          </li>
        )}
        {!!data.sunday && (
          <li className="trainerScheduleList">
            <div className="trainerScheduleList__dayOfWeek">일요일</div>
            <div className="trainerScheduleList__time">
              {data.sunday_start} ~ {data.sunday_end}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TrainerSchedule;
