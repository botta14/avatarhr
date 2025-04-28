import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiPlus, FiMinus, FiSend } from "react-icons/fi";
import "./HowItWorks.css";

const HowItWorks = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How do I start an interview with the avatar?",
            answer:
                "To start an interview, simply log in to the platform and select the 'Start Interview' option. Follow the on-screen instructions to begin your conversation with the avatar."
        },
        {
            question: "What do I need to prepare for the interview?",
            answer:
                "You don't need to prepare anything special for the interview. Just ensure you have a stable internet connection and your camera enabled for the avatar to interact with you effectively."
        },
        {
            question: "Can the avatar ask specific questions related to my job role?",
            answer:
                "Yes, the avatar is capable of asking customized questions tailored to the job role you're applying for. You can choose the type of interview (e.g., technical, behavioral) to guide the avatar's questions."
        },
        {
            question: "How does the AI evaluation work?",
            answer:
                "Our AI analyzes verbal responses, facial expressions, and speech patterns to provide objective insights into candidate qualifications and fit. All evaluations are based on predetermined criteria to ensure fairness."
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section ref={sectionRef} className="how-it-works-section">
            <div className="how-it-works-background">
                <div className="blob blob-3"></div>
                <div className="blob blob-4"></div>
            </div>
            
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="section-header"
                >
                    <h2 className="section-title">
                        How it <span className="gradient-text">Works</span>
                    </h2>
                    <p className="section-subtitle">
                        Learn more about our AI-powered interview process and how it can revolutionize your hiring workflow
                    </p>
                </motion.div>

                <div className="content-wrapper">
                    <motion.div 
                        className="faq-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {faqData.map((faq, index) => (
                            <motion.div 
                                className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                            >
                                <motion.div 
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{faq.question}</span>
                                    <motion.div 
                                        className="faq-icon"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {openIndex === index ? <FiMinus /> : <FiPlus />}
                                    </motion.div>
                                </motion.div>
                                
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div 
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="answer-content">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                        
                        <motion.a 
                            href="/faq" 
                            className="more-faq-link"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                        >
                            <span>More FAQ</span>
                            <FiArrowRight />
                        </motion.a>
                    </motion.div>

                    <motion.div 
                        className="contact-card"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h3 
                            className="contact-title"
                            variants={itemVariants}
                        >
                            How can we help you?
                        </motion.h3>
                        
                        <motion.p 
                            className="contact-description"
                            variants={itemVariants}
                        >
                            Subscribe to our newsletter for updates on our latest features and availability.
                        </motion.p>
                        
                        <motion.form 
                            className="contact-form"
                            variants={itemVariants}
                        >
                            <div className="input-group">
                                <motion.input 
                                    type="email" 
                                    placeholder="Your email address"
                                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.3)" }}
                                    required
                                />
                                
                                <motion.button 
                                    type="submit"
                                    className="submit-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Let's Talk</span>
                                    <FiSend />
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;