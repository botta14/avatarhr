import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";
import VisionMission from "../../components/VisionMission";
import TeamCarousel from "../../components/TeamCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
    const [animatedStats, setAnimatedStats] = useState({});

    // Track scroll position for parallax effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            
            // Stats animation on scroll
            const statsSection = document.querySelector(".facts");
            if (statsSection) {
                const statsSectionTop = statsSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (statsSectionTop < windowHeight - 100) {
                    document.querySelectorAll(".counter").forEach(counter => {
                        const countTo = parseInt(counter.innerText);
                        if (!animatedStats[counter.id] && countTo > 0) {
                            animateCount(counter.id, 0, countTo, 2000);
                            setAnimatedStats(prev => ({...prev, [counter.id]: true}));
                        }
                    });
                }
            }
            
            // Animate any elements with the "reveal" class
            document.querySelectorAll(".reveal").forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, [animatedStats]);

    const animateCount = (id, start, end, duration) => {
        let startTimestamp = null;
        const element = document.getElementById(id);
        if (!element) return;
        
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            element.innerHTML = currentCount;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.innerHTML = end;
            }
        };
        
        window.requestAnimationFrame(step);
    };

    // Animation variants for Framer Motion
    const heroTextVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <>
            <section className="aboutHeroSection">
                <div 
                    className="hero-background" 
                    style={{ 
                        transform: `translateY(${scrollY * 0.4}px)`,
                        backgroundImage: "url('/images/aboutLogo.png')"
                    }}
                />
                
                <div className="overlay">
                    <motion.div 
                        className="aboutText"
                        initial="hidden"
                        animate="visible"
                        variants={heroTextVariants}
                    >
                        <motion.div className="subtitle" variants={itemVariants}>
                            <span className="line"></span>
                            <span>Welcome to AvatarHR</span>
                        </motion.div>
                        
                        <motion.h1 variants={itemVariants}>
                            About <span className="gradient-text">Us</span>
                        </motion.h1>
                        
                        <motion.p variants={itemVariants}>
                            <i className="fas fa-robot icon-inline"></i> Revolutionizing Online Meetings with AI-Powered Avatar Technology
                        </motion.p>

                        <motion.div className="hero-buttons" variants={itemVariants}>
                            <button
                                className="watchDemoBtn"
                                aria-label="Watch demo video"
                                onClick={() => navigate("/demo")}
                            >
                                <i className="fas fa-play-circle me-2"></i>
                                Watch Demo
                            </button>
                            
                            <button 
                                className="learnMoreBtn"
                                onClick={() => navigate("/features")}
                            >
                                <i className="fas fa-info-circle me-2"></i>
                                Learn More
                            </button>
                        </motion.div>
                        
                        <motion.div
                            className="scrollIndicator"
                            onClick={() => {
                                document.querySelector(".facts")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            animate={{ 
                                y: [0, 10, 0],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 2 
                            }}
                        >
                            <i className="fas fa-chevron-down"></i>
                            <span>Scroll to explore</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <div className="container-fluid facts py-5 pt-lg-0">
                <div className="stats-glow left"></div>
                <div className="stats-glow right"></div>
                
                <div className="container py-5 pt-lg-0">
                    <div className="section-header reveal fade-up">
                        <h6 className="section-label">
                            <i className="fas fa-chart-line me-2"></i>
                            Our Achievements
                        </h6>
                        <h2 className="section-title">Company <span className="gradient-text">Milestones</span></h2>
                        <p className="section-description">
                            Discover how AvatarHR has transformed the way businesses conduct remote interviews
                        </p>
                    </div>
                    
                    <div className="row g-4 stats-row">
    {[
        { icon: "fa-users", title: "Happy Clients", count: "450", bg: "primary", text: "white", id: "client-count" },
        { icon: "fa-check", title: "Interviews Conducted", count: "750", bg: "dark", text: "white", id: "interview-count" },
        { icon: "fa-star", title: "Positive Feedback", count: "96", suffix: "%", bg: "primary", text: "white", id: "feedback-count" }
    ].map((stat, index) => (
        <div className="col-md-6 col-lg-4 reveal fade-up" key={index} style={{ transitionDelay: `${index * 0.2}s` }}>
            <motion.div 
                className={`stat-card ${stat.bg}-card`}
                whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 200, damping: 15 }
                }}
            >
                <div className="stat-icon">
                    <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="stat-content">
                    <h3 className="stat-title">{stat.title}</h3>
                    <div className="stat-value">
                        <span id={stat.id} className="counter">{stat.count}</span>
                        {stat.suffix && <span className="suffix">{stat.suffix}</span>}
                    </div>
                </div>
            </motion.div>
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