import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <li>
      <div class="event-card">
        <time class="card-time" datetime="01-05">
          <span class="month">{event.month}</span>
          <span class="date">{event.date}</span>
        </time>

        <div class="wrapper">
          <div class="card-content">
            <p class="card-subtitle">{event.subtitle}</p>

            <h3 class="card-title">{event.title}</h3>

            <p class="card-text">{event.details}</p>
          </div>

          <Link to={`event/${event.id}`}>
            <button class="btn btn-white">
              <span>View Events</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
