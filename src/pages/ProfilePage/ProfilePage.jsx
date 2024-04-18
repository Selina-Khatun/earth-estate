import { useState, useEffect, useContext } from 'react';
import 'firebase/auth';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';
const ProfilePage = () => {
    const { user, } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    
    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleSaveChanges = (e) => {
        e.preventDefault();
    
        // console.log("Saving changes...");

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          }).then(() => {
            console.log('Profile updated successfully');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully logged In with Google",
                showConfirmButton: false,
                timer: 1500
            });
                navigate(from);
          }).catch((error) => {
          
            console.error('Error updating profile:', error);
          });

       
    };

   

    return (
        <div>

            <div className="h-full">
                <div className="border-b-2 block md:flex">
                    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                        <div className="flex justify-between">
                            <span className="text-2xl mb-4 font-semibold block">Admin Profile</span>

                        </div>
                        <span className="text-gray-600 my-10">This information is secret so be careful</span>
                        <div className="w-full flex flex-col p-8 m-2 justify-center">
                            <img id="showImage" className="max-w-xs w-32 items-center border" src={photoURL} alt="" />
                            <p className='text-xl mt-5 text-cyan-700 font-bold'>{user.displayName}</p>
                        
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                        <form onSubmit={handleSaveChanges} className="rounded shadow p-6">
                            <div className="pb-6">
                                <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                                <input id="username" className="border-1 rounded-r px-4 py-2 w-full" type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="pb-4">
                                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Photo URL</label>
                                <input id="photoURL" className="border-1 rounded-r px-4 py-2 w-full" type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)} />
                                <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                            </div>
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
