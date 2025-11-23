import React from "react"


export default function PaymentsSection() {
  return (
    <section className="payments-section container-fluid py-5">
      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-md-6 ps-md-5 wow animate__animated animate__fadeInUp">
          <button className="label-btn">Reliable, and Efficient</button>

          <h2 className="display-6 fw-bold text-white mt-4 wow animate__animated animate__slideInLeft">
            Simplify the <br /> payments process
          </h2>

          <p className="text-secondary mt-3 wow animate__animated animate__slideInRight">
            Tools crafted to simplify and enhance your payout processes.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 position-relative mt-5 mt-md-0">
          <div className="sdk-card wow animate__animated animate__fadeInUp">
           <img src="/assets/img/payment-right-img.PNG" alt="" className="img-fluid" />
          </div>
        </div>

      </div>
    </section>
  )
}
