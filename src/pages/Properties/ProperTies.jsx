import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import '../../components/Cards/Card.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../../components/Cards/Card';
import { Helmet } from 'react-helmet-async';
AOS.init({ duration: 1000 });
const Properties = () => {
    const { data } = useContext(AuthContext);
    // console.log(data)
    return (
        <div>
             <Helmet >
                <title>LANDMARKED || Home</title>
                
            </Helmet>
            <h1 className='text-center text-4xl  font-bold'>Our  Estates</h1>
            <div data-aos="zoom-out-right " className='grid grid-cols-1 my-[5%] md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data?.map(item => <Card key={item.id} item={item}> </Card>)
                }
            </div>

        </div>
    );
};

export default Properties;  