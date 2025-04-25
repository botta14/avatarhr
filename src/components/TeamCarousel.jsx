import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamCarousel.css';

const TeamCarousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide text-center my-5" data-bs-ride="carousel">
            <h2 className="text-center fw-bold mb-2 text-white">MetaHire Team</h2>
            <p className="text-center mb-5 text-secondary">Inspiring Connections Through Technology</p>
            <div className="carousel-inner">

                {/* Member 1 */}
                <div className="carousel-item active">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/mohamed-tarek" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Tarek on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/mohamed.tarek" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Tarek on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/mohamed_tarek" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Tarek on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Mohamed Tarek, Front End Developer" />
                    </div>
                    <h3 className="team-name">Mohamed Tarek</h3>
                    <p className="team-role">Front End Developer</p>
                </div>

                {/* Member 2 */}
                <div className="carousel-item">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/member2" target="_blank" rel="noopener noreferrer" aria-label="Member 2 on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/member2" target="_blank" rel="noopener noreferrer" aria-label="Member 2 on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/member2" target="_blank" rel="noopener noreferrer" aria-label="Member 2 on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Member 2, Back End Developer" />
                    </div>
                    <h3 className="team-name">Member 2</h3>
                    <p className="team-role">Back End Developer</p>
                </div>

                {/* Member 3 */}
                <div className="carousel-item">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/member3" target="_blank" rel="noopener noreferrer" aria-label="Member 3 on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/member3" target="_blank" rel="noopener noreferrer" aria-label="Member 3 on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/member3" target="_blank" rel="noopener noreferrer" aria-label="Member 3 on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Member 3, UI/UX Designer" />
                    </div>
                    <h3 className="team-name">Member 3</h3>
                    <p className="team-role">UI/UX Designer</p>
                </div>

                {/* Member 4 */}
                <div className="carousel-item">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/member4" target="_blank" rel="noopener noreferrer" aria-label="Member 4 on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/member4" target="_blank" rel="noopener noreferrer" aria-label="Member 4 on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/member4" target="_blank" rel="noopener noreferrer" aria-label="Member 4 on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Member 4, Project Manager" />
                    </div>
                    <h3 className="team-name">Member 4</h3>
                    <p className="team-role">Project Manager</p>
                </div>

                {/* Member 5 */}
                <div className="carousel-item">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/member5" target="_blank" rel="noopener noreferrer" aria-label="Member 5 on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/member5" target="_blank" rel="noopener noreferrer" aria-label="Member 5 on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/member5" target="_blank" rel="noopener noreferrer" aria-label="Member 5 on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Member 5, Mobile Developer" />
                    </div>
                    <h3 className="team-name">Member 5</h3>
                    <p className="team-role">Mobile Developer</p>
                </div>

                {/* Member 6 */}
                <div className="carousel-item">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/member6" target="_blank" rel="noopener noreferrer" aria-label="Member 6 on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/member6" target="_blank" rel="noopener noreferrer" aria-label="Member 6 on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/member6" target="_blank" rel="noopener noreferrer" aria-label="Member 6 on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Member 6, Tester" />
                    </div>
                    <h3 className="team-name">Member 6</h3>
                    <p className="team-role">Tester</p>
                </div>

                {/* Member 7 */}
                <div className="carousel-item">
                    <div className="team-wrapper">
                        <div className="overlay-icons">
                            <a href="https://linkedin.com/in/member7" target="_blank" rel="noopener noreferrer" aria-label="Member 7 on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://facebook.com/member7" target="_blank" rel="noopener noreferrer" aria-label="Member 7 on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/member7" target="_blank" rel="noopener noreferrer" aria-label="Member 7 on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <img src="/images/me.jpg" className="team-img" alt="Member 7, DevOps Engineer" />
                    </div>
                    <h3 className="team-name">Member 7</h3>
                    <p className="team-role">DevOps Engineer</p>
                </div>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev custom-btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" aria-label="Previous slide">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next custom-btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" aria-label="Next slide">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default TeamCarousel;
