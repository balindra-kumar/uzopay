import React from "react";



export default function PayoutSection() {
  return (
    <section className="payout-wrapper">
      <div className="payout-container flex-column1">
        
        {/* LEFT SIDE */}
        <div className="payout-left payout-container">

          <div><img src="/assets/img/left-sidebar-bar.PNG" alt="" className="left-sidebar-bar  wow animate__animated animate__slideInLeft"/></div>
          <div>
          <div className="tag wow animate__animated animate__slideInRight">Payout Service Centric</div>

          <h1 class="display-5 fw-bold mt-4 text-white h1-head mb-3 wow animate__animated animate__slideInUp"> Streamlined for Payout Ease and <br /> Efficiency</h1>

          <div className="feature mb-4">
            <div className="dot"></div>
            <div>
              <h3 className="wow animate__animated animate__fadeInUp">Comprehensive Documentation</h3>
              <p className="text-secondary wow animate__animated animate__fadeInUp">
                Access clear, detailed documentation that simplifies integration
                and accelerates your payout setup.
              </p>
            </div>
          </div>

          <div className="feature mb-4">
            <div className="dot"></div>
            <div className="text-secondary">
              <h3 className="wow animate__animated animate__fadeInUp">Quick Start SDKs</h3>
              <p className="wow animate__animated animate__fadeInUp">
                Leverage ready-to-use SDKs for various programming languages,
                enabling quick and smooth payout implementation.
              </p>
            </div>
          </div>

          <div className="feature mb-5">
            <div className="dot"></div>
            <div className="text-secondary">
              <h3 className="wow animate__animated animate__fadeInUp">Sandbox Environment</h3>
              <p className="wow animate__animated animate__fadeInUp">
                Test and refine your payout integration in a secure sandbox
                environment before going live.
              </p>
            </div>
          </div>

          {/* <button className="start-btn">Get Started →</button> */}
          <button class="btn-glow wow animate__animated animate__fadeInDown">Get Started <span class="arrow">›</span></button>
        </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="payout-right">
          <img src="assets/img/Content.png" className="hex-graphic" alt="graphic" />
        </div>

      </div>
    </section>
  );
}
