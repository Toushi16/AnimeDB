import { useState, useEffect } from 'react';
import { GET } from '../../utils/api';
import CardList from '../CardList';
import './index.scss';

const SearchModal = ({ setSearchVisib }) => {
    const [searchList, setSearchList] = useState([]);
    const [currentValue, setCurrentValue] = useState('');

    const onHandleClick = () => {
        setSearchVisib(false);
    };

    const handleChange = (e) => {
        setCurrentValue(e.target.value);
    };

    useEffect(() => {
        currentValue && GET('search/tv',`&query=${currentValue}`)
            .then(data => setSearchList(data.results.filter(el => el.origin_country[0] === 'JP').filter(el => el.genre_ids[0] === 16)));
            currentValue === '' && setSearchList('');
    },[currentValue]);

    return (
        <div className='SearchModal'>
            <div className='search-box'>
                <input value={currentValue} onChange={handleChange} type="text" placeholder='Search a Anime...'/>
                <button onClick={onHandleClick} className='search-box__btn'>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className='search-card'>
                {searchList.length>0 && <CardList data={searchList} />}
            </div>
                
        </div>
    )
}

export default SearchModal;