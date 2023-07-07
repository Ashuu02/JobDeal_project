import "./App.css";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import ReferToEarn from "./Components/ReferToEarn";
import backgroundImage from "./images/LandingPage.png";

function App() {
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <>
      <div className=" font-raleway bg-cover bg-[#041410]   overflow-hidden bg-center min-h-screen" style={imageStyle}>
        <Navbar />
        <Home/>
        <Features/>
        <HowItWorks/>
        <ReferToEarn/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
