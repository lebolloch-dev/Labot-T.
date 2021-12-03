import React, { useEffect, useState } from "react";
import CardEvent from "../components/event/CardEvent";
import { eventTableau } from "../event-tableau";

const Events = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    setEvent(eventTableau);
  }, [event]);

  return (
    <main className="event">
      <div className="title-groupe">
        <h1 className="title-page">EVENTS</h1>
      </div>

      <ul className="wall-event">
        {event.map((event, key) => {
          return <CardEvent event={event} key={event.id} />;
        })}
      </ul>
    </main>
  );
};

export default Events;
