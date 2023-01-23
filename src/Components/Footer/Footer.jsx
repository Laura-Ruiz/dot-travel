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
        <div className="logoDiv">
          <div
            className="footerLogo"
          >
            <a href="/" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Información</span>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Explorar</a>
          </li>
          <li>
            <a href="/">Viajes</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Enlaces útiles</span>
          <li>
            <a href="/" >Destino</a>
          </li>
          <li>
            <a href="/" >Soporte</a>
          </li>
          <li>
            <a href="/">Viajes y Condiciones</a>
          </li>
          <li>
            <a href="/">Privacidad</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contacta con nosotros</span>
          <span className="phone">+34 649038455</span>
          <span className="email">agencia.dot@gmail.com</span>
        </div>
      </div>
    </section>
  ); 
}
