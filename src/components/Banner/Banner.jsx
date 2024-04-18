
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import './Banner.css'
import { FaLocationDot } from 'react-icons/fa6';
const Banner = () => {
  const { data } = useContext(AuthContext);
  console.log(data);
  
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-cyan-100 mb-[5%] h-full">

      {
        data?.map(item => <SwiperSlide className='h-[70vh] relative' key={item.id} >


          <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${item.image})`}}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl text-cyan-200 font-bold">{item.estate_title}</h1>
               
                <div className='flex items-center my-5 text-xl text-cyan-100  justify-center gap-3'>
                <FaLocationDot />
                <p > {item.location}</p>
                </div>
                <button className='text-cyan-100 uppercase'>{item.status}</button>

              </div>
            </div>
          </div>
        </SwiperSlide>)
      }


    </Swiper>
  );
};

export default Banner;