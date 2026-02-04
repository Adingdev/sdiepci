import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReservationModal from '../common/ReservationModal';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reservationOpen, setReservationOpen] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Plomberie Professionnelle',
      description: 'Installation et réparation de tous systèmes de plomberie',
      image: '/images/services/plomberie.jpg',
      link: '/services/plomberie'
    },
    {
      id: 2,
      title: 'Carrelage sur Mesure',
      description: 'Pose professionnelle de carrelage pour sols et murs',
      image: '/images/services/carrelage.jpg',
      link: '/services/carrelage'
    },
    {
      id: 3,
      title: 'Électricité Certifiée',
      description: 'Installations électriques conformes aux normes',
      image: '/images/services/electricite.jpg',
      link: '/services/electricite'
    },
    {
      id: 4,
      title: 'Vitrerie & Miroiterie',
      description: 'Installation et réparation de vitrages',
      image: '/images/services/vitrerie.jpg',
      link: '/services/vitrerie'
    },
    {
      id: 5,
      title: 'Peinture Intérieure & Extérieure',
      description: 'Travaux de peinture avec finitions professionnelles',
      image: '/images/services/peinture.jpg',
      link: '/services/peinture'
    },
    {
      id: 6,
      title: 'Menuiserie Artisanale',
      description: 'Fabrication et pose de menuiseries sur mesure',
      image: '/images/services/menuiserie.jpg',
      link: '/services/menuiserie'
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-text"
              >
                <h1 className="hero-title">
                  {slides[currentSlide].title}
                </h1>
                <p className="hero-subtitle">
                  {slides[currentSlide].description}
                </p>
                <div className="hero-buttons">
                  <Link to={slides[currentSlide].link} className="btn btn-primary">
                    Découvrir ce service
                  </Link>
                  <button 
                    onClick={() => setReservationOpen(true)} 
                    className="btn btn-secondary"
                  >
                    Réserver un dépannage
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
              <FaChevronRight />
            </button>

            {/* Dots Navigation */}
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <ReservationModal 
        isOpen={reservationOpen} 
        onClose={() => setReservationOpen(false)} 
      />
    </>
  );
};

export default Hero;
