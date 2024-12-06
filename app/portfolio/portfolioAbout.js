"use client";

import React, { useState } from "react";
import styles from "../css/gallery.module.css"; // CSS Module
import Summary from "./summary";
import Skills from "./skills";
import Education from "./education";
import ExperienceOne from "./experienceOne";
import ExperienceTwo from "./experienceTwo";
import AcademicProjects from "./academicProjects";

const PortfolioAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    <Summary />,
    <Education/>,
    <Skills />,
    <ExperienceOne/>,
    <ExperienceTwo/>,
    <AcademicProjects/>
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryWrapper}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${styles.galleryItem} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
          >
            {section}
          </div>
        ))}
      </div>
      <button className={`${styles.galleryArrow} ${styles.left}`} onClick={handlePrev}>
        &lt;
      </button>
      <button className={`${styles.galleryArrow} ${styles.right}`} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default PortfolioAbout;
