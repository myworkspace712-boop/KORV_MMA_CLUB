import { Link } from 'react-router-dom';
import { FaShieldAlt, FaMedal, FaUsers, FaDumbbell, FaArrowRight, FaCheck, FaWhatsapp } from 'react-icons/fa';
import './AboutUs.css';

function AboutUs() {
  const pricingPlans = [
    {
      name: 'Monthly',
      duration: '1 Month',
      price: '₹2,000',
      period: '/ month',
      description: 'Ideal for beginners starting their combat sports and fitness journey.',
      features: [
        'Full MMA & Boxing Sessions',
        'Strength & Conditioning Drills',
        'Certified Coach Mentorship',
        'Locker & Equipment Access'
      ],
      badge: null,
      popular: false,
      whatsappMsg: 'Hello! I would like to enroll in the Monthly Plan (₹2,000) at KORV MMA Club.'
    },
    {
      name: 'Quarterly',
      duration: '3 Months',
      originalPrice: '₹15,000',
      price: '₹12,000',
      period: '/ 3 months',
      savings: 'SAVE ₹3,000',
      description: 'Our most popular package to build real grit, combat skills, and stamina.',
      features: [
        'Complete Combat Arts Mastery',
        'Muay Thai & Mat Grappling',
        'Personalized Technique Feedback',
        'Diet & Conditioning Guidance'
      ],
      badge: 'SPECIAL OFFER',
      popular: true,
      whatsappMsg: 'Hello! I would like to enroll in the Quarterly Plan (₹12,000 - Offer Price) at KORV MMA Club.'
    },
    {
      name: '6 Months',
      duration: 'Half-Yearly',
      price: '₹18,000',
      period: '/ 6 months',
      description: 'Commit to deep discipline, functional strength, and fight conditioning.',
      features: [
        'Advanced Sparring Protocols',
        'High-Intensity Combat Circuits',
        'Continuous Progress Tracking',
        'Exclusive Sparring Access'
      ],
      badge: null,
      popular: false,
      whatsappMsg: 'Hello! I would like to enroll in the 6 Months Plan (₹18,000) at KORV MMA Club.'
    },
    {
      name: 'Yearly',
      duration: '12 Months',
      price: '₹20,000',
      period: '/ year',
      savings: 'BEST VALUE',
      description: 'Unconstrained 365-day elite combat immersion for serious athletes.',
      features: [
        '365 Days Unlimited Gym Access',
        'All Fighting Sports & Cage Drills',
        'Priority Coach Mentorship',
        'Full Athletic Transformation'
      ],
      badge: 'BEST VALUE',
      popular: true,
      whatsappMsg: 'Hello! I would like to enroll in the Yearly Annual Plan (₹20,000) at KORV MMA Club.'
    }
  ];

  const highlights = [
    {
      icon: <FaMedal />,
      title: 'Championship Pedigree',
      desc: 'Led by seasoned combat athletes, and certified coaches, dedicated to the technical mastery.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Structured Environment',
      desc: 'Modern safety gear, padded competition mats, and disciplined sparring protocols.'
    },
    {
      icon: <FaUsers />,
      title: 'Inclusive Community',
      desc: 'Whether taking your first punch or preparing for the cage, every member is family.'
    },
    {
      icon: <FaDumbbell />,
      title: 'Elite Facilities',
      desc: 'Professional full-size octagon cage, heavy bag lines, grappling mats, and strength zone.'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Top Header */}
        <div className="about-header">
          <span className="about-badge">ABOUT KORV MMA CLUB</span>
          <h2>
            WHERE POWER MEETS <span>SKILLS</span>
          </h2>
          <p className="about-lead">
            Founded with heart's uncompromising enthusiasm for authentic combat art, KORV MMA Club is more than just a gym. It is displined in grounded design to build grit and guts, where power meets skills.
          </p>
        </div>

        {/* Story Grid: Image & Core Philosophy */}
        <div className="about-main-grid">
          <div className="about-image-column">
            <div className="about-image-wrap">
              <img
                src="/MMA/image3.jpeg"
                alt="Athletes training at KORV MMA Club"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-content-column">
            <h3>THE KORV PHILOSOPHY</h3>
            <p>
              We believe combat sports is a disciplinary action, that empowers you to an enthusiastic journey of your life. We synthesize the most effective elements of Mixed Martial Arts, Boxing, Muay Thai, and more, that are suitable for many age groups.
            </p>
            <p>
              Whether your motive is weight loss, self-defense, functional training, or competitive sports, we help you with our <strong className="years-highlight">15+</strong> years of experience, to guide you through this fitness journey.
            </p>

            <div className="about-actions">
              <Link to="/sports" className="about-cta-btn">
                <span>Explore Disciplines</span>
                <FaArrowRight style={{ fontSize: '0.85rem' }} />
              </Link>
              <a
                href="https://wa.me/919925816161?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20admissions%20and%20training%20at%20KORV%20MMA%20Club."
                target="_blank"
                rel="noopener noreferrer"
                className="about-secondary-btn"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Athletic Metrics Bar — Inspired by the modern brutalist gym layout */}
        <div className="about-metrics-bar">
          <div className="metric-box metric-rating">
            <div className="metric-top">
              <div className="metric-score-wrap">
                <span className="metric-number">4.9</span>
                <span className="metric-scale">/5</span>
              </div>
            </div>
            <div className="metric-label">
              AVERAGE ATHLETE RATING FROM 480+ VERIFIED MEMBERS
            </div>
          </div>

          <div className="metric-box metric-excellence">
            <div className="metric-top">
              <div className="metric-score-wrap">
                <span className="metric-number">15+</span>
                <span className="metric-title-tag">YEARS OF EXCELLENCE</span>
              </div>
            </div>
            <ul className="metric-checklist">
              <li>• Expert certified combat sports personal trainers</li>
              <li>• State-of-the-art octagon cage and training mats</li>
              <li>• Personalized nutrition and fight conditioning plans</li>
            </ul>
          </div>
        </div>

        {/* Pricing Plans Section - Placed directly after The KORV Philosophy */}
        <div className="pricing-section-wrap">
          <div className="pricing-header">
            <span className="about-badge">MEMBERSHIP PACKAGES</span>
            <h3>
              TRAINING <span>PLANS</span>
            </h3>
            <p className="pricing-subtitle">
              Transparent, results-driven combat sports memberships tailored to your fitness journey.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'featured' : ''}`}
              >
                <div className="pricing-card-top-row">
                  <span className="pricing-index">0{index + 1}</span>
                  {plan.badge && (
                    <div className="pricing-badge">{plan.badge}</div>
                  )}
                </div>
                <div className="pricing-card-header">
                  <h4>{plan.name}</h4>
                  <span className="pricing-duration">{plan.duration}</span>
                </div>

                <div className="pricing-card-price">
                  {plan.originalPrice && (
                    <div className="price-cut-wrap">
                      <span className="price-cut">{plan.originalPrice}</span>
                      {plan.savings && <span className="price-savings">{plan.savings}</span>}
                    </div>
                  )}
                  <div className="price-main">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                </div>

                <p className="pricing-desc">{plan.description}</p>

                <ul className="pricing-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <FaCheck className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919925816161?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pricing-cta-btn ${plan.popular ? 'primary' : 'outline'}`}
                >
                  <FaWhatsapp style={{ fontSize: '1.1rem' }} />
                  <span>Join On WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="about-highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="about-card">
              <div className="card-tech-header">
                <span className="card-tech-index">0{index + 1}</span>
                <div className="about-card-icon">{item.icon}</div>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

