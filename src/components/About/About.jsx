import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.aboutItem}>
        <div className={styles.aboutItemParagraph}>
        <p>
          I'm a amateur software developer with 4 years of learning experiences. My main focus has been as a UI/UX designer and Frontend Developer. However, I have been exploring all the different fields of software development over the years. Here is more about my journey. 
        </p>
        </div>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/90p.svg")} alt="UI icon" /> <br/>
            <div className={styles.aboutItemText}>
              <h3>UI//UX Designing</h3>
              <p>
                I am extremely well-versed in designing webpages, user-interface, graphic designing, information architecture, etc.  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/80p.svg")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                As a frontend developer, I well experienced in building responsive
                and optimized website as well as mobile applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/70p.svg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Development</h3>
              <p>
                I have developed multiple working website and component pages for group and individual projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/65p.svg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>App Development </h3>
              <p>
                I have worked on mobile applications for projects and created interactive, easy and efficient apps with a variety of features.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/35p.svg")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I am working on developing fast and optimised back-end systems
                and APIs for my projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/15p.svg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning</h3>
              <p>
                I have started learning how to build, train and test advanced language model for my projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/12p.svg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science</h3>
              <p>
                I have been building a soild foundation by learning to develop algorithms and data analysis.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
