import React from "react";
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 

function Icon({ id, open }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired
};

 

export default function Faq() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
 
  return (
    <div id="faq" className=" grid sm:px-10 md:px-28 sm:grid-cols-1 lg:grid-cols-2 py-28 gap-10">
    <div data-aos="fade-right"
    >
        <h1 className="text-xl text-orange-800">FAQ&apos;s</h1>
        <h1 className="sm:text-[40px] md:text-[60px]">
        General frequently asked questions
        </h1>
        <p className="text-lg">We&apos;ve compiled a comprehensive list of commonly asked queries to provide you with quick and informative responses. Whether you&apos;re curious about booking check here.</p>
        <img src="/img/faq.jpg "></img>
    </div>
    <div data-aos="fade-left"
     className="flex flex-col  space-y-10 px-10 ">

      <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="font-Chau font-medium" onClick={() => handleOpen(1)}>How can I book a taxi with your service ?</AccordionHeader>
        <AccordionBody className="font-Chau">
        Booking a taxi with us is easy! You can book online through our website or mobile app, call our 24/7 customer support, or even hail a cab from the street. Choose the method that suits you best.
        </AccordionBody>
      </Accordion>
      <Accordion  open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="font-Chau font-medium" onClick={() => handleOpen(2)}>
        Is it possible to schedule a taxi in advance ?
        </AccordionHeader>
        <AccordionBody className="font-Chau ">
        Yes, absolutely! We offer the option to pre-book a taxi for your desired date and time. Just let us know your schedule, and we&apos;ll ensure a cab is ready and waiting to pick you up.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="font-Chau font-medium" onClick={() => handleOpen(3)}>
        How do you calculate fares for taxi rides ?
        </AccordionHeader>
        <AccordionBody className="font-Chau">
        Fares are typically calculated based on factors like distance traveled and time taken. You can check our fare estimator for an estimate before booking.
        </AccordionBody>
      </Accordion>
      <Accordion  open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="font-Chau font-medium" onClick={() => handleOpen(4)}>
        What is your cancellation policy ?
        </AccordionHeader>
        <AccordionBody className="font-Chau">
        You can cancel your booking without any charge if done within a specified time frame. Check our cancellation policy for details.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="font-Chau font-medium" onClick={() => handleOpen(5)}>
        What Modes Of Payments Are Accepted?
        </AccordionHeader>
        <AccordionBody className="font-Chau">
        Presently SGT TRAVELS accepts payment in cash and online with UPI and Bank Transfer which is accepted in our gateway.
        </AccordionBody>
      </Accordion>
   
   </div>
    </div>
  );
}