import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Landing.css";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="BodyIndex">
            <Navbar />
            <div className="container-fluid pt-5 vh-100 d-grid justify-content-center px-0">
                <div className="row mt-5 pt-5 text-center mx-0">
                    <div className="col-12">
                        <h1>Your Virtual HR Partner for <br /> Next-Gen Recruitment</h1>
                        <p className="text-secondary fw-bolder">
                            MetaHire is transforming the hiring process with AI-driven candidate analysis...
                        </p>
                    </div>
                </div>

                {/* ✅ الأزرار المعدلة بنفس ستايل watchDemoBtn */}
                <div className="row my-5 text-center btn-container mx-0">
                    <div className="col-md-6">
                        <button
                            className="watchDemoBtn altBtn"
                            onClick={() => navigate("/home")}
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button
                            className="watchDemoBtn"
                            onClick={() => navigate("/demo")}
                        >
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="row mt-5 mx-0">
                    <div className="col-12 p-0 text-center">
                        <img src="/images/logo 2.jpeg" alt="Logo" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
