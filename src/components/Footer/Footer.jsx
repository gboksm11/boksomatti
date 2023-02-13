import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

import gray_logo from '../../assets/logo-gray.png';
import './footer.css';

const Footer = () => {

    return (
        <Box>
          <Container>
            <Row>
                <Column>
                    <img className="logo-footer" src={gray_logo}></img>
                </Column>
              <Column>
                <Heading>Quick Links</Heading>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Products</FooterLink>
                <FooterLink href="#">News</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
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