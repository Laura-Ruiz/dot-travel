import React, {useEffect} from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort, BsDot } from "react-icons/bs";
import img2 from "../../assets/image2.jpeg";
import img5 from "../../assets/image5.jpeg";
import img7 from "../../assets/image7.jpeg";
import img9 from "../../assets/image9.jpeg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURA RELAX",
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURA RELAX",
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURA RELAX",
  },
  {
    id: 4,
    imgSrc: img9,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURA RELAX",
  },
];

export default function Popular() {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right " data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">Destinos Populares</h2>
            <p>
              Desde ciudades históricas hasta naturaleza espectacular, ven a ver
              lo mejor del mundo!
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="2500"  className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map((item) => {
            return (
              <div data-aos="fade-up" key={item.id} className="singleDestination">
                <div className="destImage">
                  <img src={item.imgSrc} alt="Title" />
                  <div className="overlayInfo">
                    <h3>{item.destTitle}</h3>
                    <p>{item.location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{item.id}</div>
                  <div className="destText flex">
                    <h6>{item.location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
