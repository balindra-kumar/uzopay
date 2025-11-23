
import "./assets/style.sass"
import WOW from "wowjs";
import HeroSection from "./components/HeroSection";
import PaymentsSection from "./components/PaymentsSection";
import AnimatedText from "./components/AnimatedText";
import PayoutSection from "./components/PayoutSection";
import HeroBanner from "./components/HeroBanner";
import PartnerSupport from "./components/PartnerSupport";
// import ExpertiseSlider from "./components/ExpertiseSlider";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PaymentTabs from "./components/PaymentTabs";
import BackgroundVideo from "./components/BackgroundVideo";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  useEffect(()=>{
 new WOW.WOW({
    boxClass: "wow",       // elements with this class animate
    animateClass: "animated", // animation CSS class
    offset: 0,             // distance to start animation
    mobile: true,          // mobile par allow
    live: false            // dynamically added elements ko observe na kare
  }).init();
 }, []);
  return (
    <div>
      <BrowserRouter>
     <HeroSection/>
     <PaymentsSection/>
     <AnimatedText/>
     <PayoutSection/>
     {/* <img src="assets/img/Frame 1261152780.png" className="img-fluid"/> */}
     <BackgroundVideo />
     <HeroBanner/>
     <PartnerSupport/>
     <PaymentTabs/>
     <Testimonials/>
     {/* <ExpertiseSlider/> */}
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
