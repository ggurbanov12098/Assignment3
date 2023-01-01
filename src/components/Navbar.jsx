import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return(
        <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Movies</NavLink>
            <NavLink to="/">Contact me</NavLink>
            <NavLink to="/">About</NavLink>
            <p>salam</p>
        </nav>
    );
}