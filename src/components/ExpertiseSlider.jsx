import React from "react"
import OwlCarousel from "react-owl-carousel"


const data = [
  {
    title: "UPI Autopay",
    desc: "Automate your payments with UPI Autopay, enabling timely transactions without manual effort.",
    // icon: "/icons/upi.png"
  },
  {
    title: "API Banking",
    desc: "Integrate financial services seamlessly with our robust API banking solutions.",
    // icon: "/icons/api.png"
  },
  {
    title: "Payouts",
    desc: "Deliver payouts swiftly and securely to employees, partners, or clients.",
    // icon: "/icons/payouts.png"
  },
  {
    title: "Bulk Payments",
    desc: "Process multiple payments at once, saving time and reducing errors.",
    // icon: "/icons/bulk.png"
  },
  {
    title: "QR Payments",
    desc: "Accept QR-based payments instantly with seamless API integrations.",
    // icon: "/icons/qr.png"
  },
  {
    title: "Vendor Payouts",
    desc: "Automate vendor settlements with zero manual operations.",
    // icon: "/icons/vendor.png"
  }
]

export default function ExpertiseSlider() 
{
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  }

  return (
    <div className="expert-wrapper">

      <div className="expert-header">
        <p className="top-text">Our Expertise</p>
        <h2>Redefining <span>Payment</span> Processing for You</h2>
      </div>
      { /*
      <OwlCarousel className="expert-owl" {...options}>
        {data.map((item, i) => (
          <div className="expert-card" key={i}>
            <img src={item.icon} alt="" className="card-icon" /> 
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <div className="arrow">→</div>
          </div>
        ))}
      </OwlCarousel>
      */}
    </div>
  )
}
