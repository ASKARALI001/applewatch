import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='footer'>
                    <div className="footer__nav">
                        <div className="footer__left">
                            <h3 className="footer__left-title">Follow Us.</h3>
                            <p className='footer__left-desc'>We are always looking for new <br/> projects and collaborations. <br/>
                                Feel free to contact us.</p>
                            <div className="footer__icon">
                                <FaFacebookF className='icon'/>
                                <AiOutlineTwitter className='icon'/>
                                <AiFillInstagram className='icon'/>
                            </div>
                        </div>
                        <div className='footer__right'>
                            <h3 className='footer__left-title'>Contact Us.</h3>
                            <address className="footer__left-desc">
                                One Apple Park Way <br/>
                                Cupertino, CA 95014
                            </address>
                            <a href="tel:+996(550)950-965" className="footer__right-num">+996(550)950-965</a>
                            <a href='' className="footer__right-email">support@apple.com</a>
                        </div>  
                    </div>


                </div>
            </div>

        </footer>
    );
};

export default Footer;