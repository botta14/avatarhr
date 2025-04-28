import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRight, FiPlay, FiUsers, FiClock, FiBarChart2, FiShield, FiArrowDown } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import "./Landing.css";

const Feature = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      className="feature-card"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: index * 0.15,
            ease: [0.25, 0.1, 0.25, 1.0]
          }
        }
      }}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div 
        className="feature-card-content"
        variants={{
          hover: { y: -8 }
        }}
      >
        <motion.div 
          className="feature-icon-wrapper"
          variants={{
            hover: { scale: 1.1, rotate: 5 },
            tap: { scale: 0.95 }
          }}
        >
          <div className="feature-icon">{icon}</div>
        </motion.div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        <motion.div 
          className="feature-shine"
          variants={{
            hidden: { opacity: 0 },
            hover: { 
              opacity: 1,
              transition: {
                duration: 0.5
              }
            }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Landing = () => {
    const navigate = useNavigate();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    
    // Refs for scroll animations
    const heroRef = useRef(null);
    const scrollRef = useRef(null);
    const featuresSectionRef = useRef(null);
    
    // Scroll animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
    
    // Parallax effect for background blobs
    const blob1X = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const blob2X = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -70]);
    
    // Scroll to features section
    const scrollToFeatures = () => {
      featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="landing-page">
            <Navbar />
            
            <motion.section 
                className="hero-section"
                ref={heroRef}
                style={{ 
                  opacity: heroOpacity,
                  scale: heroScale,
                  y: heroY
                }}
            >
                <div className="hero-background">
                    <motion.div 
                        className="blob blob-1" 
                        style={{ x: blob1X, y: blob1Y }}
                    />
                    <motion.div 
                        className="blob blob-2" 
                        style={{ x: blob2X, y: blob2Y }}
                    />
                </div>
                
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="hero-content">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  duration: 0.8, 
                                  ease: [0.25, 0.1, 0.25, 1.0] 
                                }}
                            >
                                <motion.h1 
                                    className="hero-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    Your Virtual HR Partner for 
                                    <motion.span 
                                        className="gradient-text"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ 
                                          opacity: 1, 
                                          scale: 1,
                                          transition: { 
                                            duration: 0.8,
                                            delay: 0.5
                                          }
                                        }}
                                        whileHover={{
                                          textShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
                                          scale: 1.02,
                                          transition: { duration: 0.3 }
                                        }}
                                    > Next-Gen Recruitment</motion.span>
                                </motion.h1>
                                
                                <motion.p 
                                    className="hero-subtitle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    MetaHire transforms hiring with AI-driven candidate analysis, 
                                    virtual interviews, and real-time feedback for finding the perfect team match.
                                </motion.p>
                                
                                <motion.div 
                                    className="hero-cta"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                >
                                    <motion.button
                                        className="btn-primary"
                                        whileHover={{ 
                                          scale: 1.05,
                                          boxShadow: "0 6px 20px rgba(99, 102, 241, 0.6)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate("/home")}
                                    >
                                        Get Started 
                                        <motion.span
                                          className="btn-icon-wrapper"
                                          whileHover={{ x: 5 }}
                                        >
                                          <FiArrowRight className="btn-icon" />
                                        </motion.span>
                                    </motion.button>
                                    
                                    <motion.button
                                        className="btn-secondary"
                                        whileHover={{ 
                                          scale: 1.05,
                                          backgroundColor: "rgba(255, 255, 255, 0.1)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsVideoOpen(true)}
                                    >
                                        <FiPlay className="btn-icon" /> Watch Demo
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </Col>
                        
                        <Col lg={6} className="hero-image-container">
                            <motion.div
                                className="hero-image-wrapper"
                                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                                animate={{ 
                                  opacity: 1, 
                                  scale: 1, 
                                  rotateY: 0,
                                  transition: { 
                                    duration: 1,
                                    delay: 0.3,
                                    ease: "easeOut"
                                  }
                                }}
                                whileHover={{
                                  scale: 1.03,
                                  rotateY: 5,
                                  transition: { duration: 0.4 }
                                }}
                            >
                                <div className="image-glow"></div>
                                <img 
                                    src="/images/logo 2.jpeg" 
                                    alt="MetaHire Platform" 
                                    className="hero-image"
                                />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                
                <motion.div 
                  className="scroll-indicator" 
                  ref={scrollRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 1.5,
                      duration: 0.5
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  onClick={scrollToFeatures}
                >
                  <span>Scroll to explore</span>
                  <motion.div 
                    className="scroll-arrow"
                    animate={{ 
                      y: [0, 8, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 1.5
                      }
                    }}
                  >
                    <FiArrowDown />
                  </motion.div>
                </motion.div>
            </motion.section>
            
            <section className="features-section" ref={featuresSectionRef}>
                <Container>
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="gradient-text">Key Features</span>
                    </motion.h2>
                    
                    <motion.p 
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Our platform combines AI technology with human-centered design to 
                        revolutionize your hiring process.
                    </motion.p>
                    
                    <Row className="features-container g-4">
                        {[
                          {
                            icon: <FiBarChart2 />,
                            title: "AI Analysis",
                            description: "Real-time evaluation of candidate responses with objective metrics."
                          },
                          {
                            icon: <FiUsers />,
                            title: "Virtual Interviews",
                            description: "Customizable avatars for realistic interview experiences."
                          },
                          {
                            icon: <FiClock />,
                            title: "Time Saving",
                            description: "Reduce hiring time by up to 80% with automated screening."
                          },
                          {
                            icon: <FiShield />,
                            title: "Unbiased",
                            description: "Standardized evaluation to eliminate hiring bias."
                          }
                        ].map((feature, index) => (
                          <Col md={6} lg={3} key={index}>
                            <Feature 
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                              index={index}
                            />
                          </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div 
                        className="video-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div 
                            className="video-modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ 
                              scale: 1, 
                              opacity: 1,
                              transition: {
                                type: "spring",
                                damping: 20,
                                stiffness: 300
                              }
                            }}
                            exit={{ 
                              scale: 0.9, 
                              opacity: 0,
                              transition: { duration: 0.3 }
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button 
                              className="video-close-btn" 
                              onClick={() => setIsVideoOpen(false)}
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                              whileTap={{ scale: 0.9 }}
                            >
                              ×
                            </motion.button>
                            <div className="video-container">
                                <iframe 
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Demo Video" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Landing;