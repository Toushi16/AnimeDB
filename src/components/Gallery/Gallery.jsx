import { useState, useEffect} from 'react';
import carousel from '../../utils/carousel';
import './index.scss';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const carouselInfiniteScroll = () => {
        setCurrentIndex(prev => prev === carousel.length - 1 ? prev = 0 : prev + 1)      
    };

    useEffect(() => {
        setInterval(() => {carouselInfiniteScroll()}, 3500)
    },[]);

    return (
        <div className='Gallery'>
            <br />
            <br />
            <div className='carousel'>
                <img src={carousel[currentIndex].image} alt="" />
                <h1>{carousel[currentIndex].title}</h1>
            </div>
        </div>
    )
}

export default Gallery;