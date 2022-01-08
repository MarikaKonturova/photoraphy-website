import React from "react";
import s from "./Header.module.css";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
const onOpenChange = ()=>setOpen(!open)
  return (
    <header className={s.header}>
      <nav>
        <h1 id={s.logo}>Elena Joy</h1>
        <ul className={`${s.nav_links} ${open && s.nav_links_left}`}>
          <li onClick={onOpenChange}>
            <a href="#about" >About</a>
          </li>
          <li>
            <a href="#work" onClick={onOpenChange}>Work</a>
          </li>
          <li>
            <a href="#contact" onClick={onOpenChange}>Contact</a>
          </li>
        </ul>
        <div
          className={!open ? s.burger : s.close}
          onClick={() => setOpen(!open)}
        >
          <span> </span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
