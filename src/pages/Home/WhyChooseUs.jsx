import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBrain, FaClock, FaChartLine, FaHeadset } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    
    const featureData = [
        {
            icon: <FaBrain />,
            title: "AI-Powered Avatars",
            description: "Our cutting-edge avatars simulate lifelike interactions, bridging the gap between AI and human experience."
        },
        {
            icon: <FaClock />,
            title: "Flexible and On-Demand",
            description: "Access interview practice anytime, anywhere, with sessions that fit your schedule."
        },
        {
            icon: <FaChartLine />,
            title: "AI-Driven Insights",
            description: "Leverage advanced analytics to understand your strengths and areas for improvement after each session."
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            description: "Our dedicated support team is always available to address your questions and ensure your success."
        }
    ];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1.0] 
            }
        }
    };
    
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={sectionRef} className="why-choose-section">
            <div className="why-choose-background">
                <div className="blob blob-5"></div>
                <div className="blob blob-6"></div>
            </div>
            
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">
                        Why <span className="gradient-text">Choose Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Experience the future of virtual interviews with our innovative platform
                    </p>
                </motion.div>
                
                <div className="why-choose-content">
                    <motion.div 
                        className="features-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={0}
                    >
                        {featureData.slice(0, 2).map((feature, index) => (
                            <FeatureCard 
                                key={index} 
                                feature={feature} 
                                variants={itemVariants}
                                alignment="right"
                                index={index}
                            />
                        ))}
                    </motion.div>
                    
                    <motion.div 
                        className="image-container"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="image-glow"></div>
                        <motion.img
                            src="../images/123.jpg"
                            alt="Virtual Meeting"
                            className="feature-image"
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="features-right"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={1}
                    >
                        {featureData.slice(2, 4).map((feature, index) => (
                            <FeatureCard 
                                key={index} 
                                feature={feature} 
                                variants={itemVariants}
                                alignment="left"
                                index={index + 2}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ feature, variants, alignment, index }) => {
    return (
        <motion.div 
            className={`feature-item feature-${alignment}`}
            variants={variants}
            custom={index}
            whileHover={{ y: -5 }}
        >
            <motion.div 
                className="feature-icon"
                whileHover={{ 
                    rotate: 5, 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 }
                }}
            >
                {feature.icon}
            </motion.div>
            
            <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
            </div>
        </motion.div>
    );
};

export default WhyChooseUs;