import { useState, useEffect } from 'react';
import { GET } from '../../utils/api';
import './index.css';

const SearchModal = ({ setSearchVisib }) => {
    const [searchList, setSearchList] = useState([]);
    const [currentValue, setCurrentValue] = useState('');

    const onHandleClick = () => {
        setSearchVisib(false);
    };

    const handleChange = (e) => {
        setCurrentValue(e.target.value);
    };

    return (
        <div className='SearchModal'>
            <div className='search-box'>
                <input value={currentValue} onChange={handleChange} type="text" placeholder='Search a Anime...'/>
                <button onClick={onHandleClick} className='search-box__btn'>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className='cucu'>
                {/* <img src="https://image.tmdb.org/t/p/w92/jYeTfpxS3IzgqKkYCjmdCKwq8PW.jpg" alt="" />
                <img src="https://image.tmdb.org/t/p/w92/jYeTfpxS3IzgqKkYCjmdCKwq8PW.jpg" alt="" />
                <img src="https://image.tmdb.org/t/p/w92/jYeTfpxS3IzgqKkYCjmdCKwq8PW.jpg" alt="" />
                <img src="https://image.tmdb.org/t/p/w92/jYeTfpxS3IzgqKkYCjmdCKwq8PW.jpg" alt="" /> */}
            </div>
        </div>
    )
}

export default SearchModal;