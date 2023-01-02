import './MovCon.css';

export default function MovCon(props){
    return(
        <div className='movie-info'>
            <img src={props.img} className='movie-img' alt="movie-img" />
            <div className='textual-data'>
                <h4 className='title'>{props.title}</h4>
                <p className='rating'>IMDB Rating: {props.rating}</p>
                <p className='genre'>Genre: {props.genre}</p>
                <p className='duration'>Duration: {props.duration}</p>
                <p className='year'>Year: {props.year}</p>
                <p className='overview'>{props.overview.length > 100 ? props.overview.substring(0,97) + '...' : props.overview}</p>
            </div>
        </div>
    );
}


