import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <section>
            <div className="font-[sans-serif] text-[#333] mt-4 p-4 relative">
                <div className="max-w-md w-full mx-auto relative z-50">

                    <div className="border border-gray-300 bg-white rounded-md p-8">
                        <form className="w-full " action="#">
                            <div className="mb-6">
                                <h3 className="text-2xl font-extrabold">Create an account</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm mb-2 block">Name</label>
                                    <div className="relative flex items-center">
                                        <input name="name" type="text" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500" placeholder="Enter name" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm mb-2 block">Email Id</label>
                                    <div className="relative flex items-center">
                                        <input name="email" type="email" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500" placeholder="Enter email" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                            <defs>
                                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                </clipPath>
                                            </defs>
                                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500" placeholder="Enter password"  />
                                        <FaEye className="w-4 h-4 absolute right-4 "/>
                                    </div>
                                    <div className="flex  mt-3 items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm">
                                            I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <button type="button" className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                        Create an account
                                    </button>
                                </div>
                                <p className="text-sm mt-6 text-center">Already have an account? <Link to={'/login'} href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Register;