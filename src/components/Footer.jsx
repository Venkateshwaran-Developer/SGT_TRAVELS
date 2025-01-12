import 'boxicons';
import './Footer.css';
function Footer() {

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  
 
  return (
    <div>

        <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-20 md:px-20 lg:px-36  bg-black text-white p-4">
        <div className='sm:pb-10'>
          <h1 className="text-3xl font-Chau py-5  ">SGT Travels</h1>
          <p className="font-Chau text-md">
            We are a dedicated team of professionals committed to providing
            top-notch transportation services with years of experience.
          </p>
          <div className="flex flex-col py-10 gap-5">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <a href='tel://+917639591469'>+91 76395 91469</a>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-geo-fill sm:w-12 sm:h-12  md:w-7 md:h-7"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                />
              </svg>
              <h1>
                NO:3/5 Muthu Vanigavalagm Velliyankadu South Opp Of Samu Medical Tirupur - 641604.
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <a href='mailto://sgttravels@gmail.com'>sgttravels@gmail.com</a>
            </div>
          </div>
          <div className='flex gap-5'>
          <div className='flex justify-center items-center h-8 w-8 hover:bg-white bg-gray-500 rounded-full'>
          <a href="whatsapp://send?text=Welcome to SGT Travels... How can i help you..?!&phone=+917639591469" className='flex justify-center'><box-icon  type='logo' name='whatsapp'></box-icon></a>
            
          </div>
          <div className='flex justify-center items-center h-8 w-8 hover:bg-white bg-gray-500 rounded-full'>
          <box-icon  type='logo' name='instagram' ></box-icon>
            
          </div>
          <div className='flex justify-center items-center h-8 w-8 hover:bg-white bg-gray-500 rounded-full'>
          <box-icon name='facebook' type='logo' ></box-icon>
            
          </div>
          
          </div>
        </div>
        <div className="flex sm:flex-col md:flex-row justify-center items-start sm:gap-10 md:gap-24 w-full h-full ">
          <div className="flex flex-col gap-5">
            <h1 className="border-b-2 font-Chau text-xl">Quick Links</h1>
            <ul className='space-y-2'>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#home'><li>Home</li></a>

            </div>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#aboutus'><li>AboutUs</li></a>

            </div>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#whyus'><li>WhyUs</li></a>

            </div>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#services'><li>Services</li></a>

            </div>
            
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#reviews'><li>Reviews</li></a>

            </div>
           
           
            </ul>
          </div>
          <div className="flex flex-col gap-5 ">
            <h1 className="border-b-2 font-Chau text-xl">Support Center</h1>
            <ul className='space-y-2'>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#faq'><li>FAQ</li></a>

            </div>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#booking'><li> Booking</li></a>

            </div>
            <div className='flex gap-2'>
            <box-icon size='xs' type='solid' color='white'  name='right-arrow'></box-icon> <a href='#taxirate'><li>Taxi Rates</li></a>

            </div>
           
              
            </ul>
          </div>
        </div>
        <div className="flex flex-col  md:justify-start w-full h-full md:items-start sm:pt-10 lg:pt-0 gap-5 lg:px-10">
          <h1 className=" border-b-2 font-Chau text-xl">News Letter</h1>

          <p>Subscribe Our Newsletter To Get Latest Update And News</p>
          <input
            className="p-4 rounded-2xl"
            type="email"
            placeholder="Enter Your Email"
          ></input>
          <div>
            <a
              href="#_"
              className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Subscribe
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="wrapper  bg-black ">
          <div className="flex font-Bungee text-white text-[80px] justify-center items-center item item1">SGT TOURS AND TRAVELS</div>
          <div className="flex font-Bungee text-white text-[80px] justify-center items-center item item2">SGT TOURS AND TRAVELS</div>
          
        </div>
    </div>
  );
}

export default Footer;
