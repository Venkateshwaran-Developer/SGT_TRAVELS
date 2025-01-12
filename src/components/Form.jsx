// import bg from '../assets/1.jpg';

function Form() {
  return (
   

      <div id='booking' className="  w-full  h-full py-20">
      {/* <img className='absolute object-cover w-full h-full' src={bg}></img> */}
    <div className=" lg:px-52 shadow-white drop-shadow-2xl ">
        <h1 className="text-3xl flex justify-center py-10 font-Chau  mb-6">Book Your Ride</h1>
        <form  className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-full place-content-center place-items-center">
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
                <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700">Pick Up Location</label>
                <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
                    <input type="text" id="pickup-location" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md  sm:text-sm" placeholder="Type Location"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <i className="fas fa-map-marker-alt text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <label htmlFor="dropoff-location" className="block text-sm font-medium text-gray-700">Drop Off Location</label>
                <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
                    <input type="text" id="dropoff-location" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type Location"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <i className="fas fa-map-marker-alt text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Passengers</label>
                <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
                    <input type="number" min={0} id="passengers" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="0"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <label htmlFor="cab-type" className="block text-sm font-medium text-gray-700">Cab Type</label>
                <div className="mt-1 sm:w-[210px] md:w-52 relative rounded-md shadow-sm">
                    <select id="cab-type" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option selected>Choose Cab</option>
                        <option>Hatchback</option>
                        <option>Sedan</option>
                        <option>Suv</option>
                        <option>Muv</option>
                        <option>Van</option>
                    </select>
                    
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">Pick Up Date</label>
                <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
                    <input type="text" id="pickup-date" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="MM/DD/YY"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <i className="fas fa-calendar-alt text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700">Pick Up Time</label>
                <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
                    <input type="text" id="pickup-time" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="00:00 AM"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <i className="fas fa-clock text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Your Phone Number</label>
                <div className="mt-1 md:w-52 relative rounded-md shadow-sm">
                    <input type="text" id="phone-number" className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type Number"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div className=" items-center mt-4">
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="">
          <a
            href="#_"
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
            <span className="relative">Book Now</span>
          </a>
        </div>
                </div>
           
           
        </form>
    </div>
</div>

  
  )
}

export default Form
