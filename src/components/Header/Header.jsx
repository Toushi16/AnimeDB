import { useState, useEffect } from 'react';
import SearchModal from '../SearchModal';
import './index.css';

const Header = () => {
    const [searchVisib, setSearchVisib] = useState(false);

    const onHandleClick =() => {
        setSearchVisib(true);
    };

    return (
    <>
        <div className='Header'>
            <div className='Header-container'>
                <h1 onClick={() => window.location.reload()} className='Header__title'>AnimeDB</h1>
                <button onClick={onHandleClick}>
                    <i  className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
        {
            searchVisib && <SearchModal setSearchVisib={setSearchVisib} />
        }
    </>
    )
}

export default Header;