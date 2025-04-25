import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ استدعاء useNavigate
import "./About.css";
import VisionMission from "../../components/VisionMission";
import TeamCarousel from "../../components/TeamCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const About = () => {
    const navigate = useNavigate(); // ✅ تهيئة الـ navigate



    useEffect(() => {
        const handleScroll = () => {
            const boxes = document.querySelectorAll(".statBox");
            boxes.forEach((box) => {
                const boxTop = box.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (boxTop < windowHeight - 100) {
                    box.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []);

    return (
        <>
            <section
                className="aboutHeroSection"
                style={{
                    backgroundImage: "url('/images/aboutLogo.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >

                <div className="overlay">
                    <div className="aboutText">
                        <h1>About Us</h1>
                        <p>Revolutionizing Online Meetings with AI-Powered Avatar</p>

                        <button
                            className="watchDemoBtn"
                            aria-label="Watch demo video"
                            onClick={() => navigate("/demo")}
                        >
                            Watch Demo
                        </button>
                        <div
                            className="scrollIndicator"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                document.querySelector(".facts")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <span>&#8595;</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid facts py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        {[
                            { icon: "fa-users", title: "Happy Clients", count: "450", bg: "primary", text: "white" },
                            { icon: "fa-check", title: "Interviews Conducted", count: "750", bg: "light", text: "primary" },
                            { icon: "fa-star", title: "Positive Feedback", count: "450", bg: "primary", text: "white" }
                        ].map((stat, index) => (
                            <div className="col-lg-4 wow zoomIn" key={index}>
                                <div
                                    className="shadow d-flex align-items-center justify-content-center p-4"
                                    style={{
                                        height: "150px",
                                        backgroundColor: stat.bg === "primary" ? "var(--primary)" : "var(--light)"
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded mb-2"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: stat.text === "white" ? "white" : "var(--primary)"
                                        }}
                                    >
                                        <i className={`fa ${stat.icon}`} style={{ color: stat.text === "white" ? "white" : "var(--primary)" }}></i>
                                    </div>

                                    <div className="ps-4">
                                        <h5 className={`text-${stat.text} mb-0`}>{stat.title}</h5>
                                        <h1 className={`text-${stat.text} mb-0 counter`}>{stat.count}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <VisionMission />
            <TeamCarousel />
        </>
    );
};

export default About;
