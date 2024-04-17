
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import './Banner.css'
const Banner = () => {
  const { data } = useContext(AuthContext);
  console.log(data);
  
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-[5%] h-full">

      {
        data?.map(item => <SwiperSlide className='h-[70vh] relative' key={item.id} >


          <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${item.image})`}}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl text-white font-bold">{item.estate_title}</h1>
                <p className="mb-5">{item.location}</p>
                <button>Details</button>

              </div>
            </div>
          </div>
        </SwiperSlide>)
      }


    </Swiper>
  );
};

export default Banner;