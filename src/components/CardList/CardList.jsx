import './index.css';
import Card from '../Card';
const CardList = ({ data, nCards }) => {
    return (
        <div className='CardList'>
            { (data.slice( 0, nCards ).map((el, i) => <Card data={el} key={i}/>)) }
        </div>
    )
}

export default CardList;