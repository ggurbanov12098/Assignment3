import React from "react";
import { Routes, Route } from "react-router";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movie from "./components/Movie";
import DetailedMovInfo from "./components/DetailedMovInfo";

export default function App(){
    return(
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element = <Home /> />
                <Route path="/movies" element = <Movie /> />
                <Route path="/" element = <test /> />
                <Route path="/movies/:movieID" element = <DetailedMovInfo /> />
            </Routes>
        </div>
    );
}