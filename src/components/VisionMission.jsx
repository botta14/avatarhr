import React from "react";
import { motion } from "framer-motion";
import "./VisionMission.css";

const VisionMission = () => {
    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                duration: 0.8
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
        visible: { 
            opacity: 1, 
            scale: 1,
            rotateY: 0,
            transition: { 
                type: "spring", 
                stiffness: 80, 
                damping: 20,
                duration: 1.2
            }
        }
    };

    return (
        <section className="vision-mission-section">
            <motion.div 
                className="floating-particles"
                animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 8,
                    ease: "easeInOut" 
                }}
            />
            
            <div className="vision-mission-container">
                <motion.div 
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.span 
                        className="section-label"
                        variants={titleVariants}
                    >
                        <i className="fas fa-compass me-2"></i>
                        Our Purpose
                    </motion.span>
                    
                    <motion.h2 
                        className="section-title"
                        variants={titleVariants}
                    >
                        Vision & <span className="accent-text">Mission</span>
                    </motion.h2>
                    
                    <motion.div 
                        className="separator"
                        variants={titleVariants}
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </motion.div>

                <div className="vision-mission-content">
                    <motion.div 
                        className="vision-mission-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        whileHover={{
                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div 
                            className="card-content"
                            variants={containerVariants}
                        >
                            <div className="testCard">
                                <motion.div 
                                className="card-icon"
                                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ 
                                    rotate: [0, -5, 5, -5, 0],
                                    transition: { duration: 0.5 } 
                                }}
                            >
                                <i className="fas fa-eye"></i>
                            </motion.div>
                            
                            <motion.h3 variants={fadeInUp} className="textMis">Vision</motion.h3>
                            </div>
                            
                            <motion.p 
                                variants={fadeInUp}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                To be the leading platform for AI-driven virtual meetings, enhancing communication and collaboration worldwide.
                            </motion.p>
                            
                            <motion.div 
                                className="feature-list"
                                variants={containerVariants}
                            >
                                <motion.div className="feature-item" variants={fadeInUp}>
                                    <i className="fas fa-globe"></i>
                                    <span>Global Reach</span>
                                </motion.div>
                                <motion.div className="feature-item" variants={fadeInUp}>
                                    <i className="fas fa-robot"></i>
                                    <span>AI Innovation</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="card-image"
                            variants={imageVariants}
                        >
                            <img src="/images/vission avatar.webp" alt="Vision representation" />
                            
                            <motion.div 
                                className="image-overlay"
                                whileHover={{ opacity: 0.2 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="vision-mission-card reversed"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        whileHover={{
                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div 
                            className="card-content"
                            variants={containerVariants}
                        >
                            <div className="testCard">
                            <motion.div 
                                className="card-icon"
                                initial={{ rotate: 10, scale: 0.8, opacity: 0 }}
                                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ 
                                    rotate: [0, 5, -5, 5, 0],
                                    transition: { duration: 0.5 } 
                                }}
                            >
                                <i className="fas fa-rocket"></i>
                            </motion.div>
                            
                            <motion.h3 variants={fadeInUp} className="textMis">Mission</motion.h3>
                            </div>
                            
                            <motion.p 
                                variants={fadeInUp}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                To empower individuals and organizations with innovative AI solutions that transform the way they connect and collaborate.
                            </motion.p>
                            
                            <motion.div 
                                className="feature-list"
                                variants={containerVariants}
                            >
                                <motion.div className="feature-item" variants={fadeInUp}>
                                    <i className="fas fa-users"></i>
                                    <span>Empower Teams</span>
                                </motion.div>
                                <motion.div className="feature-item" variants={fadeInUp}>
                                    <i className="fas fa-lightbulb"></i>
                                    <span>Innovative Solutions</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="card-image"
                            variants={imageVariants}
                        >
                            <img src="/images/mission avatar.webp" alt="Mission representation" />
                            
                            <motion.div 
                                className="image-overlay"
                                whileHover={{ opacity: 0.2 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;