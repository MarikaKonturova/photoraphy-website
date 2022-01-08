import React from "react";
import s from "./Main.module.css";
import elena from "../../assets/img/elena-joy.png";
import plant from "../../assets/img/plant1.png";
import plant2 from "../../assets/img/plant2.png";

export function Main() {
  return (
    <main>
      <section className={s.hero}>
        <div className={`${s.hero_introduction} flex`}>
          <h2>
            Elena Joy <br /> Photography
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            provident odit, vitae libero iste blanditiis possimus animi nulla
            quisquam sapiente.
          </p>
          <a href="#gallery">Gallery</a>
        </div>
        <div className={s.hero_images}>
          <img id={s.hero_elena} src={elena} alt="picture of elena joy"></img>
          <img src={plant} alt="" className={`${s.plant} ${s.plant1}`} />
          <img src={plant2} alt="" className={`${s.plant} ${s.plant2}`} />
        </div>
      </section>
    </main>
  );
}
