import React from "react";
import resumePDF from "../../../assets/contact/Resume.pdf";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const downloadResume = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumePDF; // Set the href attribute to the path of your resume PDF file
    link.download = 'Aishwarya_Shrestha_Resume.pdf'; // Set the download attribute to specify the file name
    document.body.appendChild(link); // Append the anchor element to the document body
    link.click(); // Simulate a click on the anchor element to trigger the download
    document.body.removeChild(link); // Remove the anchor element from the document body after download
  };
  

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Info</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div/>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:aaishwaryashresthaa@gmail.com">aaishwaryashresthaa@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/aishwarya-shrestha-43a9841a1/">https://linkedin.com/aishwarya-shrestha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/aish-wa-rya">https://github.com/aish-wa-rya</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/resumeIcon.png")} alt="Resume icon" />
          <button onClick={downloadResume}>Download Resume</button>
        </li>
      </ul>
      <div/>
      <div className={styles.copyright}>
        <h3>Copyright © Aishwarya Shrestha, 2024. All Rights Reserved</h3>
      </div>
    </footer>
  );
};
