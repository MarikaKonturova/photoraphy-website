import React from "react";
import s from "./Gallery.module.css";
import image1 from "../../assets/img/gallery-1.jpg";
import image2 from "../../assets/img/gallery-2.jpg";
import image3 from "../../assets/img/gallery-3.jpg";
import image4 from "../../assets/img/gallery-4.jpg";

export function Gallery() {
  return (
    <div id='work' className={s.gallery}>
      <header className={s.header}>
        <h2>Quality Photography</h2>
        <p>My portfolio pictures</p>
      </header>
      <img className={s.gallery1} src={image1} alt="lady in suit" />
      <img className={s.gallery2} src={image2} alt="lady in coat" />
      <img className={s.gallery3} src={image3} alt="lady in t-shirt" />
      <img className={s.gallery4} src={image4} alt="lady in jacket" />
    </div>
  );
}
