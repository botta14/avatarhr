import React from "react";
import { motion } from "framer-motion";
import "./Pricing.css";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Basic Plan",
            price: "Free",
            features: [
                { text: "AI Avatar Integration", included: true },
                { text: "Virtual Meeting Hosting", included: true },
                { text: "Basic Real-Time Translation", included: false },
                { text: "Basic Analytics", included: false },
            ],
        },
        {
            title: "Standard Plan",
            price: "99.00",
            features: [
                { text: "AI Avatar Customization", included: true },
                { text: "Advanced Meeting Hosting", included: true },
                { text: "Real-Time Translation", included: true },
                { text: "Advanced Analytics", included: false },
            ],
            isFeatured: true,
        },
        {
            title: "Advanced Plan",
            price: "149.00",
            features: [
                { text: "Unlimited AI Avatars", included: true },
                { text: "Premium Virtual Meetings", included: true },
                { text: "Real-Time Translation & Subtitles", included: true },
                { text: "Advanced Analytics & Reporting", included: true },
            ],
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: { 
            y: -15,
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="pricing-section py-5">
            <div className="container py-5">
                <motion.div 
                    className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h5 
                        className="fw-bold text-black text-uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Pricing Plans
                    </motion.h5>
                    <motion.h4 
                        className="mb-0 text-info"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Affordable Plans for Every Business Size
                    </motion.h4>
                </motion.div>
                
                <motion.div 
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="col-lg-4">
                            <motion.div 
                                className={`pricing-card ${plan.isFeatured ? "featured" : ""}`}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="pricing-header">
                                    <h4 className="text-primary">{plan.title}</h4>
                                    {plan.isFeatured && (
                                        <motion.div 
                                            className="popular-badge"
                                            initial={{ rotate: -3 }}
                                            animate={{ rotate: 3 }}
                                            transition={{ 
                                                repeat: Infinity, 
                                                repeatType: "reverse", 
                                                duration: 1.5 
                                            }}
                                        >
                                            Popular
                                        </motion.div>
                                    )}
                                </div>
                                <div className="pricing-body text-black">
                                    <h1 className="display-5">
                                        {plan.price !== "Free" && <small>$</small>}
                                        {plan.price}
                                        {plan.price !== "Free" && <small>/ Month</small>}
                                    </h1>
                                    <motion.ul 
                                        className="pricing-features"
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                                    >
                                        {plan.features.map((feature, i) => (
                                            <motion.li 
                                                key={i}
                                                variants={featureVariants}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span>{feature.text}</span>
                                                <i
                                                    className={`fa ${feature.included ? "fa-check text-primary" : "fa-times text-danger"}`}
                                                    aria-hidden="true"
                                                ></i>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                    <motion.button 
                                        className="btn btn-primary px-5 mt-4"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {plan.price === "Free" ? "Start Free Trial" : "Order Now"}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;