import about from "/img/AboutUs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

function AboutUs() {

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <div id="aboutus" className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 sm:px-10 py-32 md:px-28">
      <div data-aos="fade-up-right">
        <img className="" src={about}></img>
      </div>
      <div data-aos="fade-up-left" className="">
        <h1 className="text-[30px] text-orange-900">About Us</h1>
        <h1 className="text-[50px]">Choose SGT Travel For Best Travel Experince!</h1>
        <p className="text-[18px] font-extralight">
          SGT Travel represents the Taxi Rental Service Company based in
          Tirupur,Tamilnadu, India. We emerged into business in the year 2005,
          which is the first Tirupur based online booking system of cab rentals
          in India. We established as a best car rental service in Tirupur,
          Tamilnadu. Our services aimed to provide people to think taxi a better
          option than a bus ride. Through cutting age technology, we provide
          great deal in car rental with the guaranteed lowest price. We
          constantly provide new, clean cars with professional and experienced
          chauffeurs. Our 24x7 online reservation system offer you to hire car
          any where in Tirupur by just on a single mouse click. Bookings at
          bluetaxi.in India can be made by logging on to the website, calling
          the 24x7 customer care center or walking into any of the Blue Taxi.
        </p>

      </div>
    </div>
  );
}

export default AboutUs;
