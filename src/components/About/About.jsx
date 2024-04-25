import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <span className={styles.topBlur}></span>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>About Me</h3>
              <p>
              I am passionate programmer and a learner, born and brought up in India. Currently, I am enrolled in AlmaBetter Web Development Program.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Full-Stack Developer</h3>
              <p>
              I possess extensive experience in crafting highly efficient and optimized front-end and back-end systems. Over the course and time, I have honed my skills in developing solutions that not only meet but exceed performance expectations. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Skills</h3>
              <p>
              I possess extensive experience in crafting highly efficient and optimized front-end and back-end systems. Over the course of my career, I have honed my skills in developing solutions that not only meet but exceed performance expectations. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
