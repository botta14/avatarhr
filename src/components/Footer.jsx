import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { useRef } from "react";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    // Refs for scroll animations
    const mainFooterRef = useRef(null);
    const bottomFooterRef = useRef(null);
    const isMainFooterInView = useInView(mainFooterRef, { once: false, amount: 0.1 });
    const isBottomFooterInView = useInView(bottomFooterRef, { once: false, amount: 0.1 });
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
        }
    };
    
    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: i => ({
            scale: 1,
            opacity: 1,
            transition: { 
                delay: i * 0.08,
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        })
    };
    
    const linkHoverVariants = {
        initial: { x: 0 },
        hover: { 
            x: 5, 
            color: "#f8f9fa",
            transition: { duration: 0.2 } 
        }
    };

    const logoVariants = {
        initial: { filter: "brightness(1)" },
        hover: { 
            filter: "brightness(1.2)",
            scale: 1.05,
            transition: { duration: 0.3 } 
        }
    };

    // Legal links animation
    const legalLinkVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { 
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };
    
    return (
        <footer className="footer-wrapper">
            {/* Main Footer */}
            <motion.div 
                ref={mainFooterRef}
                className="footer-main"
                variants={containerVariants}
                initial="hidden"
                animate={isMainFooterInView ? "visible" : "hidden"}
            >
                <div className="container">
                    <div className="footer-top">
                        <motion.div className="footer-brand" variants={itemVariants}>
                            <motion.div
                                whileHover="hover"
                                initial="initial"
                                variants={logoVariants}
                            >
                                <Link to="/" className="footer-logo-link">
                                    <img src="/images/logo.png" alt="MetaHire" className="footer-logo" />
                                    <span className="footer-logo-text">
                                        <span className="gradient-text">Meta</span>Hire
                                    </span>
                                </Link>
                            </motion.div>
                            <motion.p 
                                className="footer-tagline"
                                variants={itemVariants}
                            >
                                Revolutionizing recruitment with AI-driven interviews and real-time candidate assessment.
                            </motion.p>
                            <div className="footer-social">
                                {[
                                    { href: "https://linkedin.com", icon: <FaLinkedinIn />, class: "linkedin" },
                                    { href: "https://twitter.com", icon: <FaTwitter />, class: "twitter" },
                                    { href: "https://instagram.com", icon: <FaInstagram />, class: "instagram" },
                                    { href: "https://github.com", icon: <FaGithub />, class: "github" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.class}
                                        href={social.href}
                                        className={`social-link ${social.class}`}
                                        custom={index}
                                        variants={socialVariants}
                                        whileHover={{ 
                                            y: -5, 
                                            transition: { 
                                                type: "spring", 
                                                stiffness: 300,
                                                damping: 10
                                            } 
                                        }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="newsletter-container"
                            variants={itemVariants}
                        >
                            <motion.h3 
                                className="newsletter-title"
                                variants={itemVariants}
                            >
                                Stay Updated
                            </motion.h3>
                            <motion.p 
                                className="newsletter-text"
                                variants={itemVariants}
                            >
                                Get the latest news and updates directly to your inbox.
                            </motion.p>
                            <motion.form 
                                className="newsletter-form"
                                variants={itemVariants}
                            >
                                <div className="newsletter-input-group">
                                    <motion.input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="newsletter-input"
                                        required
                                        whileFocus={{ 
                                            boxShadow: "0 0 0 3px rgba(67, 97, 238, 0.3)",
                                            transition: { duration: 0.2 }
                                        }}
                                    />
                                    <motion.button 
                                        type="submit" 
                                        className="newsletter-button"
                                        whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(67, 97, 238, 0.4)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </motion.form>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="footer-divider"
                        variants={itemVariants}
                    ></motion.div>

                    <motion.div 
                        className="footer-links-section"
                        variants={containerVariants}
                    >
                        {[
                            {
                                title: "Company",
                                links: [
                                    { to: "/about", text: "About Us" },
                                    { to: "/careers", text: "Careers" },
                                    { to: "/press", text: "Press" },
                                    { to: "/blog", text: "Blog" }
                                ]
                            },
                            {
                                title: "Products",
                                links: [
                                    { to: "/avatar-interviews", text: "Avatar Interviews" },
                                    { to: "/ai-assessment", text: "AI Assessment" },
                                    { to: "/candidate-profiles", text: "Candidate Profiles" },
                                    { to: "/analytics", text: "Analytics Dashboard" }
                                ]
                            },
                            {
                                title: "Resources",
                                links: [
                                    { to: "/documentation", text: "Documentation" },
                                    { to: "/api", text: "API Reference" },
                                    { to: "/tutorials", text: "Tutorials" },
                                    { to: "/community", text: "Community" }
                                ]
                            }
                        ].map((column, index) => (
                            <motion.div 
                                key={column.title}
                                className="footer-links-column"
                                variants={itemVariants}
                                custom={index}
                            >
                                <motion.h3 
                                    className="footer-column-title"
                                    variants={itemVariants}
                                >
                                    {column.title}
                                </motion.h3>
                                <ul className="footer-links">
                                    {column.links.map((link, linkIndex) => (
                                        <motion.li 
                                            key={link.to}
                                            variants={itemVariants}
                                            custom={linkIndex}
                                        >
                                            <motion.div
                                                initial="initial"
                                                whileHover="hover"
                                                variants={linkHoverVariants}
                                            >
                                                <Link to={link.to}>{link.text}</Link>
                                            </motion.div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                        <motion.div 
                            className="footer-links-column"
                            variants={itemVariants}
                        >
                            <motion.h3 
                                className="footer-column-title"
                                variants={itemVariants}
                            >
                                Contact
                            </motion.h3>
                            <ul className="footer-contact-info">
                                {[
                                    { 
                                        icon: <HiMail className="contact-icon" />,
                                        content: <a href="mailto:contact@metahire.com">contact@metahire.com</a>
                                    },
                                    { 
                                        icon: <HiPhone className="contact-icon" />,
                                        content: <a href="tel:+18001234567">+1 (800) 123-4567</a>
                                    },
                                    { 
                                        icon: <HiLocationMarker className="contact-icon" />,
                                        content: <span>123 Innovation Dr, San Francisco, CA</span>
                                    }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover={{ x: 3 }}
                                    >
                                        {item.icon}
                                        {item.content}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Footer Bottom */}
            <motion.div 
                ref={bottomFooterRef}
                className="footer-bottom"
                initial="hidden"
                animate={isBottomFooterInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { duration: 0.5 }
                    }
                }}
            >
                <div className="container">
                    <div className="footer-bottom-content">
                        <motion.p 
                            className="copyright"
                            whileHover={{ scale: 1.01 }}
                            variants={itemVariants}
                        >
                            &copy; {currentYear} MetaHire. All rights reserved.
                        </motion.p>
                        <div className="footer-legal-links">
                            {[
                                { to: "/privacy", text: "Privacy Policy" },
                                { to: "/terms", text: "Terms of Service" },
                                { to: "/cookies", text: "Cookie Policy" }
                            ].map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    custom={index}
                                    variants={legalLinkVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to={link.to}>{link.text}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;