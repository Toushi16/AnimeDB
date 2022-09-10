import { useState, useEffect } from 'react';
import { GET } from '../../utils/api';
import CardList from '../CardList';
import AsukaBg from '../../img/asuka.png';
import './index.scss';

const MainContent = () => {
    const [tvlist, setTvList] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [paginationLatest, setPaginationLatest] = useState("1");
    const [paginationTopRated, setPaginationTopRated] = useState("1");

    useEffect(() => {
        GET('tv/popular','',paginationLatest)
        .then(data => setTvList(data.results));

        GET('tv/top_rated','',paginationTopRated)
        .then(data => setTopRated(data.results));

    }, [paginationLatest, paginationTopRated]);


    const onHandlePaginationLatest = (id) => {
        setPaginationLatest(id);
    };

    const onHandlePaginationTopRated = (id) => {
        setPaginationTopRated(id);
    };

    const totalPages = ['1','2','3','4','5'];

    return (
        <div className='MainContent'>
            <div className='animelist'>
                <h1 className='animelist__title'>Latest Releases</h1>
                { tvlist.length>0 && <CardList data={ tvlist }/> }
                <div className='btn-box'>
                    {
                        totalPages.map(el => <button className={paginationLatest === el ? 'btn-pagination active' : 'btn-pagination'} key={el} onClick={() => onHandlePaginationLatest(el)} id={el}>{el}</button> )
                    }
                </div>
            </div>
            <div className='toprated'>
                <h1 className='toprated__title'> Top Rated</h1>
                { tvlist.length>0 && <CardList data={ topRated } nCards={16}/> }
                <div className='btn-box'>
                    {
                        totalPages.map(el => <button className={paginationTopRated === el ? 'btn-pagination active' : 'btn-pagination'} key={el} onClick={() => onHandlePaginationTopRated(el)} id={el}>{el}</button> )
                    }
                </div>
            </div>

            <div className='background'>
                <img className='asuka-bg' src={AsukaBg} alt="" />
            </div>
        </div>
    )
};
 
export default MainContent;