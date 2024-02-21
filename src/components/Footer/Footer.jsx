import React from 'react';
import social from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div className='footer max-w-6xl mx-auto'>
                <aside>
                    <h1 className="text-3xl font-bold">CareerHub</h1>
                    <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br />    suffered alteration in some form.</p>
                    <img src={social} alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">524 Broadway</a>
                    <a className="link link-hover">+1777-978-5570</a>
                </nav>                 
            </div>
        </footer>
    );
};

export default Footer;