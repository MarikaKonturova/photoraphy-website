import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { About } from "./components/about/About";
import { Gallery } from "./components/gallery/Gallery";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
