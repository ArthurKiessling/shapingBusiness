'use client';

import { Footer } from 'flowbite-react';
import './css/footer.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function Component() {
  return (
    <Footer className="footer">
     <div className="w-full footer-background" /> 
      <div className="w-full footer-content">
        <div className="grid w-full grid-cols-2 gap-8 px-20 py-8 md:grid-cols-3  bottom-0">
          <div>
            <Footer.Title title="Unternehmen" />
            <Footer.LinkGroup col>
              <Footer.Link href="/">Home</Footer.Link>
              <Footer.Link href="/uebermich">About</Footer.Link>
              <Footer.Link href="/beratung">Beratung</Footer.Link>
              <Footer.Link href="/kontakt">Kontakt</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Impressum</Footer.Link>
              <Footer.Link href="#">Cookies</Footer.Link>
              <Footer.Link href="#">Datenschutz</Footer.Link>
              <Footer.Link href="/AGB">AGB</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Socials" />
           
            <Footer.LinkGroup col>
            <Footer.Link href="https://www.linkedin.com/in/angelika-kiessling-kranzelmayer-20b62a93" ><FaLinkedin size={32}/></Footer.Link>
         
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Shaping Business™" year={2024} />
         
        </div>
         
      </div>
     
    </Footer>
  );
}