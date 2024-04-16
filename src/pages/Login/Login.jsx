import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <section className="h-[90vh]">
            <div className=" bg-gray-100 py-3  sm:py-12">
                <div className="relative py-3 max-w-lg sm:mx-auto">
                    <div
                        className="absolute h-[85vh] inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative py-9 px-14 h-[80vh]  bg-white shadow-lg sm:rounded-3xl ">

                        <div className="max-w- mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form action="">
                                    <div className="py-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>


                                        <div className="flex items-start gap-2">
                                            <div className="flex items-center ">
                                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className=" text-sm">
                                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                
                                    
                                        <div className="relative">
                                            <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
                                        </div>

                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don't have an account? <Link to={'/register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="w-full flex  ">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <FcGoogle className=" mr-1" />
                                <span>Continue with Google</span>
                            </button>
                            <br />
                            <button className="flex items-center bg-white border ml-2 border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <FaGithub className="mr-1" />
                                <span>Continue with GitHub</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;