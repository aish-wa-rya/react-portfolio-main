import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi ! I am Aishwarya Shrestha</h1>
        <p className={styles.description}>
          I'm a amateur software developer. I am proficient as a frontend developer and a UI/UX designer.
          <br/>
          <div/>Learn about my skills in this portfolio!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me 
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
