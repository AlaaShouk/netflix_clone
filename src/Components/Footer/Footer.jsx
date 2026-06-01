import React from 'react'
import './Footer.css'
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
       <FaYoutube  className='btn-icon'/>
       <FaTwitter  className="btn-icon"/>
       <RiInstagramFill  className="btn-icon"/>
       <FaFacebook className="btn-icon"/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@ 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
