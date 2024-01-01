"use client";
const shape014 = '/img/shapes/Shape014.png'
const shape028 = '/img/shapes/Shape028.png'
import styles from './testimonials.module.css'
import React, { useState, useEffect } from 'react';

function ClientsWord() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={styles.clientsWord}>
        <div class={styles.dotted}></div>
      <div className={styles.reviewImages}>
        <img src={shape014} id={styles.topRightCl} />
        <img src={shape028} id={styles.topRightClQn} />
        <img src={shape028} id={styles.bottomRightFoot} />
      </div>
      <div className={styles.clientsWordContent}>
      <h3> A few words from my clients</h3>
        <h1> 5 Star Reviews</h1>
        <div className={styles.testmonalContainer}>
          {slideIndex === 0 && (
            <div className={styles.testimonal} id={styles.fade}>
              <div className={styles.testimonalContent}>
                <p>
                  Yash is very responsive, very proffesional and was able to deliver an amazing product in a very short time. He is patient and thinks through his products.
                </p>
              </div>
              <p className={styles.signoff}>
                <span className={styles.differentColorBold}>-</span> Yaron Vilosny, Co-Founder of Terminal Charging
              </p>
            </div>
          )}
          {slideIndex === 1 && (
            <div className={styles.testimonal} id={styles.fade}>
            <div className={styles.testimonalContent}>
              <p>
                  Yash knows a lot about the design and layout of websites. He was able to put together a website which looked fabulous!
                </p>
              </div>
              <p className={styles.signoff}>
                <span className={styles.differentColorBold}>-</span> Chris Sheehan, Co-Founder of Tiger Princess Club
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ClientsWord;