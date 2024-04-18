import { Helmet } from "react-helmet-async";
import ProfilePage from "../ProfilePage/ProfilePage";

const About = () => {


    return (
        <div>
            <Helmet>
                <title>LANDMARKED || About</title>

            </Helmet>
        
            <ProfilePage></ProfilePage>
        </div>
    );
};

export default About;