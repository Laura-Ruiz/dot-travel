import React,{useEffect}  from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Planea Tu Viaje Con Travel Dot
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Viaja a tu ciudad favorita respetando el medioambiente!
          </p>
          <button data-aos="fade-up" data-aos-duration="3000" className='btn'>
            <a href="/">Explorar</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">
            </label>
            <input type="text" placeholder='Destino soñado' />
          </div>
          <div className="distDiv">
            <label htmlFor="distance">
            </label>
            <input type="text" placeholder='11 Km' />

          </div>
          <div className="priceDiv">
            <label htmlFor="price">
            </label>
            <input type="text" placeholder='140€-500€' />

          </div>
          <button className='btn'>
            Buscar
          </button>
        </div>
      </div>
      </section>
  )
}
