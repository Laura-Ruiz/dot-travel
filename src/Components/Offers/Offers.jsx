import React, { useEffect } from "react";
import "./offers.css";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../assets/image1.jpeg";
import img7 from "../../assets/image12.jpg";
import img8 from "../../assets/image8.jpeg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Offer = [
  {
    id: 1,
    imgSrc: img8,
    destTitle: "Machu Picchu",
    location: "Peru",
    price: "7.427€",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "Guanajuato",
    location: "Mexico",
    price: "2.658€",
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    price: "4.400€",
  },
];

export default function Offers() {


  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up " data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Ofertas Especiales</h2>
          <p>Desde ciudades históricas hasta espectáculos naturales, ¡ven a ver lo mejor del mundo!</p>
        </div>
        <div className="mainContent grid">
          {Offer.map((offer) => {
            return (
              <div data-aos="fade-up" data-aos-duration="2000" key={offer.id} className="singleOffer">
                <div className="destImage">
                  <img src={offer.imgSrc} alt={offer.destTitle} />
                  <span className="discount">-30%</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{offer.price}</h4>
                    <span className="status">En Alquiler</span>
                  </div> 
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 camas</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 baño</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Transporte</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine 310, {offer.location}</small>
                  </div>

                  <button className="btn flex">
                    Ver Detalles
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
