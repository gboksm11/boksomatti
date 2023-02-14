import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
  import { Link } from "react-router-dom";

import gray_logo from '../../assets/logo-gray.png';
import './footer.css';

const Footer = () => {

    return (
        <Box>
          <Container>
            <Row>
                <Column>
                    <Link to={'/'}>
                      <img className="logo-footer" src={gray_logo}></img>
                    </Link>
                </Column>
              <Column>
                <Heading>Quick Links</Heading>
                <Link to={'/about'} className='footer-links'>
                  <FooterLink>About Us</FooterLink>
                </Link>

                <Link to={'/products'} className='footer-links'>
                <FooterLink>Products</FooterLink>
                </Link>

                <Link to={'/news'} className='footer-links'>
                  <FooterLink>News</FooterLink>
                </Link>

                <Link to={'/contact-us'} className='footer-links'>
                  <FooterLink>Contact Us</FooterLink>
                </Link>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <ul className="contact-footer">
                    <li>
                        Address: 4959 عبدالرحمن بن شقران، الملز الرياض
                    </li>

                    <li>
                    الرياض12627-6466
                    </li>

                    <li>
                        Al Malaz – Riyadh 12627-6466
                    </li>

                    <li>
                        Phone : 011 477 8518
                    </li>

                    <li>
                        Mobile : 050 414 0221
                    </li>

                    <li>
                        Fax : 011 477 7836
                    </li>

                    <li>
                        Email: bkstm@boksomatti.com
                    </li>
                </ul>
              </Column>
            </Row>
          </Container>
        </Box>
      );
    
}

export default Footer;