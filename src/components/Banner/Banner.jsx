
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


          <div className="hero   min-h-[90vh]" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl animate__zoomInDown animate__animated animate__slow	2s text-cyan-200 font-bold">{item.estate_title}</h1>

                <div className='flex items-center my-5 text-xl text-cyan-100  justify-center gap-3'>
                  <FaLocationDot />
                  <p > {item.location}</p>
                </div>
                <button className='text-cyan-100 uppercase hidden'>{item.status}</button>
                <div className='flex justify-center'>
                  <a className="logo">
                    <div className="wrapper">
                      <p className="text normal-case hover:text-cyan-200 font-thin">{item.area}</p>

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
              </div>
            </div>
          </div>
        </SwiperSlide>)
      }


    </Swiper>
  );
};

export default Banner;