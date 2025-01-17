// import bg from '../assets/1.jpg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

function Form() {

    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [passengers, setPassengers] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
    
        const serviceId = "service_sw1ay1j";
        const templateId = "template_viksluu";
        const publicKey = "FOA_HTaJuo3XR2oe2";
    
        const templateParams = {
          from_pickup: pickup,
          from_drop: drop,
          from_passengers: passengers,
          from_name: name,
          from_date: date,
          from_time: time,
          from_phone: phone,
          to_name: "SGT TRAVELS",
        };
    
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setPickup('');
          setDrop('');
          setPassengers('');
          setName('');
          setDate('');
          setTime('');
          setPhone('');
          toast.success('Our team will contact you soon');
        }
        )
        .catch((error) => {
          console.log('FAILED...', error);
          toast.error('Something went wrong');
        });
    
    
    
    
    
      }

  return (
    <div id="booking" className="  w-full  h-full py-20">
    <ToastContainer/>
      {/* <img className='absolute object-cover w-full h-full' src={bg}></img> */}
      <div className=" lg:px-52 shadow-white drop-shadow-2xl ">
        <h1 className="text-3xl flex justify-center py-10 font-Chau  mb-6">
          Book Your Ride
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-full place-content-center place-items-center">
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Type Name"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <i className="fas fa-user text-gray-400"></i>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700"
            >
              Your Phone Number
            </label>
            <div className="mt-1 md:w-52 relative rounded-md shadow-sm">
              <input
                type="number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone-number"
                className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Type Number"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="pickup-location"
              className="block text-sm font-medium text-gray-700"
            >
              Pick Up Location
            </label>
            <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
              <input
                type="text"
                id="pickup-location"
                value={pickup}
                required
                onChange={(e) => setPickup(e.target.value)}
                className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md  sm:text-sm"
                placeholder="Type Location"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-map-marker-alt text-gray-400"></i>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="dropoff-location"
              className="block text-sm font-medium text-gray-700"
            >
              Drop Off Location
            </label>
            <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
              <input
                type="text"
                value={drop}
                required
                onChange={(e) => setDrop(e.target.value)}
                id="dropoff-location"
                className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Type Location"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-map-marker-alt text-gray-400"></i>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="passengers"
              className="block text-sm font-medium text-gray-700"
            >
              Passengers
            </label>
            <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
              <input
                type="number"
                min={0}
                id="passengers"
                required
                value={passengers}
                onChange={(e) => setPassengers(e.target.valueAsNumber)}
                className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="0"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
            </div>
          </div>
         
          {/* <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="cab-type"
              className="block text-sm font-medium text-gray-700"
            >
              Cab Type
            </label>
            <div className="mt-1 sm:w-[210px] md:w-52 relative rounded-md shadow-sm">
              <select
                id="cab-type"
                value={cabtype}
                required
                onChange={(e) => setCabtype(e.target.value)}
                className="block border-2 p-3 w-52 pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option selected>Choose Cab</option>
                <option>Hatchback</option>
                <option>Sedan</option>
                <option>Suv</option>
                <option>Muv</option>
                <option>Van</option>
              </select>
            </div>
          </div> */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="pickup-date"
              className="block text-sm font-medium text-gray-700"
            >
              Pick Up Date
            </label>
            <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
              <input
                type="Date"
                id="pickup-date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block border-2 p-3 w-52 pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="MM/DD/YY"
              />
              
            </div>
          </div>
          {/* <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="pickup-time"
              className="block text-sm font-medium text-gray-700"
            >
              Pick Up Time
            </label>
            <div className="mt-1 sm:w-full md:w-52 relative rounded-md shadow-sm">
              <input
                type="text"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
                id="pickup-time"
                className="block border-2 p-3 w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="00:00 AM"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <i className="fas fa-clock text-gray-400"></i>
              </div>
            </div>
          </div> */}
           <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <label
              htmlFor="cab-type"
              className="block text-sm font-medium text-gray-700"
            >
              Pickup Time
            </label>
            <div className="mt-1 sm:w-[210px] md:w-52 relative rounded-md shadow-sm">
              <select
                id="cab-type"
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
                className="block border-2 p-3 w-52 pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option selected>Choose Time</option>
                <option>12.00 AM</option>
                <option>12.30 AM</option>
                <option>01.00 AM</option>
                <option>01.30 AM</option>
                <option>02.00 AM</option>
                <option>02.30 AM</option>
                <option>03.00 AM</option>
                <option>03.30 AM</option>
                <option>04.00 AM</option>
                <option>04.30 AM</option>
                <option>05.00 AM</option>
                <option>05.30 AM</option>
                <option>06.00 AM</option>
                <option>06.30 AM</option>
                <option>07.00 AM</option>
                <option>07.30 AM</option>
                <option>08.00 AM</option>
                <option>08.30 AM</option>
                <option>09.00 AM</option>
                <option>09.30 AM</option>
                <option>10.00 AM</option>
                <option>10.30 AM</option>
                <option>11.00 AM</option>
                <option>11.30 AM</option>
                <option>12.00 PM</option>
                <option>12.30 PM</option>
                <option>01.00 PM</option>
                <option>01.30 PM</option>
                <option>02.00 PM</option>
                <option>02.30 PM</option>
                <option>03.00 PM</option>
                <option>03.30 PM</option>
                <option>04.00 PM</option>
                <option>04.30 PM</option>
                <option>05.00 PM</option>
                <option>05.30 PM</option>
                <option>06.00 PM</option>
                <option>06.30 PM</option>
                <option>07.00 PM</option>
                <option>07.30 PM</option>
                <option>08.00 PM</option>
                <option>08.30 PM</option>
                <option>09.00 PM</option>
                <option>09.30 PM</option>
                <option>10.00 PM</option>
                <option>10.30 PM</option>
                <option>11.00 PM</option>
                <option>11.30 PM</option>
              </select>
            </div>
          </div>
         
          <div className=" items-center mt-4">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=""
            >
              <button
                type='submit'
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
              </button>
              
            </div>

          </div>
          
        </form>
        
      </div>
      
    </div>
  );
}

export default Form;
