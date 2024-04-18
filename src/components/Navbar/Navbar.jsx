
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import './Navbar.css'
const Navbar = () => {
    const { logout, user } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/login'}> Login</NavLink></li>
                        <li><NavLink to={'/register'}>Register</NavLink></li>
                        <li><NavLink to={'/about'}>about</NavLink></li>
                        {/* <li><NavLink to={'/details'}>details</NavLink></li> */}

                    </ul>
                </div>
               

               
                <a  className="logo">
                    <div className="wrapper">
                        <p className="text uppercase font-thin">LandMarked</p>

                        <div className="flower flower1">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                        </div>
                        <div className="flower flower2">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                        </div>
                        <div className="flower flower3">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                        </div>
                        <div className="flower flower4">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                        </div>
                        <div className="flower flower5">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                        </div>
                        <div className="flower flower6">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                        </div>
                    </div>
                </a>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 text-lg justify-center items-center menu-horizontal px-1">
                    <NavLink className={({ isActive }) =>
                        isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                    } to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? " text-cyan-100  border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                    } to={'/about'}>about</NavLink>
                    {/* <NavLink className={({ isActive }) =>
                        isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4"
                    } to={'/details'}>details</NavLink> */}
                    <NavLink className={({ isActive }) =>
                        isActive ? " text-cyan-100 border-2 bg-cyan-800 px-4 rounded-lg py-2 mr-5  border-cyan-700 underline" : "font-bold mr-4 text-cyan-800"
                    } to={'/register'}>Register</NavLink>
                </ul>
            </div>



            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-zinc-400">
                            <div className="w-10 rounded-full">
                                <img alt="null" src={user?.photoURL
                                } />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                            <li>
                                <p>{user?.displayName}</p>
                            </li>
                            <li><p>{user?.
                                email
                            }</p></li>
                            <li><button onClick={logout} className="btn bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg  hover:bg-cyan-600 ">signOut</button></li>
                        </ul>
                    </div>
                        :
                        <NavLink to={'/login'} >  <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-cyan-100 transition-all duration-300 bg-cyan-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-cyan-300 ring-offset-sky-200 hover:ring-offset-sky-500 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center text-sm">
                                <svg className="relative w-5 h-5 mr-2 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                Login
                            </span>
                        </button></NavLink>


                }
            </div>
        </div>
    );
};

export default Navbar;