import React from "react";
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

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
                    <h5 className="fw-bold text-black text-uppercase">Pricing Plans</h5>
                    <h4 className="mb-0 text-info">Affordable Plans for Every Business Size</h4>
                </div>
                <div className="row g-4">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="col-lg-4">
                            <div className={`pricing-card ${plan.isFeatured ? "featured" : ""}`}>
                                <div className="pricing-header">
                                    <h4 className="text-primary">{plan.title}</h4>
                                </div>
                                <div className="pricing-body text-black">
                                    <h1 className="display-5">
                                        {plan.price !== "Free" && <small>$</small>}
                                        {plan.price}
                                        {plan.price !== "Free" && <small>/ Month</small>}
                                    </h1>
                                    <ul className="pricing-features">
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                {feature.text}{" "}
                                                <i
                                                    className={`fa ${feature.included ? "fa-check text-primary" : "fa-times text-danger"}`}
                                                    aria-hidden="true"
                                                ></i>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* استبدال <a> بزر <button> لتجنب التحذيرات */}
                                    <button className="btn btn-primary px-5">
                                        {plan.price === "Free" ? "Start Free Trial" : "Order Now"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
