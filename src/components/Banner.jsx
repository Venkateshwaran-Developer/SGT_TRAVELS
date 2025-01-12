import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { motion,useAnimation, useInView, useTransform, useScroll } from "framer-motion";

function Banner() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div ref={containerRef}>
      {/* <img className=' object-cover h-[50vh] w-full    bg-fixed' src={banner}>
     </img> */}
      <motion.div
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ delay: 0.3 }}
        className={`text-white grid sm:grid-cols-1 md:grid-cols-3 py-28 bg-[url('/img/banner.jpg')] bg-cover bg-center bg-fixed`}
      >
        <motion.div
          style={{ translateX: paragraphOneValue }}
         
          className="  col-span-2 flex flex-col space-y-5 justify-center items-start sm:px-10 md:px-28 font-bold font-Chau text-[30px]"
        >
          <h1 className="text-red-500">
            Book Your Cab It&apos;s Simple And Affordable
          </h1>
          <h1>
            With competitive pricing and transparent fare structures, we make
            sure affordability meets convenience in every ride.
          </h1>
        </motion.div>
        <motion.div
          style={{ translateX: paragraphTwoValue }}
          className=" flex flex-col space-y-5 justify-center sm:items-center md:items-start sm:px-10 sm:py-10 lg:px-20 font-bold font-Chau text-[30px]"
        >
          <h1>+91 76395 91469</h1>
          <div>
            <a
              href="#booking"
              className=" relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Book Your Ride
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Banner;
