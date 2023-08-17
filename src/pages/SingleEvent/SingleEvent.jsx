import React from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../../components";
import "./style.css";

const SingleEvent = () => {
  const { id } = useParams();
  return (
    <>
      <div className="page">Event {id}</div>
    </>
  );
};

export default SingleEvent;
