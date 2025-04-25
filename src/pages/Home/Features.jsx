import React from "react";
import "./Home.css";

const featureList = [
    {
        title: "Design Optimization",
        description:
            "Utilization of advanced algorithms to optimize structural designs for cost-effectiveness, efficiency, and sustainability",
    },
    {
        title: "Structural Analysis",
        description:
            "Comprehensive analysis of structural designs to assess their stability, strength, and performance under various conditions",
        isDark: true,
    },
    {
        title: "Computer Vision Integration",
        description:
            "Incorporation of computer vision technology to automate the analysis of structural data",
    },
    {
        title: "Customized Solutions",
        description:
            "Tailored solutions to meet the specific needs and requirements of clients, ensuring optimal outcomes for their projects.",
    },
    {
        title: "Technical Support",
        description:
            "Dedicated technical support services to assist users with software usage, troubleshooting, and implementation",
    },
];

const Features = () => {
    return (
        <section className="features container-fluid min-vh-100 d-grid justify-content-center py-5">
            <h3 className="text-center fw-bolder my-5 pt-5">MetaHire Features</h3>

            <div className="row gap-3 justify-content-center d-flex flex-wrap">
                {featureList.map((feature, index) => (
                    <div
                        key={index}
                        className={`col-lg-3 col-sm-5 boxStyle ${feature.isDark ? "boxStyle2 text-white" : ""} text-center`}
                    >
                        <h4 className="textBoxStyle fw-bolder my-3">{feature.title}</h4>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
