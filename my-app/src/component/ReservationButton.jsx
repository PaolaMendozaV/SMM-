import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReservationButton = () => {
  return (
    <div>
      <Button className="btnreservation" variant="primary">Reserva</Button>{" "}
    </div>
  );
};

export default ReservationButton;
