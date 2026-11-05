import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaTrophy, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { GiBoxingGlove, GiKimono, GiPunchBlast, GiBeltArmor } from 'react-icons/gi';
import './Sports.css';

const sportsData = [
  {
    id: 'mma',
    name: 'Mixed Martial Arts (MMA)',
    category: 'hybrid',
    categoryLabel: 'Mixed Combat',
    icon: <FaTrophy />,
    image: 'https://images.unsplash.com/photo-1550254478-ced40a6a7224?w=900&auto=format&fit=crop&q=80',
    description:
      'The ultimate proving ground. Seamlessly blend striking, wrestling, cage control, and ground submissions into an adaptable combat style.',
    highlights: ['Cage Control', 'Ground & Pound', 'Transitions', 'Fight IQ'],
    intensity: 'High Intensity',
    experience: 'Beginner to Professional'
  },
  {
    id: 'boxing',
    name: 'Boxing',
    category: 'striking',
    categoryLabel: 'Striking',
    icon: <GiBoxingGlove />,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&auto=format&fit=crop&q=80',
    description:
      'The Sweet Science. Master head movement, rhythmic footwork, defensive pivots, and devastating combination punching with precision.',
    highlights: ['Footwork & Angles', 'Head Movement', 'Speed & Power', 'Pad Work'],
    intensity: 'Cardio & Power',
    experience: 'All Skill Levels'
  },
  {
    id: 'muay-thai',
    name: 'Muay Thai',
    category: 'striking',
    categoryLabel: 'Striking',
    icon: <GiPunchBlast />,
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c019309?w=900&auto=format&fit=crop&q=80',
    description:
      'The Art of Eight Limbs. Unpack powerful punches, elbows, knees, and shin kicks paired with aggressive clinch control and sweeps.',
    highlights: ['8-Limbs Arsenal', 'Clinch Fighting', 'Low & Body Kicks', 'Heavy Bag Drills'],
    intensity: 'High Impact',
    experience: 'All Skill Levels'
  },
  {
    id: 'bjj',
    name: 'Brazilian Jiu-Jitsu (BJJ)',
    category: 'grappling',
    categoryLabel: 'Grappling',
    icon: <GiKimono />,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&auto=format&fit=crop&q=80',
    description:
      'The gentle art of leverage and technique. Control larger opponents through sweeps, dominant positioning, joint locks, and chokes.',
    highlights: ['Positional Hierarchy', 'Submissions', 'Guard Passing', 'Gi & No-Gi'],
    intensity: 'Strategic & Mental',
    experience: 'White to Black Belt'
  },
  {
    id: 'wrestling',
    name: 'Wrestling',
    category: 'grappling',
    categoryLabel: 'Grappling',
    icon: <GiBeltArmor />,
    image: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=900&auto=format&fit=crop&q=80',
    description:
      'Explosive takedowns and relentless mat pressure. Develop impenetrable takedown defense, hand fighting, and control on the ground.',
    highlights: ['Double & Single Legs', 'Sprawling Defense', 'Hand Fighting', 'Mat Returns'],
    intensity: 'Max Conditioning',
    experience: 'All Skill Levels'
  },
  {
    id: 'kickboxing',
    name: 'Kickboxing & Conditioning',
    category: 'striking',
    categoryLabel: 'Striking',
    icon: <FaFire />,
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&auto=format&fit=crop&q=80',
    description:
      'Dutch-style combinations and high-octane cardio drills designed to forge fighter endurance, explosive stamina, and core strength.',
    highlights: ['Dutch Combos', 'HIIT Cardio', 'Rotational Power', 'Agility Drills'],
    intensity: 'High Calorie Burn',
    experience: 'Beginner Friendly'
  }
];

function Sports() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSports =
    activeFilter === 'all'
      ? sportsData
      : sportsData.filter((sport) => sport.category === activeFilter);

  return (
    <div className="sports-page">
      {/* Hero Header Banner */}
      <section className="sports-hero">
        <div className="sports-hero-content">
          <span className="sports-badge">KORV COMBAT DISCIPLINES</span>
          <h1 className="sports-mega-title">SERVICES</h1>
          <h2 className="sports-sub-title">
            HIGH-INTENSITY TRAINING KEEPS YOU MOTIVATED AND POWERFUL
          </h2>
          <p>
            Whether your goal is stepping into the cage, mastering the sweet science of striking,
            or dominating on the grappling mats, our world-class coaches teach proven techniques
            for every level.
          </p>

          {/* Filter Pills */}
          <div className="sports-filter-bar">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Disciplines ({sportsData.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'striking' ? 'active' : ''}`}
              onClick={() => setActiveFilter('striking')}
            >
              Striking
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'grappling' ? 'active' : ''}`}
              onClick={() => setActiveFilter('grappling')}
            >
              Grappling
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'hybrid' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hybrid')}
            >
              Mixed / MMA
            </button>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="sports-grid-section">
        <div className="sports-grid">
          {filteredSports.map((sport, index) => (
            <article key={sport.id} className="sport-card">
              <div className="sport-card-image-wrap">
                <img src={sport.image} alt={sport.name} loading="lazy" />
                <div className="sport-card-overlay-gradient"></div>
                <div className="sport-card-top-tags">
                  <span className="sport-tech-index">0{index + 1}</span>
                  <div className="sport-tag-pill">{sport.categoryLabel}</div>
                </div>
              </div>

              <div className="sport-card-body">
                <div className="sport-card-header">
                  <span className="sport-icon">{sport.icon}</span>
                  <h2>{sport.name}</h2>
                </div>

                <p className="sport-desc">{sport.description}</p>

                <div className="sport-highlights">
                  {sport.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-chip">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="sport-meta-row">
                  <div className="meta-item">
                    <span className="meta-label">Intensity</span>
                    <span className="meta-value">{sport.intensity}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Level</span>
                    <span className="meta-value">{sport.experience}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919925816161?text=${encodeURIComponent(`Hello! I would like to inquire about training sessions and admissions for ${sport.name} at KORV MMA Club.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sport-enroll-btn"
                >
                  <FaWhatsapp style={{ fontSize: '1.15rem' }} />
                  <span>Inquire on WhatsApp</span>
                  <FaArrowRight className="enroll-arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="sports-cta-banner">
        <div className="sports-cta-content">
          <h2>NOT SURE WHERE TO START?</h2>
          <p>
            Our dedicated coaching staff will assess your goals and guide you into the discipline
            that fits you best.
          </p>
          <div className="sports-cta-actions">
            <Link to="/signup" className="cta-primary-btn">
              Join KORV MMA
            </Link>
            <a
              href={`https://wa.me/919925816161?text=${encodeURIComponent('Hello! I would like to speak regarding training sessions and admissions at KORV MMA Club.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary-btn"
            >
              <FaWhatsapp style={{ marginRight: '6px', fontSize: '1.1rem', verticalAlign: 'middle', color: '#25d366' }} />
              Chat With Admissions (+91 99258 16161)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sports;

