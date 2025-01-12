import { useEffect } from "react";
import Lenis from 'lenis';



function Services() {
  useEffect (() => {
    const lenis = new Lenis();
    function raf (time) {
    lenis.raf (time);
    requestAnimationFrame (raf);
    }
    requestAnimationFrame (raf);
    }, []);
  

  return (
    
    <div id="services">
      <div className="flex flex-col items-center justify-center py-28 ">
        <h1 className="text-[25px] text-green">Services</h1>
        <h1 className="sm:text-[35px] text-[40px]">
          Our Best Services For You
        </h1>
      </div>
      <div

        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true }}
        // variants={gridContainerVarients}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20  place-content-center place-items-center "
      >
        <div data-aos="fade-right"
       className="flex flex-col w-80 h-[350px]  justify-center items-start p-4 bg-green drop-shadow-lg rounded-3xl">
          <img
            className="absolute mb-60 w-72 h-40 rounded-3xl"
            src="/img/taxi.jpg"
          ></img>
          <div className="absolute flex flex-col px-5 items-start mt-28 gap-4 ">
            <h1 className="text-[25px] text-white ">Local Taxi Rentals</h1>
            <p className="text-gray-500">
              Explore your city with ease. Our local taxi rentals provide quick
              and affordable transportation for all your nearby destinations.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in"
     
      className="flex flex-col w-80 h-[350px]  justify-center items-start p-4 bg-green drop-shadow-lg rounded-3xl">
          <img
            className="absolute mb-60 w-72 h-40 rounded-3xl"
            src="/img/02.webp"
          ></img>
          <div className="absolute flex flex-col px-5 items-start mt-28 gap-4 ">
            <h1 className="text-[25px] text-white ">Outstation Car Rentals</h1>
            <p className="text-gray-500">
              Our outstation car rentals offer comfortable and convenient
              journeys to various destinations, ensuring memorable trips.
            </p>
          </div>
        </div>
        <div data-aos="fade-left"
      className="flex flex-col w-80 h-[350px]  justify-center items-start p-4 bg-green drop-shadow-lg rounded-3xl">
          <img
            className="absolute mb-60 w-72 h-40 rounded-3xl"
            src="/img/03.webp"
          ></img>
          <div className="absolute flex flex-col px-5 items-start mt-28 gap-4 ">
            <h1 className="text-[25px] text-white ">Personal Driver</h1>
            <p className="text-gray-500">
              Your personal chauffeur, just a call away. Enjoy convenience and
              reliability with our dedicated drivers for a seamless travel
              experience.
            </p>
          </div>
        </div>
        <div data-aos="fade-right"
      className="flex flex-col w-80 h-[350px]  justify-center items-start p-4 bg-green drop-shadow-lg rounded-3xl">
          <img
            className="absolute mb-60 w-72 h-40 rounded-3xl"
            src="/img/04.webp"
          ></img>
          <div className="absolute flex flex-col px-5 items-start mt-28 gap-4 ">
            <h1 className="text-[25px] text-white ">One way cabs</h1>
            <p className="text-gray-500">
              Simplify your travel plans with one-way cabs. Efficient and
              cost-effective, they make single-direction journeys a breeze,
              perfect for your convenience.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in"
      className="flex flex-col w-80 h-[350px]  justify-center items-start p-4 bg-green drop-shadow-lg rounded-3xl">
          <img
            className="absolute mb-60 w-72 h-40 rounded-3xl"
            src="/img/05.webp"
          ></img>
          <div className="absolute flex flex-col px-5 items-start mt-28 gap-4 ">
            <h1 className="text-[25px] text-white ">Corporate Car Rental</h1>
            <p className="text-gray-500">
              Elevate your corporate transportation. Our tailored car rental
              services ensure professionalism, punctuality, and comfort for your
              business travel needs.
            </p>
          </div>
        </div>
        <div data-aos="fade-left"
      className="flex flex-col w-80 h-[350px]  justify-center items-start p-4 bg-green drop-shadow-lg rounded-3xl">
          <img
            className="absolute mb-60 w-72 h-40 rounded-3xl"
            src="/img/06.webp"
          ></img>
          <div className="absolute flex flex-col px-5 items-start mt-28 gap-4 ">
            <h1 className="text-[25px] text-white ">Spirutual Ride</h1>
            <p className="text-gray-500">
              Find peace in every journey. Our spiritual rides offer a calm and
              mindful experience, connecting you with your inner self. As our
              drivers take you to sacred destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
