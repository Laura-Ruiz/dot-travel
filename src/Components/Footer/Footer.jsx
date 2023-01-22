import React, { useEffect } from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="footerLogo"
          >
            <a href="/some/valid/uri" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">Información</span>
          <li>
            <a href="/some/valid/uri">Inicio</a>
          </li>
          <li>
            <a href="/some/valid/uri">Explorar</a>
          </li>
          <li>
            <a href="/some/valid/uri">Viajes</a>
          </li>
          <li>
            <a href="/some/valid/uri">Blog</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
          <span className="linkTitle">Enlaces útiles</span>
          <li>
            <a href="some/valid/uri">Destino</a>
          </li>
          <li>
            <a href="some/valid/uri">Soporte</a>
          </li>
          <li>
            <a href="/some/valid/uri">Viajes y Condiciones</a>
          </li>
          <li>
            <a href="/some/valid/uri">Privacidad</a>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
          <span className="linkTitle">Contacta con nosotros</span>
          <span className="phone">+34 649038455</span>
          <span className="email">agencia.dot@gmail.com</span>
        </div>
      </div>
    </section>
  ); 
}
