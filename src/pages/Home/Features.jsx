import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSettings, FiActivity, FiEye, FiSliders, FiUsers } from "react-icons/fi";
import "./Features.css";

const featureList = [
  {
    icon: <FiSettings size={32} />,
    title: "AI-Powered Screening",
    description: "Advanced algorithms analyze candidate profiles to identify the best matches based on your specific requirements and job criteria",
    colorAccent: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
  },
  {
    icon: <FiActivity size={32} />,
    title: "Virtual Interviews",
    description: "Conduct realistic interviews with AI avatars that adapt in real-time, creating a consistent experience for all candidates",
    colorAccent: "linear-gradient(135deg, #06b6d4 20%, #0891b2 100%)",
    isDark: true
  },
  {
    icon: <FiEye size={32} />,
    title: "Behavioral Analysis",
    description: "Track facial expressions, tone of voice, and language patterns to gain comprehensive insights into candidate responses",
    colorAccent: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
  },
  {
    icon: <FiSliders size={32} />,
    title: "Customizable Criteria",
    description: "Tailor assessment parameters and interview questions specific to your industry, role requirements and company culture",
    colorAccent: "linear-gradient(135deg, #06b6d4 20%, #0891b2 100%)",
    isDark: true
  },
  {
    icon: <FiUsers size={32} />,
    title: "Unbiased Evaluation",
    description: "Eliminate unconscious bias with standardized interviews and objective analysis of candidate skills and capabilities",
    colorAccent: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section ref={sectionRef} className="features-section">
      <div className="features-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="features-header"
        >
          <h2 className="features-title">
            Transforming Recruitment
            <span className="gradient-text"> with AI</span>
          </h2>
          <p className="features-subtitle">
            Our platform combines cutting-edge AI technology with human-centered design
            to streamline your hiring process and identify top talent.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="features-grid"
        >
          {featureList.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
      
      <div className="features-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 }
    },
    hover: { 
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      className={`feature-card ${feature.isDark ? "feature-card-dark" : ""}`}
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        boxShadow: feature.isDark 
          ? "0 20px 30px rgba(0, 46, 71, 0.3)" 
          : "0 20px 30px rgba(99, 102, 241, 0.15)"
      }}
    >
      <div className="feature-card-content">
        <motion.div 
          className="feature-icon-container"
          variants={iconVariants}
          style={{ background: feature.colorAccent }}
          whileHover="hover"
        >
          {feature.icon}
        </motion.div>
        
        <h3 className="feature-card-title">
          {feature.title}
        </h3>
        
        <p className="feature-card-description">
          {feature.description}
        </p>
        
        <motion.div 
          className="feature-shine"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%", transition: { duration: 0.8 } }}
        />
      </div>
    </motion.div>
  );
};

export default Features;