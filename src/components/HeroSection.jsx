import React from "react"
import "../assets/style.sass"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">  
        <nav className="navbar navbar-expand-lg navbar-dark nav-glass px-4">
            <Link className="navbar-brand fw-bold text-white" to="/">UzOPay</Link>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navMenu">
           <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link nav-active" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  
                  id="aiBankingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AI Banking
                </Link>
                <ul className="dropdown-menu" aria-labelledby="aiBankingDropdown">
                  <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/analytic">Analytics</Link></li>
                  <li><Link className="dropdown-item" to="/report">Reports</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/payment">Payments</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/payout">Payouts</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/payroll">Payroll</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            </ul>

            </div>
        </nav>
      </div>

      {/* HERO CONTENT */}
      <div className="row align-items-center mt-5 hero-row">
        <div className="col-md-6 text-left">
          <div className="gradient-border">
            <button className="label-btn wow animate__animated animate__fadeInUp">Reliable, and Efficient</button>
            {/* <button className="tag-btn">Pay Smart. Pay Fast</button> */}
            </div>

          <h1 className="display-5 fw-bold mt-4 text-white h1-head  wow animate__animated animate__fadeInUp">
            End-to-End Payout & Payroll<br /> Solutions for Digital Era.
          </h1>

          <p className="text-secondary mt-3  wow animate__animated animate__fadeInUp">
            Optimize transactions and payouts with our secure,
            efficient payment gateway solution, ensuring smooth operations.
          </p>

          <div className="mt-5">
            <div className="btn-wrapper">
              <button className="btn-dark  wow animate__animated animate__fadeInUp">
                Reach out <span className="arrow">›</span>
              </button>

              <button className="btn-glow  wow animate__animated animate__fadeInUp">
                Get Started <span className="arrow">›</span>
              </button>
            </div>

          </div>
        </div>

        <div className="col-md-6 text-center">
           <div className="robot-img-area">
                <img src="assets/img/robot.png" className="robot-img img-fluid" alt="ai-robot" />
                {/* <img src="assets/img/Rectangle 34624713.png" alt="bg" className="img-fluid"/> */}
                <div className="floating-label label1">Sales Product Screening</div>
                <div className="floating-label label2">Transactions</div>
                <div className="floating-label label3">Payout process</div>
           </div>
        </div>
      </div>
    </section>
  )
}
