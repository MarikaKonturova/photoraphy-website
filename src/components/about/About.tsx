import React from "react";
import s from "./About.module.css";
import about from '../../assets/img/about-image.png';
export function About() {
  return (
    <section id='about' className={s.about}>
      <div className={s.image}>
        <h5>MINIMAL</h5>
        <img src={about} alt="portrait-image" />
      </div>
      <div className={`${s.desc} flex`}>
        <h2>Elena Joy</h2>
        <div className={s.desc_life}>
          <h3>My life</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet nostrum aperiam ullam esse magni consequuntur, odio ea sed assumenda!</p>
        </div>
        <div className={s.desc_work}>
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet nostrum aperiam ullam esse magni consequuntur, odio ea sed assumenda!</p>
        </div>
        <div className={s.desc_contac}>
          <h3>Get in touch</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet nostrum aperiam ullam esse magni consequuntur, odio ea sed assumenda!</p>
        </div>
      </div>
    </section>
  );
}
