// import tick from "../assets/tick.png";
// import driver from "../assets/driver.png";
// import location from "../assets/destination.png";
import {motion} from 'framer-motion';
import whyus from '/img/whyus.png';
import tick from '/img/tick.png';

const WhyUs = () => {
  
  return (
    <section id='whyus' className="py-24  px-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center place-items-center gap-8">
      <div className="lg:px-16">
      <h2 className="text-4xl font-bold font-Chau text-blue-600 ">
          Why Choose Us?
        </h2>
        <h1 className=" font-Chau text-[50px]">
        We are dedicated to provide quality service
        </h1>
        <h1 className=" font-Chau">
        Our unwavering commitment is to deliver top-notch service. Every ride, every mile, we prioritize your comfort, safety, and satisfaction. Trust us for a superior tick experience that goes above and beyond.
        </h1>
        <motion.img 
        // initial={{ opacity: 0 }}
        // whileInView={{
        //   scale:[1,1,1,1],
        //   // rotate: [0, 360],
        //  opacity:1,
         
        //   transition: {
        //     duration: 2,
            
        //     },
          

        // }}
         src={whyus}
         data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-anchor-placement="bottom-bottom"
         ></motion.img>

      </div>

          <div  className='flex flex-col space-y-5'>
            <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" className= "  flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Best Quality Taxi</h1>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" className= "ml-16 flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Many Locations</h1>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" className= " flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Toll Free Rides</h1>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" className= "ml-16 flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>No Driver Charges</h1>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" className= " flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>No Halt Chargers</h1>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" className= "ml-16 flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>24/7 Support</h1>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" className= " flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Affordable Rate</h1>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" className= "ml-16 flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Fast Pickup</h1>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" className= " flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Expert Drivers</h1>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" className= "ml-16 flex justify-evenly items-center rounded-xl font-Chau text-xl bg-white h-[50px] w-[300px]">
            <img className="w-10 h-10 " src={tick}></img>
              <h1>Safety Guarantee</h1>
            </div>
          </div>

        {/* <div className=" flex flex-col h-full w-full justify-center gap-10 items-end ">
          <div className="flex lg:flex-row sm:flex-col  md:flex-col justify-center items-center w-full h-auto py-10 px-10 bg-white  rounded-3xl   hover:shadow-2xl hover:shadow-white transition-shadow duration-300">
          <div className="text-4xl h-[80px] w-[170px]  rounded-full flex justify-center  text-center">
              <img className=" h-[70px] w-[70px] " src={tick}></img>
            </div>
            <div className=" pl-5 ">
              <h3 className="text-xl font-semibold text-gray-800  text-center">
                Best Quality tick
              </h3>
              <p className="text-gray-600 text-center">
                Experience the finest in tick services with us. Impeccably
                maintained, comfortable vehicles driven by courteous
                professionals. We set the standard for quality, ensuring each
                ride is a superb journey.
              </p>
            </div>
          </div>
          
          <div className="flex lg:flex-row sm:flex-col  md:flex-col justify-center items-center w-full lg:w-[600px] h-auto py-10  bg-white px-10 rounded-3xl  hover:shadow-2xl hover:shadow-white transition-shadow duration-300">
          <div className="text-4xl h-[80px] w-[170px] rounded-full flex justify-center  text-center">
              <img className=" h-[80px] w-[60px]" src={location}></img>
            </div>
            <div className=" pl-5 ">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Many Locations
              </h3>
              <p className="text-gray-600 text-center">
                Covering a wide network of locations, were where you need us.
                From city centers to suburbs, airports to landmarks, count on us
                for convenient, reliable tick services wherever you go.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row sm:flex-col  md:flex-col justify-center items-center w-full h-auto py-10  bg-white  rounded-3xl px-10   hover:shadow-2xl hover:shadow-white transition-shadow duration-300">
            <div className="text-4xl h-[80px] w-[170px] rounded-full flex justify-center  text-center">
              <img className=" h-[60px] w-[70px]" src={driver}></img>
            </div>
            <div className="pl-5">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Expert Drivers
              </h3>
              <p className="text-gray-600 text-center">
                Our expert drivers are the heart of our service. Skilled,
                licensed, and experienced, they navigate the roads with
                precision and care. Your safety and satisfaction are their top
                priorities.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyUs;
