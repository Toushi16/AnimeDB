import './index.css';

const Header = () => {
    return (
        <div className='Header'>
            <h1 className='Header__title'>AnimeDB</h1>
            <button>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default Header;