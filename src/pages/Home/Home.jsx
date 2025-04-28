import React from "react";
import Navbar from "../../components/Navbar";
import Features from "./Features";
import "./Home.css";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import Pricing from "../../components/Pricing";

const Home = () => {
    return (
        <div className="BodyHome">
            <Features />
            <HowItWorks />
            <WhyChooseUs />
            <Pricing />
        </div>
    );
};

export default Home;
