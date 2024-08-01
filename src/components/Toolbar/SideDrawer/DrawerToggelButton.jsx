import React from "react";
import './DrawerToggelButton.css';

const DrawerToggelButton = props => (
    <button className="toggel-button" onClick={props.click}>
        <div className="toggel_button_line"/>
        <div className="toggel_button_line"/>
        <div className="toggel_button_line"/>
    </button>
);

export default DrawerToggelButton;