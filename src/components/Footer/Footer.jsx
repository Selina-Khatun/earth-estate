import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="flex flex-col bg-cyan-950 p-[5%] mt-[10%] space-y-10 justify-center ">

            <nav className="flex justify-center flex-wrap gap-6 text-cyan-100 font-medium">
                {/* <a className="hover:text-gray-900" href="#">Home</a>
                <a className="hover:text-gray-900" href="#">About</a>
                <a className="hover:text-gray-900" href="#">Services</a>
                <a className="hover:text-gray-900" href="#">Media</a>
                <a className="hover:text-gray-900" href="#">Gallery</a>
                <a className="hover:text-gray-900" href="#">Contact</a> */}
                <li className="list-none"><NavLink to={'/'}>Home</NavLink></li>
                <li className="list-none"><NavLink to={'/login'}> Login</NavLink></li>
                <li className="list-none"><NavLink to={'/register'}>Register</NavLink></li>
                <li className="list-none"><NavLink to={'/about'}>About</NavLink></li>
                <li className="list-none"><NavLink to={'/cards'}>Properties</NavLink></li>
            </nav>

            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </a>
            </div>
            <p className="text-center text-cyan-100  font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </footer>
    );
};

export default Footer;