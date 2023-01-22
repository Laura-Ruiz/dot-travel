import React, { useEffect } from 'react'
import './about.css'
import img from '../../assets/customer.png'
import img2 from '../../assets/mountain.png'
import img3 from '../../assets/climbing.png'

import video from '../../assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'
 
export default function About() {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          ¿Por qué senderimos?
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img2} alt="mountains" />
            <h3>+100 montañas</h3>
            <p>Las investigaciones muestran que la oportunidad de romper con los ritmos normales de la vida diaria reduce el estrés y mejora la salud y el bienestar.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img3} alt="hikings" />
            <h3>+1000 rutas
            </h3>
            <p>Las investigaciones muestran que la oportunidad de romper con los ritmos normales de la vida diaria reduce el estrés y mejora la salud y el bienestar.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img} alt="customer" />
            <h3>+2000 clientes</h3>
            <p>Las investigaciones muestran que la oportunidad de romper con los ritmos normales de la vida diaria reduce el estrés y mejora la salud y el bienestar.</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration="2000"className="cardText">
              <h2>¡Una experiencia maravillosa!</h2>
              <p>La clasificación del ranking se basa en una media ponderada según las puntuaciones de cinco países.</p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
