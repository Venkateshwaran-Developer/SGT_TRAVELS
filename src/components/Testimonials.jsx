// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import star from "/img/star.svg";
// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

export default function Testimonials() {
  const [setSwiperRef] = useState(null);
  return (
    <div id="reviews" className=" sm:px-10 sm:pb-10 md:pb-20 md:px-30 lg:px-48">
    <div className="flex flex-col items-center justify-center md:pt-28 ">
    <h1 className="text-[20px] text-green">Testimonials</h1>
    <h1 className="sm:text-[30px] sm:pb-10 md:text-[50px]  ">What Our Client Say&apos;s</h1>

    </div>
  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
                }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper flex justify-center items-center  w-full h-auto "

      >
        <SwiperSlide className=" p-10 rounded-3xl bg-green text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white ">Karthik D</h1>
            <p className="text-gray-500">Tiruppur</p>
            <p className="text-gray-500">
              Outstanding taxi service! They are always on time, and the drivers
              are professional and friendly. I would not choose anyone else for
              my rides.
            </p>
            <div className="flex">
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-green text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Santhosh</h1>
            <p className="text-gray-500">Tiruppur</p>
            <p className="text-gray-500">
            This taxi service exceeded my expectations. Reliable, clean, and
              the drivers are truly friendly. I will be a loyal customer for
              years to come.
            </p>
            <div className="flex">
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-green text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Kathirvel</h1>
            <p className="text-gray-500">Tiruppur</p>
            <p className="text-gray-500">
            Very good taxi service in Tirupur. I experienced an extraordinary
            comfort from them. Overall it was my best trip.
            </p>
            <div className="flex">
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-green text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Arun</h1>
            <p className="text-gray-500">Coimbatore</p>
            <p className="text-gray-500">
            I&apos;m working in an IT firm. SGT Travels provide my transport in
              morning and evening for the past 2 years & till now i didnt find
              any issues from them.
            </p>
            <div className="flex">
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-green text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Dhanajeyan</h1>
            <p className="text-gray-500">Tiruppur</p>
            <p className="text-gray-500">
            Reliable taxi service in Tiruppur. Very good customer service. We can be tension free about our trips.
            </p>
            <div className="flex ">
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" p-10 rounded-3xl bg-green text-white  border-2">
          <div className="flex w-full h-[250px] flex-col justify-center items-start space-y-5">
            <h1 className="text-[20px] text-white">Venkateshwaran</h1>
            <p className="text-gray-500">Tiruppur</p>
            <p className="text-gray-500">
            Awesome journey. Just go for SGT Travels.

            </p>
            <div className="flex ">
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
              <img className="w-10 h-10" src={star}></img>
            </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
}
