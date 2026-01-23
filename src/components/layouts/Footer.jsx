import React from 'react';
import Logo from './logo/Logo';

const Footer = () => {
    return (
        <div className="footer sm:footer-horizontal bg-accent text-secondary p-10">
        <aside>
         <Logo></Logo>
          <p>
          
            Delivering fashionable, high-quality clothing <br/> <span className='text-primary'>since 1992</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-primary text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary text-xl" >Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    );
};

export default Footer;