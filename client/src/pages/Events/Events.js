import React, { useState, useEffect } from "react";
import EventItem from "../../components/EventItem/EventItem";
import { getAllEvents } from "../../api";
import Pagination from "../../components/Pagination/Pagination";
import style from "./Events.module.css";

export default function Events(props) {
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countViewEvents] = useState(8);

  useEffect(() => {
    setLoading(true);
    getAllEvents().then((res) => {
      console.log("fgh", res.data.data);
      setEvents(res.data.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main>
        <h2 className={style.dashboard}>Loading...</h2>
      </main>
    );
  }

  const goRegistration = (id) => {
    props.history.push("/registration", { eventId: id });
  };

  const goView = (id) => {
    props.history.push("/participants", { eventId: id });
  };

  return (
    <main>
      <h2 className={style["dashboard-title"]}>Events</h2>

      <section className={style.dashboard}>
        {events
          ?.slice(
            (currentPage - 1) * countViewEvents,
            countViewEvents * currentPage
          )
          .map((item) => (
            <EventItem
              info={item}
              btnRegistration={goRegistration}
              btnView={goView}
              key={item.id}
            />
          ))}
      </section>
      <Pagination
        totalEvents={events?.length}
        currentPage={currentPage}
        countViewEvents={countViewEvents}
        changePage={setCurrentPage}
      ></Pagination>
    </main>
  );
}
