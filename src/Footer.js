import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark footer text-white">
      <div className="container py-4 ">
        <div className="row d-felx justify-content-around">

          <div className="col-md-3 info">
            <h4> Sunset Bistro</h4>
            <p className='pt-2 '>A carefully curated list of varietals and vintages complements the menu, ensuring the perfect pairing for every dish.</p>

            <div className='icons d-flex flex-row'>
            <a href="#" className='text-white me-3' />
              <p> <i className="icon1"><FaFacebook /></i></p>
              <a href="#" className='text-white me-3'/>
              <p> <i className="icon2"><FaTwitter /></i></p>
              <a href="#" className='text-white me-3' />
              <p> <i className="icon3"><FaYoutube /></i></p>
              <a href="#" className='text-white me-3' />
              <p> <i className="icon4"><FaInstagram /></i></p>
            </div>
          </div>

          <div className='col md-3 location'>
            <h4>Our Location</h4>
            <p className='pt-2'>
              247-DHA Germany <br />
              7547-63524 Block <br />
              *61-376-373-373
            </p>
            <p>
              <i className='location-icon'><MdLocationOn /> </i>Location
            </p>
          </div>
    
          <div className='quick-link col-md-3'>
            <h4 className='mr-3'>Quick Link</h4>
            <ul type='none' className='pt-2' >
              <li>Home</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Testimonial</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='timings col-md-3'>
            <h4 className='pb-2'>Opening Hours</h4>
            <p><i className='pr-2'><FaClock /></i>Sunday to Wednesday<br/> 9AM-10.30PM</p>
            <p><i><FaClock /></i>Thursday, Friday, Saturday<br/> 9AM-12.30PM</p>
            <button className='reserve bg-black text-uppercase text-white  border-white p-2'>Reservation</button>
          </div>
          
          <div className='line'></div>
          <div className='sub-footer d-flex flex-row justify-content-between mt-5'><p className='copy'>&copy; 2023 Saeed Alam </p><p className='design'> Designed by Saeed Alam</p></div>

        </div>
      </div>
    </footer>
  )
}


export default Footer;