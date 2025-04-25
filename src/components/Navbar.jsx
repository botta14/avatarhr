import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const AuthModal = ({ show, onHide }) => {
    const [key, setKey] = useState("login");

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                >
                    <Modal show={show} onHide={onHide} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{key === "login" ? "Login" : "Register"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                                <Tab eventKey="login" title="Login">
                                    <form className="mt-3">
                                        <input type="email" className="form-control mb-2" placeholder="Email" />
                                        <input type="password" className="form-control mb-3" placeholder="Password" />
                                        <Button variant="primary" className="w-100">Login</Button>
                                    </form>
                                </Tab>
                                <Tab eventKey="register" title="Register">
                                    <form className="mt-3">
                                        <input type="text" className="form-control mb-2" placeholder="Name" />
                                        <input type="email" className="form-control mb-2" placeholder="Email" />
                                        <input type="password" className="form-control mb-3" placeholder="Password" />
                                        <Button variant="success" className="w-100">Register</Button>
                                    </form>
                                </Tab>
                            </Tabs>
                            <hr />
                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="outline-danger">Login with Google</Button>
                                <Button variant="outline-primary">Login with Facebook</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === "/";

    const isLoggedIn = false; // مؤقتًا بنفترض إنه false

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg px-0 py-0 fixed-top 
            ${isLandingPage ? "" : !isScrolled ? "d-none" : ""}
            ${isScrolled ? "scrolled" : ""}`}
            >
                <div className="container-fluid d-flex justify-content-between align-items-center w-100 px-5">
                    <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center", lineHeight: "0" }}>
                        <img src="/images/logo.png" alt="Logo" style={{ width: "100px", height: "auto" }} />
                        <span className={`navbar-text ${isScrolled ? "text-white" : ""}`}>etaHire</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item me-3">
                                <Link className={`nav-link ${isScrolled ? "text-white" : ""}`} to="/home">Home</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className={`nav-link ${isScrolled ? "text-white" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className={`nav-link ${isScrolled ? "text-white" : ""}`} to="/demo">Demo</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item dropdown me-3">
                                    <a className={`nav-link dropdown-toggle ${isScrolled ? "text-white" : ""}`} href="/" role="button" data-bs-toggle="dropdown">
                                        Category
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/avatar">Data Scientist</a></li>
                                        <li><a className="dropdown-item" href="/automated">Data Engineer</a></li>
                                        <li><a className="dropdown-item" href="/cloud">Cloud Infrastructure</a></li>
                                        <li><a className="dropdown-item" href="/interview">Full-stack Engineer</a></li>
                                        <li><a className="dropdown-item" href="/chat">Cloud Solution Architect</a></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item me-3">
                                    <button onClick={() => setShowAuth(true)} className="btn buttonStyleGradient">Register</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <AuthModal show={showAuth} onHide={() => setShowAuth(false)} />
        </>
    );
};

export default Navbar;
