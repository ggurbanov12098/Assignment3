import './DetailedMovInfo.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

export default function DetailedMovInfo(){
    const { movieID } = useParams();
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        let url = `http://localhost:3001/movies/${movieID}`;
        fetch(url)
        .then((res) => { return res.json() })
        .then((data) => {
            setMovie(data);
        });
      }, [movieID]);

    console.log(movieID);
    return(
        <div className="detailed-movie-card">
            <img src={movie.Poster_Link} className='movie-img' alt="movie-img" />
            <p>Title: {movie.Series_Title}</p>
            <p>Year: {movie.Released_Year}</p>
            <p>Certificate: {movie.Certificate}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Rating: {movie.IMDB_Rating}</p>
            <p>Overview: {movie.Overview}</p>
            <p>Meta Score: {movie.Meta_score}</p>
            <p>Director: {movie.Director}</p>
            <p>Star 1: {movie.Star1}</p>
            <p>Star 2: {movie.Star2}</p>
            <p>Star 3: {movie.Star3}</p>
            <p>Star 4: {movie.Star4}</p>
            <p>Votes: {movie.No_of_Votes}</p>
            <p>Gross: {movie.Gross}</p>
        </div>
    );
}