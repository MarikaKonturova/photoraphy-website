import React from "react";
import s from "./Contact.module.css";
import elena from "../../assets/img/contact-image.jpg";

export function Contact() {
  return (
    <section id='contact'className={s.contact}>
      <div className={`${s.form_wrapper} flex`}>
        <h2>
          Get in
          <br /> <span>touch</span>{" "}
        </h2>
        <form>
          <label htmlFor="email">Your email</label>
          <input id="email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <img src={elena} alt="photo of elena joy" />
    </section>
  );
}
