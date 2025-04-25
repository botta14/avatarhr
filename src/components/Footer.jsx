import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            {/* Main Footer Section */}
            <div className="container-fluid bg-dark text-light pt-5 px-0">
                <div className="container">
                    <div className="row gx-5">
                        {/* About Section */}
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div
                                className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4"
                                style={{
                                    background: "linear-gradient(10deg, #141D24, #364751)",
                                    borderRadius: "10px",
                                }}
                            >
                                <a href="/" className="navbar-brand">
                                    <h3 className="m-0">
                                        <img src="/images/logo.png" alt="logo" className="footer-logo" />etaHire
                                    </h3>
                                </a>
                                <p className="mt-3 mb-4 text-info">
                                    Empowering seamless virtual meetings and collaboration through cutting-edge AI-driven solutions.
                                </p>
                                <form>
                                    <div className="input-group">
                                        <input type="email" className="form-control border-white p-3" placeholder="Your Email" required />
                                        <button className="btn btn-dark" type="submit">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h3 className="text-light mb-4">Get In Touch</h3>
                                    <div className="d-flex mb-2">
                                        <i className="fas fa-envelope text-primary me-2"></i>
                                        <p className="mb-0 text-light">contact@MetaHire.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fas fa-phone text-primary me-2"></i>
                                        <p className="mb-0 text-light">+1 800 123 4567</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-primary btn-square me-2" href="https://linkedin.com">
                                            <i className="fab fa-linkedin-in fw-normal px-3 py-2"></i>
                                        </a>
                                        <a className="btn btn-primary btn-square" href="https://google.com">
                                            <i className="fab fa-google fw-normal px-3 py-2"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* About Avatar Tech */}
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h3 className="text-light mb-4">About Avatar Technology</h3>
                                    <p className="text-light">
                                        Explore how our AI-driven avatars enable real-time facial expressions and interaction, bringing virtual presence to life.
                                    </p>
                                    <a className="text-light text-decoration-none learn-more-link" href="/about">
                                        <i className="fas fa-arrow-right text-primary me-2"></i> Learn More
                                    </a>
                                </div>

                                {/* Try Avatar */}
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h3 className="text-light mb-4">Experience the Avatar</h3>
                                    <p className="text-light">
                                        Try our real-time avatar interactions and explore how facial expressions enhance your virtual experience.
                                    </p>
                                    <a className="btn btn-primary btn-lg" href="/try-avatar">Try the Avatar Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer">
                <div className="container-fluid text-white">
                    <div className="container text-center">
                        <div className="row justify-content-end">
                            <div className="col-lg-8 col-md-6">
                                <div className="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
                                    <p className="mb-0 text-secondary">
                                        &copy; <a className="text-white text-decoration-none" href="/">MetaHire</a>. All Rights Reserved 2025.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
