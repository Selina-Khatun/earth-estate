import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import Card from './Card';
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 1000 });
const Cards = () => {
    const { data } = useContext(AuthContext);
    // console.log(data)
    return (
        <div>

            <div data-aos="zoom-out-right " className='grid grid-cols-1 my-[5%] md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data?.map(item => <Card key={item.id} item={item}> </Card>)
                }
            </div>
        
        </div>
    );
};

export default Cards;