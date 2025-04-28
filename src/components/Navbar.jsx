import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Modal, Tabs, Tab, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiLogIn, FiMenu } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
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
                    className="auth-modal-container"
                >
                    <Modal show={show} onHide={onHide} centered className="auth-modal">
                        <Modal.Header closeButton>
                            <Modal.Title className="fw-bold">
                                {key === "login" ? "Welcome Back" : "Create Account"}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-4 py-4">
                            <Tabs 
                                activeKey={key} 
                                onSelect={(k) => setKey(k)}
                                className="auth-tabs mb-4"
                            >
                                <Tab eventKey="login" title="Login">
                                    <form className="mt-4">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                                            <label htmlFor="floatingEmail">Email address</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="#" className="text-decoration-none forgot-password">Forgot password?</a>
                                        </div>
                                        <Button variant="primary" className="w-100 py-2 auth-button">
                                            <FiLogIn className="me-2" /> Sign In
                                        </Button>
                                    </form>
                                </Tab>
                                <Tab eventKey="register" title="Register">
                                    <form className="mt-4">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                                            <label htmlFor="floatingName">Full Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingRegEmail" placeholder="Email" />
                                            <label htmlFor="floatingRegEmail">Email address</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input type="password" className="form-control" id="floatingRegPassword" placeholder="Password" />
                                            <label htmlFor="floatingRegPassword">Password</label>
                                        </div>
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="termsCheck" />
                                                <label className="form-check-label" htmlFor="termsCheck">
                                                    I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
                                                </label>
                                            </div>
                                        </div>
                                        <Button variant="primary" className="w-100 py-2 auth-button">
                                            <FiUser className="me-2" /> Create Account
                                        </Button>
                                    </form>
                                </Tab>
                            </Tabs>
                            <div className="divider my-4">
                                <span>or continue with</span>
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <Button variant="light" className="w-50 py-2 social-auth-button">
                                    <FcGoogle className="me-2" size={20} /> Google
                                </Button>
                                <Button variant="light" className="w-50 py-2 social-auth-button">
                                    <FaFacebookF className="me-2" size={18} color="#1877F2" /> Facebook
                                </Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Navbar = () => {
    const [showAuth, setShowAuth] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === "/";

    const isLoggedIn = false; // Temporary assumption

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <div className="d-flex align-items-center">
                            <img src="/images/logo.png" alt="MetaHire" className="navbar-logo" />
                            <span className="brand-text ms-2">
                                <span className="text-gradient">MetaHire</span>
                            </span>
                        </div>
                    </Link>

                    <button
                        className="navbar-toggler navbar-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <FiMenu />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/demo">Demo</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                                        Interview Categories
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-animated">
                                        <li><a className="dropdown-item" href="/avatar">Data Scientist</a></li>
                                        <li><a className="dropdown-item" href="/automated">Data Engineer</a></li>
                                        <li><a className="dropdown-item" href="/cloud">Cloud Infrastructure</a></li>
                                        <li><a className="dropdown-item" href="/interview">Full-stack Engineer</a></li>
                                        <li><a className="dropdown-item" href="/chat">Cloud Solution Architect</a></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item d-flex">
                                    <Button 
                                        onClick={() => setShowAuth(true)} 
                                        className="btn nav-button login-button"
                                    >
                                        Get Started
                                    </Button>
                                </li>
                            )}
                        </ul>
                    </div>
                </Container>
            </nav>

            <AuthModal show={showAuth} onHide={() => setShowAuth(false)} />
        </>
    );
};

export default Navbar;