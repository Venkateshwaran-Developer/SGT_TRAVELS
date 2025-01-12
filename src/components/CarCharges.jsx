
import "boxicons";

function CarCharges() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            
        });
    });
});




  return (
    <div id="taxirate" className="w-full h-full flex flex-col py-20 justify-center items-center ">
      <h1 className="text-[25px] text-orange-800">Taxi Rate</h1>
      <h1 className="text-[50px] sm:text-[40px]">Our Taxi Rate For You</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 place-content-center place-items-center  w-full h-auto ">
        <div
          data-aos="fade-left"
          className="flex flex-col justify-between items-center w-80 rounded-2xl h-auto drop-shadow-2xl p-5"
        >
          <img className="w-56 h-56" src="/img/HATCHBACK.png"></img>
          <div className="flex flex-col justify-center items-center pb-5 ">
            <h2>Hatchback</h2>
            <h2>Celerio, Bolt etc..</h2>
          </div>

          <div className="flex justify-center rounded-3xl w-full bg-gray-200">
            <div className="flex flex-col items-start justify-center  h-auto p-5 gap-2 rounded-2xl">
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Base Charge:₹11/km</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>local rides</h3>
              </div>
              <div className="flex  space-x-2">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Quick and buget travels</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>24/7 support</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Easily accessible</h3>
              </div>

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
                <span className="relative">Book Now</span>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-between items-center w-80 rounded-2xl h-auto drop-shadow-2xl p-5"
        >
          <img className="w-60 h-40 mb-16" src="/img/SEDAN.png"></img>
          <div className="flex flex-col justify-center items-center pb-5 ">
            <h2>Sedan</h2>
            <h2>Swift desire, Etios etc..</h2>
          </div>

          <div className="flex justify-center rounded-3xl w-full bg-gray-200">
            <div className="flex flex-col items-start justify-center  h-auto p-5 gap-2 rounded-2xl">
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Base Charge:₹12/km</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Local and outstation trips</h3>
              </div>
              <div className="flex  space-x-2">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3> Budget friendly rides</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>24/7 support</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Comfortable rides</h3>
              </div>

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
                <span className="relative">Book Now</span>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-between items-center w-80 rounded-2xl h-auto drop-shadow-2xl p-5"
        >
          <img className="w-80 h-56" src="/img/SUV.png"></img>
          <div className="flex flex-col justify-center items-center pb-5 ">
            <h2>SUV</h2>
            <h2>Tavera, Xylo etc..</h2>
          </div>

          <div className="flex justify-center rounded-3xl w-full bg-gray-200">
            <div className="flex flex-col items-start justify-center  h-auto p-5 gap-2 rounded-2xl">
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Base Charge:₹16/km</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Suite for luxuries rides</h3>
              </div>
              <div className="flex  space-x-2">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Supoorts world class quality</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>24/7 support</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Suitable for families</h3>
              </div>

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
                <span className="relative">Book Now</span>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-between items-center w-80 rounded-2xl h-auto drop-shadow-2xl p-5"
        >
          <img className="w-56 h-56" src="/img/MUV.png"></img>
          <div className="flex flex-col justify-center items-center pb-5 ">
            <h2>MUV</h2>
            <h2>Innova, Ertiga etc..</h2>
          </div>

          <div className="flex justify-center rounded-3xl w-full bg-gray-200">
            <div className="flex flex-col items-start justify-center  h-auto p-5 gap-2 rounded-2xl">
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Base Charge:₹17/km</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Suites for family and outstations</h3>
              </div>
              <div className="flex  space-x-2">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>One way and round rides</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>24/7 support</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Permium world class experince</h3>
              </div>

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
                <span className="relative">Book Now</span>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-between items-center w-80 rounded-2xl h-auto drop-shadow-2xl p-5"
        >
          <img className="w-56 h-56" src="/img/VAN.png"></img>
          <div className="flex flex-col justify-center items-center pb-5 ">
            <h2>VANS</h2>
            <h2>Suzuki Eeco etc..</h2>
          </div>

          <div className="flex justify-center rounded-3xl w-full bg-gray-200">
            <div className="flex flex-col items-start justify-center  h-auto p-5 gap-2 rounded-2xl">
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Base Charge:₹13/km</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Suites for family and outstations</h3>
              </div>
              <div className="flex  space-x-2">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>One way and round rides</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>24/7 support</h3>
              </div>
              <div className="flex space-x-2 ">
                <box-icon
                  size="xs"
                  type="solid"
                  color="black"
                  name="right-arrow"
                ></box-icon>
                <h3>Permium world class experince</h3>
              </div>

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
                <span className="relative">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCharges;
