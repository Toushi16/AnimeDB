import { useEffect } from 'react';
import './index.css';


const AnimeModal = ({ data, setModalVisib }) => {

    const { name, poster_path, overview, vote_average } = data;

    const onHandleClick =() => {
        setModalVisib(false)
    };

    return (
        <div className='modal-overlay'>
            <div className="modal">
                <button onClick={onHandleClick} className='modal__button'> 
                    <i  className="fa-sharp fa-solid fa-arrow-left"> back</i>
                    <hr />
                </button>
                <div className='modal__info'>
                    <div className='modal-left-side'>
                        <img className='modal-poster' src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt="" />
                        <h1 className='modal-name'>{ name }</h1>
                        <span className='modal-date'>{vote_average}⭐</span>
                    </div>
                    <div className='modal-right-side'>
                        <p className='modal-overview'>{ overview }</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeModal;