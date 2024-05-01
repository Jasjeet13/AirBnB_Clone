import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Support</h4>
                        <ul className="list-unstyled">
                            <li>Help Centre</li>
                            <li>Get help with a safety issue</li>
                            <li>AirCover</li>
                            <li>Anti-discrimination</li>
                            <li>Disability support</li>
                            <li>Cancellation options</li>
                            <li>Report neighbourhood concern</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Hosting</h4>
                            <ul className="list-unstyled">
                                <li>Airbnb your home</li>
                                <li>AirCover for hosts</li>
                                <li>Hosting resources</li>
                                <li>Community forum</li>
                                <li>Hosting Responsibility</li>
                                <li>Join a free Hosting class</li>
                            </ul>
                    </div>
                    <div className="col">
                        <h4>Airbnb</h4>
                            <ul className="list-unstyled">
                                <li>Newsroom</li>
                                <li>News features</li>
                                <li>Careers</li>
                                <li>Investors</li>
                                <li>Airbnb.org emergency stays</li>
                            </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <ul className="list-side">
                        <li>© 2024 Airbnb, Inc.</li>
                        <li>• Privacy</li>
                        <li>• Terms</li>
                        <li>• Sitemap</li>
                        <li>• Company details</li>
                    </ul>
                    <ul className="Rightside">
                    <div className="footer-social-media">
                    <a href="#globe">
                    <FontAwesomeIcon icon={faGlobe} />
                    </a>
                    <p>English (IN)</p>
                    <p>₹ INR</p>
                    <a href="#facebook" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>

                <a href="#twitter" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a href="#instagram" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;
            