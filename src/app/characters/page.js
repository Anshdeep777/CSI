'use client'

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MetallicCard.css';

gsap.registerPlugin(ScrollTrigger);

// Individual Card Component
const MetallicCard = ({ name, role, specialty, imageSrc, cardClass }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Calculates 3D rotation based on mouse position
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = -(mouseY / (card.height / 2)) * 15;
    const rotateY = (mouseX / (card.width / 2)) * 15;

    setRotation({ x: rotateX, y: rotateY });

    const glareX = (e.clientX - card.left) / card.width * 100;
    const glareY = (e.clientY - card.top) / card.height * 100;
    
    cardRef.current.style.setProperty('--mx', `${glareX}%`);
    cardRef.current.style.setProperty('--my', `${glareY}%`);
  };

  // Triggers active hover state
  const handleMouseEnter = () => setIsHovered(true);

  // Resets card to flat position
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    if (cardRef.current) {
      cardRef.current.style.setProperty('--mx', '50%');
      cardRef.current.style.setProperty('--my', '50%');
    }
  };

  return (
    <div className={`perspective-container ${cardClass}`}>
      <div
        className={`metallic-card ${!isHovered ? 'resetting' : ''}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        <div className="glare"></div>
        <div className="card-content">
          <img src={imageSrc} alt={name} className="character-img" />
          <div className="info-box">
            <h2 className="info-name">{name}</h2>
            <h3 className="info-role">{role}</h3>
            <p className="info-specialty">{specialty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Parent Gallery Component
export default function CardGallery() {
  const galleryRef = useRef(null);

  // Character data config
  const cardsData = [
    {
      id: 1,
      name: "Priya Nair",
      role: "COO // Sprint",
      specialty: "Logistics Operations & Crisis Management",
      imageSrc: "/priya.png" 
    },
    {
      id: 2,
      name: "Mr. Green",
      role: "Pod Lead // GreenEdge",
      specialty: "Systems Thinking & Macro-Economics",
      imageSrc: "/manager.png"
    },
    {
      id: 3,
      name: "Aryan Mehta",
      role: "CEO // Sprint",
      specialty: "Hyper-Growth Scaling & Executive Pushback",
      imageSrc: "/aryanceo.png"
    }
  ];

  // GSAP scroll trigger staggered entrance
  useGSAP(() => {
    gsap.from(".character-card-anim", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 80%",
      }
    });
  }, { scope: galleryRef });

  return (
    <div className="card-gallery" ref={galleryRef}>
      {cardsData.map((card) => (
        <MetallicCard 
          key={card.id}
          name={card.name}
          role={card.role}
          specialty={card.specialty}
          imageSrc={card.imageSrc}
          cardClass="character-card-anim"
        />
      ))}
    </div>
  );
}