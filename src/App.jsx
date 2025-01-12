import AboutUs from "./components/AboutUs";
import BackToTop from "./components/BackToTop";
import Banner from "./components/Banner";
import CarCharges from "./components/CarCharges";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";



function App() {

  return (
    <div className="!font-Chau flex   flex-col overflow-hidden h-full w-full">
      <Header/>
      <BackToTop/>
      
      <Hero/>
      
      
      <Form/>

      <WhyUs/>
      <Banner/>
      <AboutUs/>
      <Services/>
      <CarCharges/>
      <Faq/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;
