import { useState, useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import Card from './Card';
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init({ duration: 1000 });

const Cards = () => {
    const { data } = useContext(AuthContext);
    const [showAll, setShowAll] = useState(false);
    const initialCardsToShow = 3;

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Our Estates</h1>
            <div data-aos="zoom-out-right" className='grid grid-cols-1 my-[5%] md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {data?.slice(0, showAll ? data.length : initialCardsToShow).map(item => (
                    <Card key={item.id} item={item} />
                ))}
              
            </div>
            {!showAll && (
                   <Link  to={'/cards'} className='flex justify-center items-center'> <button className="bg-cyan-800  text-white text-center font-bold py-2 px-4 rounded" onClick={toggleShowAll}>
                   See All
               </button></Link>
                )}
        </div>
    );
};

export default Cards;
