import './DetailedMovInfo.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

export default function DetailedMovInfo(){
    const { movieID } = useParams();
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        let url = `http://localhost:3000/movies/${movieID}`;
        fetch(url)
        .then((res) => { return res.json() })
        .then((data) => {
            setMovie(data);
        });
      }, [movieID]);

    console.log(movieID);


    return(
        <div className="detailed-movie-card">
            <div className="img&table">
                <img src={movie.Poster_Link} className='movie-img' alt="movie-img" />
                <table>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>{movie.Series_Title}</td>
                            <td className='third'>Certificate:</td>
                            <td>{movie.Certificate}</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>{movie.Released_Year}</td>
                            <td className='third'>Director:</td>
                            <td>{movie.Director}</td>
                        </tr>
                        <tr>
                            <td>Runtime:</td>
                            <td>{movie.Runtime}</td>
                            <td className='third'>Star 1:</td>
                            <td>{movie.Star1}</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td>{movie.Genre}</td>
                            <td className='third'>Star 2:</td>
                            <td>{movie.Star2}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td>{movie.IMDB_Rating}</td>
                            <td className='third'>Star 3:</td>
                            <td>{movie.Star3}</td>
                        </tr>
                        <tr>
                            <td>Votes:</td>
                            <td>{movie.No_of_Votes}</td>
                            <td className='third'>Star 4:</td>
                            <td>{movie.Star4}</td>
                        </tr>
                        <tr>
                            <td>Meta Score:</td>
                            <td>{movie.Meta_score}</td>
                            <td className='third'>Gross:</td>
                            <td>{movie.Gross}</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>Overview:</td>
                            <td className='third'>{movie.Overview}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}