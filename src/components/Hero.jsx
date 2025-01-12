import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";

function Hero() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  return (
    <div id="#home"  className="md:mt-36 sm:mt-44 sm:mb-5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-content-center overflow-hidden place-items-center w-full h-auto">
     <motion.div
     
     initial={{ opacity: 0 , x:-90}}
     transition={{type:"spring",delay:0.5}}
      animate={{opacity:1, x:0 }}

     >
      <div className="grid grid-cols-1 items-start sm:px-10 md:px-24 lg:px-24 justify-center  ">
        <h1 className="md:text-[30px] lg:text-[50px] sm:text-[25px] font-Chau font-bold ">
          Welcome To SGT Travels
        </h1>
        <h1 className="md:text-[50px] lg:text-[80px] sm:text-[35px] font-Chau font-bold ">
          Book Taxi For Your Journey!
        </h1>
        <h1 className="text-[15px] font-Chau ">
          We take pride in providing swift and secure rides, ensuring you reach
          your destination comfortably and on time. Experience the convenience
          and quality of our service, whether you are traveling for business or
          leisure.
        </h1>
        <div className="py-5 ">
<a
            href="#booking"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white bg-green border-2 border-green rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease-in-out"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Start Your Ride</span>
          </a>
        </div>
      </div>
      </motion.div>
      <DotLottieReact
        src="https://lottie.host/5a5db3c8-4524-4ae2-a7a3-fb9fd68c5fcd/6paSs93KEY.lottie"
        loop
        autoplay
        className="sm:w-[1000px] md:w-[1100px] lg:w-[1450px] h-full sm:px-52  "
      />
    </div>
  );
}

export default Hero;
