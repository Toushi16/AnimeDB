import './index.css';

const Card = ({ data }) => {
    const { poster_path, name, id, vote_average } = data;
    return (
        <>
        {   
        <div className='Card' key={id}>
            <img src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ name }/>
            <div className='Card__info'>
                <h1 className='anime-title'>{name}</h1>
                <span>{vote_average}⭐</span>
            </div>
        </div> 
        }
        
        </>

    )
}

export default Card;