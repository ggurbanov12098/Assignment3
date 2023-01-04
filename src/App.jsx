import React from "react";
import { Routes, Route } from "react-router";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movie from "./components/Movie";
import DetailedMovInfo from "./components/DetailedMovInfo";
import ContactMe from "./components/ContactMe";



export default function App(){
    return(
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element = <Home /> />
                
                <Route path="/movies" element = <Movie /> />
                <Route path="/movies/:movieID" element = <DetailedMovInfo /> />

                <Route path="/contactme" element = <ContactMe /> />
            </Routes>
        </div>
    );
}