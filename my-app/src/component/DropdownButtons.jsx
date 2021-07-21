import React from 'react'
import {DropdownButton, Dropdown}from 'react-bootstrap';
//import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownButtons = () => {
    const journalArray= [
        {jornada : 'Mañana'},
        {Jornadatarde:'Tarde'},
        {Jornadacompleta: 'Completa'} ];

   /* let journalMap = journalArray.filter((journal) =>journal === actualFilter).map((item, key) => {
        const {
          name, price, images,
        } = item;
                            
        )*/

        const mañana = (item) => {journalArray.map((item, key) => (
            item.jornada
          ))
           
        }


 
          
    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Jornada">
                <Dropdown.ItemText>Jornada</Dropdown.ItemText>
                <Dropdown.Item onClick = {()=> mañana()} value = 'Mañana' as="button">Mañana</Dropdown.Item>
                <Dropdown.Item as="button">Tarde</Dropdown.Item>
                <Dropdown.Item as="button">Completa</Dropdown.Item>
            </DropdownButton>
            
        </div>
    )
}

export default DropdownButtons
