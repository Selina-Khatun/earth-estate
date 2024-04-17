import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    // console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [verificationError, setVerificationError] = useState('');
    const [showPassword, setShowPassword] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    const onSubmit = (data) => {

        const passwords = data.password;

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRegex = /.{6,}/;

        if (!uppercaseRegex.test(passwords) || !lowercaseRegex.test(passwords) || !lengthRegex.test(passwords)) {
            setVerificationError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
            return;
        }

        setVerificationError('');

        const { email, password, name, photoURL } = data;
        createUser(email, password)
            // console.log(data)
            .then(() => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully registered ",
                    showConfirmButton: false,
                    timer: 1500
                });
                updateUserProfile(name, photoURL)
                    .then(() => {
                        navigate(from)
                    })
                // console.log(user)

            })

    }

    return (
        <section>
            <div className="font-[sans-serif] text-[#333] mt-4 p-4 relative">
                {/* <button className="btn absolute font-semibold"><Link to={'/'}>Back to home</Link></button> */}
                <div className="max-w-md w-full mx-auto relative z-50">

                    <div className="border border-gray-300 bg-white rounded-md p-8">

                        <div className="mb-4">
                            <h3 className="text-2xl font-extrabold">Create an account</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="text-sm mb-1 block">Name</label>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter name"
                                        {...register("name", { required: true })}
                                    />

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>

                                </div>
                                {errors.name && <span className="font-semibold text-red-500">This field is required</span>}
                            </div>
                            <div>
                                <label className="text-sm mb-1 block">Email Id</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="email" className="bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter email"
                                        {...register("email", { required: true })}
                                    />

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
                                {errors.email && <span className="font-semibold text-red-500">This field is required</span>}
                            </div>
                            <div>
                                <label className="text-sm mb-1 block">photoURL
                                </label>
                                <div className="relative flex items-center">
                                    <input name="photoURL" type="url" className="bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter photoURL"
                                        {...register("photoURL")}
                                    />

                                </div>
                            </div>
                            <div>
                                <label className="text-sm mb-1  block">Password</label>
                                <div className="relative flex items-center">


                                    <input name="password" type={showPassword ? 'text' : 'password'} className="bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />

                                    <span className=' absolute top-3 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                    </span>
                                   

                                </div>
                                {errors.password && <span className="font-semibold text-red-500">This field is required</span>}

                                {verificationError && <p className="font-semibold text-red-500">{verificationError}</p>}
                                <br />
                                <div className="flex  mt-2 items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                                        I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <button type="submit" className="w-full btn   py-3 px-4 text-sm font-semibold rounded text-white bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg  hover:bg-cyan-600">
                                    Create an account
                                </button>
                            </div>
                            <p className="text-sm mt-4 text-center">
                                Already have an account?{' '}
                                <Link to={'/login'} className="text-sky-500 font-semibold hover:underline ml-1">
                                    Login here
                                </Link>
                            </p>
                        </form>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Register;