import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5 missionBoxStyles">
                <h2 className="text-center fw-bold mb-2">OUR VISION & MISSION</h2>
                <p className="text-center mb-5 text-secondary">Inspiring Connections Through Technology</p>

                <div className="row align-items-center mb-5 sectionReveal">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="missionBox">
                            <h3 className="text-info fw-bold mb-3">Vision</h3>
                            <p>To be the leading platform for AI-driven virtual meetings, enhancing communication and collaboration worldwide.</p>
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block"></div>
                    <div className="col-lg-6">
                        <div className="imgBorder">
                            <img src="/images/vission avatar.webp" alt="vision avatar" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center flex-lg-row-reverse sectionReveal">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="missionBox">
                            <h3 className="text-info fw-bold mb-3">Mission</h3>
                            <p>To empower individuals and organizations with innovative AI solutions that transform the way they connect and collaborate.</p>
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block"></div>
                    <div className="col-lg-6">
                        <div className="imgBorder">
                            <img src="/images/mission avatar.webp" alt="mission avatar" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
