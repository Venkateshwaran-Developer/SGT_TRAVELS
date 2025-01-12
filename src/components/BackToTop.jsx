import { useEffect, useState } from "react";
import icon from "/img/scroll-to-top.png";
import whatsapp from "/img/whatsapp-svg.svg";
import call from "/img/call-out.png";


function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrolling = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <div>
      <img
        className={`w-10  h-10 fixed right-5 bottom-5 z-50 cursor-pointer ${
          showButton ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
        src={icon}
      ></img>
     <a href="whatsapp://send?text=Welcome to SGT Travels... How can i help you..?!&phone=+917639591469"> <img className="w-10  h-10 fixed right-5 bottom-[70px] z-50 cursor-pointer" src={whatsapp}></img></a>
     <a href='tel://+917639591469'><img className="w-10  h-10 fixed right-5 bottom-[120px] z-50 cursor-pointer" src={call}></img></a>


    </div>
  );
}

export default BackToTop;
