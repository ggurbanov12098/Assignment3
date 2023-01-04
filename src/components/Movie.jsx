import './Movie.css'
import React, { useEffect, useState } from "react";
import MovCon from './MovCon';


export default function Movie(){
    const [productCount, setProductCount] = useState(1);
    const [movies, setMovies] = useState([]);
    // const [status, setStatus] = useState(0);
    useEffect(() => {
        let url = `http://localhost:3001/movies/?_page=${productCount}&_limit=9`;
        fetch(url)
        .then((res) => { return res.json(); })
        .then((data) => {
            console.log(data);
            setMovies(data);
            // setProduct(data);
        });
      }, [productCount]);


    function handleClickFirst(event) {
        setProductCount(1);
        console.log(productCount);
    }

    function handleClickPrev(event) {
        setProductCount((cnt) => cnt - 1);
        console.log(productCount);
    }

    function handleClickNext(event) {
        setProductCount((cnt) => cnt + 1);
        console.log(productCount);
    }

    function handleClickLast(event) {
        setProductCount(112);
        console.log(productCount);
    }

    function pageMinLimit(){
        if(productCount <= 1) return true;
        else return false;
    }

    function pageMaxLimit(){
        if(productCount >= 112) return true;
        else return false;
    }

    return(
        <>
            <div className='movie-cards'>
                {movies.map((movie) => (
                <MovCon 
                    key={movie.id}
                    movid={movie.id}
                    img={movie.Poster_Link}
                    title={movie.Series_Title}
                    year={movie.Released_Year}
                    duration={movie.Runtime}
                    genre={movie.Genre}
                    rating={movie.IMDB_Rating}
                    overview={movie.Overview}
                />))}
            </div>

            <div className='buttons'>
                <button className='button' onClick={handleClickFirst}>First Page</button>
                {pageMinLimit()?'':<button className='button' onClick={handleClickPrev}>Prev Page</button>}
                {pageMaxLimit()?'':<button className='button' onClick={handleClickNext}>Next Page</button>}
                <button className='button' onClick={handleClickLast}>Last Page</button>
            </div>
        </>
    );
}