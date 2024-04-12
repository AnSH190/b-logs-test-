'use client';
import React, { useEffect } from "react";

const HeroSection = () => {
  const titles = [
    "Unlocking the Power of Creativity: Inspiring Stories and Ideas",
    "Exploring Boundless Horizons: Journey Through Words and Wisdom",
    "Empowering Minds, Igniting Passions: Your Gateway to Growth",
    "Captivating Tales and Insights: Where Imagination Meets Reality",
    "Discovering the Extraordinary in the Everyday: A Blog for Dreamers",
    "Fuel Your Curiosity: Delve into Stories That Shape Perspectives",
    "Navigating Life's Pathways: Lessons, Discoveries, and Inspiration",
    "Unleashing Potential: Transformative Thoughts for a Brighter Tomorrow",
  ];

  
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{randomTitle}</h1>
          <p className="py-6">
            Building a Vibrant Community of Like-Minded Individuals, United by a
            Shared Love for Knowledge, Creativity, and Inspiration.
          </p>
          <a href="/blog">
          <button className="btn btn-primary">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
