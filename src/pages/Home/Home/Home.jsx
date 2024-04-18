
import 'animate.css';
import Banner from "../../../components/Banner/Banner";
import Cards from "../../../components/Cards/Cards";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
           <Helmet>
                <title>LANDMARKED || Home</title>
                
            </Helmet>
            <Banner></Banner>

            <Cards></Cards>
        </div>
    );
};

export default Home;