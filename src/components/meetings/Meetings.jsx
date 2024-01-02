import { observer } from "mobx-react";
import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import meeting from "../../store/meeting";
import './Meeting.css'

const Meeting = ({ meeting }) => (
  <div>
    <p>Date & Time: {new Date(meeting.dateTime).toLocaleString()}</p>
    <p>Client Name: {meeting.clientName}</p>
    <p>Client Phone: {meeting.clientPhone}</p>
    <p>Client Email: {meeting.clientEmail}</p>
    <hr />
  </div>
);

const Meetings = observer(() => {
  const [meetings, setMeetings] = useState([]);

  // Assuming meeting.data is an array of meetings
  useEffect(() => {
    setMeetings(meeting.data);
  }, []);


  const tileContent = ({ date }) => {
    const meetingsOnDate = meetings.filter((meeting) => {
      const meetingDate = new Date(meeting.dateTime);
      return meetingDate.toDateString() === date.toDateString();
    });
  
    return (
      <div>
        {meetingsOnDate.map((meeting, index) => (
          <Meeting key={index} meeting={meeting} />
        ))}
      </div>
    );
  };
  return (
    <>
      <div>
        <h3>Meeting Calendar</h3>
        <Calendar tileContent={tileContent} />
      </div>
    </>
  );
});

export default Meetings;
