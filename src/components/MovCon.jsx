import './MovCon.css';

export default function MovCon(props){
    return(
        <div className='movie-info'>
            <img src={props.img} alt="movie-img" />
            <span className='title'>Title: {props.title}</span>
            <span className='year'>Year: {props.year}</span>
            <span className='duration'>Duration: {props.duration}</span>
            <span className='genre'>Genre: {props.genre}</span>
            <span className='rating'>IMDB Rating: {props.rating}</span>
        </div>
    );
}