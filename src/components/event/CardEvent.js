import React from "react";

const CardEvent = ({ event }) => {
  return (
    <li className="card-event-container" key={event.id}>
      <div className="img-container">
        <img src={event.banner} alt={"Event " + `${event.place}`} />
      </div>
      <div className="event-main">
        <h3>{event.date}</h3>
        <h3 className="second">{event.place}</h3>
        <h3 className="last">{event.lineUp}</h3>
      </div>
    </li>
  );
};

export default CardEvent;
