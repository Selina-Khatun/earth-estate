import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';

const ProfilePage = () => {
    const { user, loading } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user) {
            setDisplayName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user, loading]);

    const handleNameChange = (e) => setDisplayName(e.target.value);
    const handlePhotoURLChange = (e) => setPhotoURL(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        user
            .updateProfile({ displayName, photoURL })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error updating profile:', error));
    };

    return (
        <div>
           
            <div className="h-full">
                <div className="border-b-2 block md:flex">
                    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                        <div className="flex justify-between">
                            <span className="text-xl font-semibold block">Admin Profile</span>
                        
                        </div>
                        <span className="text-gray-600">This information is secret so be careful</span>
                        <div className="w-full p-8 mx-2 flex justify-center">
                            <img id="showImage" className="max-w-xs w-32 items-center border" src={photoURL} alt="" />
                            <p>{displayName}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                        <form onSubmit={handleSubmit} className="rounded shadow p-6">
                            <div className="pb-6">
                                <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                                <input id="username" className="border-1 rounded-r px-4 py-2 w-full" type="text" value={displayName} onChange={handleNameChange} />
                            </div>
                            <div className="pb-4">
                                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Photo URL</label>
                                <input id="photoURL" className="border-1 rounded-r px-4 py-2 w-full" value={photoURL} onChange={handlePhotoURLChange} />
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
