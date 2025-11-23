import React from 'react';


const PartnerSupport = () => {
  return (
    <>
    
      <div className="ps-wrapper">
        <div className="container">
          <div className="ps-header-section">
            <div className="ps-header-subtitle  wow animate__animated animate__fadeInLeft">Reasons to Partner</div>
            <h1 className="display-5 fw-bold mt-4 text-white h1-head   wow animate__animated animate__fadeInRight"> Exceptional Support for Your <br /> Success</h1>
          </div>

          <div className="ps-cards-grid">
            <div className="row g-4">
              <div className="col-12 col-lg-4">
                <div className="ps-feature-card">
                  <div className="ps-card-image-container">
                    <div className="ps-payment-icon   wow animate__animated animate__fadeInLeft">
                      <img src="/assets/img/pat-support/Video.png" alt="Payment" />
                    </div>
                  </div>
                  <h3 className="ps-card-title pt-4  wow animate__animated animate__fadeInDown">Optimize customer journeys</h3>
                  <p className="ps-card-description  wow animate__animated animate__fadeInDown">Streamlined transactions enhancing efficiency and customer satisfaction.</p>
                  <button className="ps-card-button  wow animate__animated animate__fadeInDown">Explore</button>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <div className="ps-feature-card">

                  <h3 className="ps-card-title  wow animate__animated animate__fadeInLeft">Faster Processing Time</h3>
                  <p className="ps-card-description  wow animate__animated animate__fadeInRight">Quick and efficient payment processing for a seamless user experience.</p>
                  <button className="ps-card-button  wow animate__animated animate__fadeInDown">Learn more</button>

                  <div className="ps-video-container mt-4">
                    <img src="/assets/img/pat-support/Video-2.png" alt="" className="img-fluid  wow animate__animated animate__fadeInRight"/>
                  </div>
                  
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="ps-feature-card">
                  <div className="ps-avatar-container  wow animate__animated animate__fadeInLeft">
                      <img src="/assets/img/pat-support/Video-4.png" alt="" className="img-fluid"/>
                  </div>
                  <h3 className="ps-card-title  wow animate__animated animate__fadeInDown">Flexible Solutions</h3>
                  <p className="ps-card-description  wow animate__animated animate__fadeInLeft">Customizable options to meet the unique needs of your business.</p>
                  <button className="ps-card-button  wow animate__animated animate__fadeInRight">Explore now</button>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="ps-feature-card">
                 
                  <h3 className="ps-card-title   wow animate__animated animate__fadeInDown">Effortless Integration</h3>
                  <p className="ps-card-description  wow animate__animated animate__fadeInDown">Simple API integration with your existing systems and platforms.</p>
                  <button className="ps-card-button  wow animate__animated animate__fadeInDown">Learn more</button>
                  <img src="/assets/img/pat-support/Video-6.png" alt="" className="img-fluid mt-5  wow animate__animated animate__fadeInDown"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSupport;