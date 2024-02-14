'use client';

import { Footer } from 'flowbite-react';
import './css/footer.css'

export default function Component() {
  return (
    <Footer className="footer">
     <div className="w-full footer-background" /> 
      <div className="w-full footer-content">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3  bottom-0">
          <div>
            <Footer.Title title="Unternehmen" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Philosophie</Footer.Link>
              <Footer.Link href="#">Beratung</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Socials" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
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