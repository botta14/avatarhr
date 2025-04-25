import React, { useState } from "react";
import "./Home.css";

const HowItWorks = () => {
    // حالة للتحكم في إظهار الإجابات
    const [openIndex, setOpenIndex] = useState(null);

    // دالة لتبديل الحالة عند الضغط
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How do I start an interview with the avatar?",
            answer:
                "To start an interview, simply log in to the platform and select the 'Start Interview' option. Follow the on-screen instructions to begin your conversation with the avatar.",
        },
        {
            question: "What do I need to prepare for the interview?",
            answer:
                "You don’t need to prepare anything special for the interview. Just ensure you have a stable internet connection and your camera enabled for the avatar to interact with you effectively.",
        },
        {
            question: "Can the avatar ask specific questions related to my job role?",
            answer:
                "Yes, the avatar is capable of asking customized questions tailored to the job role you're applying for. You can choose the type of interview (e.g., technical, behavioral) to guide the avatar’s questions.",
        },
    ];

    return (
        <section className="container d-grid justify-content-center pt-5 mt-5">
            <div className="row pt-5 mt-5 mx-2 mx-md-5">
                <h3 className="col-12 fw-bolder text-center pt-5 mt-5 text-black">
                    How it works
                </h3>
                <div className="row my-5 py-5 gap-4">

                    <div className="col-12 col-md-7">
                        <div className="faq">
                            {faqData.map((faq, index) => (
                                <div className="faq-item" key={index}>
                                    <div className="faq-question text-dark" onClick={() => toggleFAQ(index)}>
                                        <p>{faq.question}</p>
                                        <i
                                            className={`fa-solid ${openIndex === index ? "fa-minus" : "fa-plus"
                                                } text-black`}
                                        ></i>
                                    </div>
                                    {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* قسم الاشتراك */}
                    <div className="col-12 col-md-4 px-4 py-3 text-center text-md-start">
                        <h4 className="text-black fw-bolder">How we can help you?</h4>
                        <p className="my-2 text-secondary">
                            Follow our newsletter. We will regularly update our latest
                            projects and availability.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="form-control mb-2"
                            />
                            <button className="btn btn-primary w-100">Let's Talk</button>
                            <br />
                            <a href="/faq" className="text-black d-inline-flex align-items-center mt-2 more-faq-link">
                                More FAQ <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
