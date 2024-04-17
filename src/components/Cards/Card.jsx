import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 1000 });
const Card = ({ item }) => {
    const { estate_title, segment_name, price, status, area, image, location } = item;
    return (
        <div data-aos="fade-up">
            <div className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-2xl  transition">
                <div className="relative pt-[50%]   overflow-hidden">
                    <img className="size-full p-2  absolute top-0 start-0 object-cover group-hover:scale-110  transition-transform duration-700 ease-in-out rounded-2xl" src={image} alt={estate_title} />
                </div>
                <div className="px-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800">
                        {estate_title}
                    </h3>
                    <div className='flex  justify-between '>
                        <p className="mt-1 text-gray-500">
                            {area}
                        </p>
                        <p className="mt-1 text-gray-500">
                            {segment_name}
                        </p>

                    </div>
                    <div className='flex my-2 justify-between'>
                        <p className=" text-lg text-cyan-500 font-semibold">
                            {price}
                        </p>
                        <p className=" text-cyan-700 font-bold">
                            {status}
                        </p>
                    </div>
                  
                 <p  className="flex items-center gap-3"> <FaLocationDot />{location}</p>
                   <button className="scene  my-5">
                        <div className="cube">
                            <span className="side top  bg-cyan-950">View Property</span>
                            <span className="side front">View Property</span>
                        </div>
                    </button>
                   
                </div>
               
            </div>
        </div>
    );
};

export default Card;