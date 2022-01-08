import React from "react";
import s from './Footer.module.css'
import youtube from "../../assets/img/youtube.svg";
import twitter from "../../assets/img/twitter.svg";
import instagram from "../../assets/img/instagram.svg";

export function Footer() {
  return (
    <footer className={s.footer}>
      <h4>Elena Joy &copy; 2022</h4>
      <ul>
        <li>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
