import React, { useEffect } from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../assets/image10.jpg";
import img2 from "../../assets/image6.jpg";
import img3 from "../../assets/image4.jpg";
import img4 from "../../assets/image11.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
    id: 1,
    postImg: img,
    title: "Precioso Marruecos, viajemos!",
    desc: "El reino de Marruecos es un país musulmán situado al oeste del norte de África, con costas en el océano Atlántico y el mar Mediterráneo.",
  },
  {
    id: 2,
    postImg: img2,
    title: "Momentos románticos bajo la Torre Eiffel",
    desc: "con vastas extensiones de desierto al este y al oeste y el rico valle del río Nilo en su centro, es el emplazamiento de una de las primeras y más grandes civilizaciones del mundo.",
  },
  {
    id: 3,
    postImg: img3,
    title: "Vivamos una aventura fuera de Túnez",
    desc: "Túnez es  el país más pequeño del Magreb, ubicado entre las estribaciones orientales de la cordillera montañosa del Atlas y el mar Mediterráneo.",
  },
  {
    id: 4,
    postImg: img4,
    title: "El mejor país de África Oriental",
    desc: "Cuando Kenia reclamó su independencia del Reino Unido en 1963, los líderes de la recién formada república promovieron un sentimiento de unidad nacional utilizando el lema.",
  },
];

export default function Blog() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">¿Nuestro Mejor Blog?</h2>
          <p data-aos="fade-up" data-aos-duration="2500" >Una visión de la increíble experiencia en el mundo.</p>
        </div>

        <div className="mainContainer grid">
          {Posts.map((post) => {
            return (
              <div data-aos="fade-up" data-aos-duration="2000" key={post.id} className="singlePost grid">
                <div className="imgDiv">
                  <img src={post.postImg} alt={post.title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">{post.title}</h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                   {post.desc}
                  </p>
                </div>
                <a data-aos="fade-up" data-aos-duration="4500" href="/some/valid/uri" className="flex">
                  Leer más
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
