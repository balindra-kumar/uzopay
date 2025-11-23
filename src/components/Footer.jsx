import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false)

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='footer-area'>
    <footer className="footer container-fluid">
    <div className='row'>
      <div className="footer-content">
        <div className="col-md-4">
          <h5 className="wow animate__animated animate__fadeInLeft">UzOPay</h5>
          <p className='  wow animate__animated animate__fadeInDown'>Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities.</p>
          <div className="footer-social py-4">
          <div>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-1">
                <Link to="#" className="icon fb wow animate__animated animate__fadeInDown">
                  <img src="/assets/img/facebook.png" alt=""/>
                </Link>
              </li>

              <li className="list-inline-item mx-1">
                <Link to="#" className="icon x wow animate__animated animate__fadeInDown">
                  <img src="/assets/img/twitter.png" alt=""/>
                </Link>
              </li>

              <li className="list-inline-item mx-1">
                <Link to="#" className="icon ig wow animate__animated animate__fadeInDown">
                  <img src="/assets/img/instagram.png" alt="xv"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        </div>
        <div className="footer-links col-md-8">
         <div className='row'>
          <div className='col-md-3 wow animate__animated animate__fadeInDown'>
            <h6>Payment</h6>
            <ul>
              <li>Payment Gateway</li>
              <li>Payment Links</li>
              <li>Payment Methods</li>
              <li>Bulk Payment</li>
              <li>Invoice</li>
            </ul>
          </div>
          <div className='col-md-3 wow animate__animated animate__fadeInDown'>
            <h6>AI Banking</h6>
            <ul>
              <li>Current Account</li>
              <li>Accounting</li>
              <li>API Banking</li>
              <li>UPI Autopay</li>
              <li>Tax Payment</li>
            </ul>
          </div>
          <div className='col-md-3 wow animate__animated animate__fadeInDown'>
           <h6 className='invisible'>Payment</h6>
            <ul>
             
              <li>Cards</li>
              <li>CMS</li>
            </ul>
          </div>
          <div className='col-md-3 wow animate__animated animate__fadeInDown'>
            <h6>Company</h6>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cards</li>
              <li>CMS</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom wow animate__animated animate__fadeInLeft">
        <span>© 2025 UzOPay</span>
         <div className="footer-terms">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        
      </div>
    
      {showScroll && (
        <button className="scroll-to-top wow animate__animated animate__fadeInRight" onClick={scrollToTop}>
          ↑
        </button>
      )}
      </div>
    </footer>
    </section>
  )
}

export default Footer
