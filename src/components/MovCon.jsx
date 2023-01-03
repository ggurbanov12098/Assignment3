import { NavLink } from 'react-router-dom';
import './MovCon.css';

export default function MovCon(props){
    return(
        <div className='movie-info'>
            <NavLink className="movie-name" to={`/movies/${props.movid}`}>
            <div className='textual-data'>
                {props.img ? <img src={props.img} className='movie-img' alt="movie-img" /> : <h1>No Image Available</h1>}
                <h4 className='title'>{props.title}</h4>
                <p className='overview'>Overview: {props.overview.length > 100 ? props.overview.substring(0,97) + '...' : props.overview}</p>
                <p className='rating'>IMDB Rating: {props.rating}</p>
                <p className='genre'>Genre: {props.genre}</p>
                <p className='duration'>Duration: {props.duration}</p>
                <p className='year'>Year: {props.year}</p>
            </div>
        </NavLink>
        </div>
    );
}


