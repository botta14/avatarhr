import React from "react";
import "./Home.css";

const WhyChooseUs = () => {
    return (
        <section className="container-fluid py-5">
            <div className="container py-5">
                <div className="section-title text-center pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h5 className="fw-bold text-black text-uppercase">Why Choose Us</h5>
                    <h4 className="mb-0 text-info">Experience the Future of Virtual Meetings</h4>
                </div>
                <div className="row g-5 align-items-center">
                    {/* Left Features */}
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 text-center">
                                <div className="icon-box mx-auto d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <h4 className="text-black">AI-Powered Avatars</h4>
                                <p className="mb-0 text-secondary">
                                    Our cutting-edge avatars simulate lifelike interactions, bridging the gap between AI and human experience.
                                </p>
                            </div>

                            <div className="col-12 text-center">
                                <div className="icon-box">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <h4 className="text-black">Flexible and On-Demand</h4>
                                <p className="mb-0 text-secondary">
                                    Access interview practice anytime, anywhere, with sessions that fit your schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="col-lg-4">
                        <div className="position-relative h-100">
                            <img
                                className="why-image shadow"
                                src="../images/123.jpg"
                                alt="Virtual Meeting"
                            />
                        </div>
                    </div>

                    {/* Right Features */}
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 text-center">
                                <div className="icon-box">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h4 className="text-black">AI-Driven Insights</h4>
                                <p className="mb-0 text-secondary">
                                    Leverage advanced analytics to understand your strengths and areas for improvement after each session.
                                </p>
                            </div>
                            <div className="col-12 text-center">
                                <div className="icon-box">
                                    <i className="fa-solid fa-headset"></i>
                                </div>
                                <h4 className="text-black">24/7 Support</h4>
                                <p className="mb-0 text-secondary">
                                    Our dedicated support team is always available to address your questions and ensure your success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
