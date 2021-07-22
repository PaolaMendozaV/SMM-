import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReservationButton = ({click}) => {
  return (
    <div>
      <Button className="btnreservation" variant="primary" onClick={click} href="/reservation">Reserva</Button>{" "}
    </div>
  );
};

export default ReservationButton;
