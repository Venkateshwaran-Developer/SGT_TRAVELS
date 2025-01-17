

import React,{useEffect,useState} from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import car from '/video/animation.mp4';
import { motion } from "motion/react";


export default function Header() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

 

  const items = [
    {
      image: [car],
    },
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    ,
    {
      image: [],
    }
    


  ];

  return (
    <>
    <div id="home" className={`navbar w-full  ${open ? "w-full h-full z-50 fixed ":""}   h-full ${scrolled ? "scrolled  " : ""} `}>
    <div className={`flex bg-white ${open ? "":"fixed z-10 "}   w-full justify-center items-center ${scrolled ? "shadow-2xl " : ""} `}>
    <motion.div
     
     initial={{ opacity: 0 , x:-100}}
     transition={{type:"spring",delay:1.2}}
      animate={{opacity:1, x:0 }}

     >
    <div className=" flex text-[20px]  items-center font-Chau justify-center">
      <h1>SGT TRAVELS</h1>
    </div>
    </motion.div>
    <div className="relative flex bg-white items-center">
        <div className="relative flex h-20 sm:max-w-[40vw] md:max-w-[70vw] overflow-hidden ">
          <div className="flex w-max h-full  animate-marquee sm:[--duration:20s] md:[--duration:20s] hover:[animation-play-state:paused]">
            {[ ...items].map((item, index) => (
              <div key={index} >
                <div className="  w-[16rem]  border-0 border-white bg-white ">
                  <video className="h-32" >
                    <source  src={item.image} type="video/mp4">

                    </source>
                  </video>
                 {/* <img src={item.image}></img>  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
     
     initial={{ opacity: 0 , x: 100}}
     transition={{type:"spring",delay:1.2}}
      animate={{opacity:1, x:0 }}

     >
   <div className="flex justify-center items-center ">
   <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
        onClick={openDrawer}
        className="w-10 h-10  cursor-pointer flex justify-center items-center"
      >
       
          <path
            fill="#000000"
            d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z"
          ></path>{" "}
        
      </svg>
     
      
   </div>
   </motion.div>
   <React.Fragment  >
      
      
      <Drawer open={open} className="bg-green" onClose={closeDrawer}>
        <div className="mb-2 bg-green flex font-Chau items-center justify-between p-4">
          <Typography className="font-Chau text-2xl text-white"  color="blue-gray">
            SGT TRAVELS
          </Typography>
          <IconButton variant="text" color="white" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="bg-green">
        <a href="#booking">
          <ListItem className="text-white">
            <ListItemPrefix>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Book Your Ride
          </ListItem></a>
          <a href="#aboutus">
          <ListItem className="text-white">
            <ListItemPrefix>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
           AboutUs
          </ListItem></a>
          <a href="#services">
          <ListItem className="text-white">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Services
          </ListItem></a>
          <a href="#taxirate">
          <ListItem className="text-white">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Pricing
          </ListItem></a>
          <a href="#reviews">
          <ListItem className="text-white">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Testimonials
          </ListItem></a>
          <a href="#faq">
          <ListItem className="text-white">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
           FAQ
          </ListItem></a>
        </List>
        
      </Drawer>
    </React.Fragment>
</div>
    

    </div>
    </>
  );
}
