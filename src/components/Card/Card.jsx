import './index.css';
import AnimeModal from '../AnimeModal';
import Header from '../Header';
import { useState } from 'react';

const Card = ({ data }) => {
    const { poster_path, name, id, vote_average } = data;
    
    const [modalVisib, setModalVisib] = useState (false);

    const onHandleClick =() => {
        setModalVisib(true);
    };
    
    return (
        <>
        {   
        <div onClick={onHandleClick} className='Card' key={id}>
            <img src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ name }/>
            <div className='Card__info'>
                <h1 className='anime-title'>{name}</h1>
                <span>{vote_average}⭐</span>
            </div>
        </div> 
        }

        { 
            modalVisib && <AnimeModal data={data} setModalVisib={setModalVisib}  />
        }
        </>
    )
}

export default Card;