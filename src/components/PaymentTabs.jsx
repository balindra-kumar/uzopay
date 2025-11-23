import React, { useState } from "react";


const tabsData = [
  {
    id: "payments",
    label: "Payments",
    icon:"/assets/img/payment-icon.png",
    content: {
      title: "Elevate Your Online Store's Payment Experience",
      description:
        "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store’s payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
      features: [
        {
          text: "PCI DSS Compliant",
          icon: "/assets/img/Icon-8.png"
        },
        {
          text: "End-to-End Encryption",
          icon: "/assets/img/Icon-7.png"
        },
        {
          text: "Fraud Detection",
          icon: "/assets/img/Icon-6.png"
        }
      ]
    }
  },
  {
    id: "payout",
    label: "Payout",
    icon:"/assets/img/payout-icon.png",
    content: {
      title: "Seamless, reliable payout management.",
      description:
        "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store’s payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
      features: [
        {
          text: "PCI DSS Compliant",
          icon: "/assets/img/Icon-8.png"
        },
        {
          text: "End-to-End Encryption",
          icon: "/assets/img/Icon-7.png"
        },
        {
          text: "Fraud Detection",
          icon: "/assets/img/Icon-6.png"
        }
      ]
    }
  },
  {
    id: "payroll",
    icon:"/assets/img/payroll-icon.png",
    label: "Payroll",
    content: {
      title: "Simplify your payroll process.",
      description:
        "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store’s payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
        features: [
        {
          text: "PCI DSS Compliant",
          icon: "/assets/img/Icon-8.png"
        },
        {
          text: "End-to-End Encryption",
          icon: "/assets/img/Icon-7.png"
        },
        {
          text: "Fraud Detection",
          icon: "/assets/img/Icon-6.png"
        }
      ]
    }
  },
  {
    id: "aiBanking",
    label: "AI Banking",
    icon:"/assets/img/ai-banking.png",
    content: {
      title: "Revolutionize banking with AI.",
      description:
        "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store’s payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
      features: [
        {
          text: "PCI DSS Compliant",
          icon: "/assets/img/Icon-8.png"
        },
        {
          text: "End-to-End Encryption",
          icon: "/assets/img/Icon-7.png"
        },
        {
          text: "Fraud Detection",
          icon: "/assets/img/Icon-6.png"
        }
      ]
    }
  }
];

const PaymentTabs = () => {
  const [activeTab, setActiveTab] = useState("payments");

  const activeContent = tabsData.find(t => t.id === activeTab).content;

  return (
    <section className="payment-tabs-container">
      <p className="text-secondary text-center   wow animate__animated animate__fadeInLeft">
       Enhancing payment
      </p>
      <h1 className="display-5 fw-bold text-center mb-3 text-white h1-head   wow animate__animated animate__fadeInRight">
        Powering Payments Across <br /> Industries
      </h1>

      <div className="tabs-border">
      <nav className="tabs">
        {tabsData.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`tab-btn ${activeTab === id ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
          > 
            {icon && (
                <img
                  src={icon}
                  alt={label}
                  className="tab-icon"
                />
              )}
            {label}
          </button>
        ))}
      </nav>

      <div className="content-area">
        <div className="text-content">
          <h3 className="wow animate__animated animate__fadeInDown">{activeContent.title}</h3>
          <p className="wow animate__animated animate__fadeInDown">{activeContent.description}</p>
          <ul className="features-list">
            {activeContent.features.map((f, i) => (
              <li key={i} className="wow animate__animated animate__fadeInDown">
               <img 
                  src={f.icon} 
                  alt={f.text}
                  width="16"
                  height="16"
                />

                {f.text}
              </li>
            ))}
          </ul>
        
          <button class="btn-glow wow animate__animated animate__fadeInLeft">Get Started <span class="arrow">›</span></button>
        </div>

        <div className="image-content   wow animate__animated animate__fadeInRight">
          <img
            src="/assets/img/standard-img.png"
            alt={activeTab}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default PaymentTabs;
