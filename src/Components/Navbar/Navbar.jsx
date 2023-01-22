import React, { useState } from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

export default function Navbar() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  const [transparent, setTansparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTansparent("header activeHeader");
    } else {
      setTansparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/some/valid/uri" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Dot
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/some/valid/uri" className="navLink">
                Inicio
              </a>
            </li>

            <li className="navItem">
              <a href="/some/valid/uri" className="navLink">
                Productos
              </a>
            </li>

            <li className="navItem">
              <a href="/some/valid/uri" className="navLink">
                Recursos
              </a>
            </li>
            <li className="navItem">
              <a href="/some/valid/uri" className="navLink">
                Contacto
              </a>
            </li>
            <li className="navItem">
              <a href="/some/valid/uri" className="navLink">
                Blog
              </a>
            </li>
            
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/some/valid/uri">Login</a>
              </button>
              <button className="btn">
                <a href="/some/valid/uri">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
}
