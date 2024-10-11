import React, { useEffect, useState } from 'react';
import { getParticipants } from '../../api';
import ParticipantsItem from '../../components/ParticipantsItem/ParticipantsItem';
import style from '../Events/Events.module.css';

export default function Participants (props) {
  const [visitors, setVisitors] = useState();
  const [eventName, setEventName] = useState();

  useEffect(() => {
    getParticipants(props.location.state.eventId).then(res => {
      setVisitors(res.data.eventWithVisitors.Visitors);
      setEventName(res.data.eventWithVisitors.title);
    });
  }, []);


    return (
      <main>
        <h2>"{eventName}" participants</h2>
        <section className={style.dashboard}>
          { visitors && visitors.length > 0 ? visitors.map(item => (
            <ParticipantsItem info={item} key={item.id} />
          )): <h3>No participants yet</h3>}
        </section>
      </main>
    );
  }



