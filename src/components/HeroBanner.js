import React from "react";


export default function HeroBanner() {
  return (
    <section
  className="hero-wrapper">

      <div className="hero-container">

        <div className="hero-left">
          <h1 className="hero-title  wow animate__animated animate__fadeInLeft">
            Let’s build the <br />
            future of finance together
          </h1>
        </div>

        <div className="hero-right">
          <button className="btn-glow  wow animate__animated animate__fadeInRight">Get Started →</button>
        </div>

      </div>

      {/* <img src={bg} className="hero-bg" alt="background pattern" /> */}
    </section>
  );
}
