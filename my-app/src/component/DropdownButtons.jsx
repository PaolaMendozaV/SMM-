import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
//import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

const DropdownButtons = () => {
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Jornada">
        <Dropdown.Item as="button">Diurno</Dropdown.Item>
        <Dropdown.Item as="button">Vespertino</Dropdown.Item>
        <Dropdown.Item as="button">Completa</Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-item-button" title="N° Persona">
        <Dropdown.Item as="button">1</Dropdown.Item>
        <Dropdown.Item as="button">2</Dropdown.Item>
        <Dropdown.Item as="button">3</Dropdown.Item>
        <Dropdown.Item as="button">4</Dropdown.Item>
        <Dropdown.Item as="button">5</Dropdown.Item>
        <Dropdown.Item as="button">6</Dropdown.Item>
        <Dropdown.Item as="button">7</Dropdown.Item>
        <Dropdown.Item as="button">8</Dropdown.Item>
        <Dropdown.Item as="button">9</Dropdown.Item>
        <Dropdown.Item as="button">10</Dropdown.Item>
        <Dropdown.Item as="button">11</Dropdown.Item>
        <Dropdown.Item as="button">12</Dropdown.Item>
        <Dropdown.Item as="button">13</Dropdown.Item>
        <Dropdown.Item as="button">14</Dropdown.Item>
        <Dropdown.Item as="button">15</Dropdown.Item>
    </DropdownButton>
     </div>
  );
};

export default DropdownButtons;
