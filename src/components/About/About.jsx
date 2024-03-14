import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>FullStack Development</h3>
              <p>
                Currently learning Fullstack Development through unique challenges and curriculm all offered by Code Platoon
                so I can take my personal ambition and move it to a professional setting. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Operations Manager</h3>
              <p>
                I developed my love for coding in excel and learning VBA to solved unqiue challenges that stem from intigrating
                military products into everyday civilian programs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Crewmaster/6276</h3>
              <p>
                I have been fortunate enough to travel to 16 different countries during my time in the Marines, 
                giving me experience with different cultures and people from all around the world. All the while allowing me to practice my skills
                in unique and challenging environments that have helped shaped me into the challenge loving person I am today.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
