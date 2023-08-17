import React, { useState } from "react";
import "./style.css";

const About = () => {
  //   const [show, setShow] = useState("mission");

  return (
    <>
      <section className="section about" id="about">
        <div className="container">
          <div className="about-banner">
            <h2 className="deco-title">About Us</h2>

            <img
              src="/images/deco-img.png"
              width="58"
              height="261"
              alt="sahayata"
              className="deco-img"
            />

            <div className="banner-row">
              <div className="banner-col">
                <img
                  src="/images/about-banner-1.jpg"
                  width="315"
                  height="380"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img w-100"
                />

                <img
                  src="/images/about-banner-2.jpg"
                  width="386"
                  height="250"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img about-img-2 w-100"
                />
              </div>

              <div className="banner-col">
                <img
                  src="/images/about-banner-3.jpg"
                  width="250"
                  height="277"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img about-img-3 w-100"
                />

                <img
                  src="/images/about-banner-3.jpg"
                  width="315"
                  height="380"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img w-100"
                />
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="section-subtitle">
              <img
                src="/images/subtitle-img-green.png"
                width="32"
                height="7"
                alt="sahayata"
              />

              <span>Why Choose Us</span>
            </p>

            <h2 className="h2 section-title">
              Rise Your Hand to Save <strong>World of Living</strong>
            </h2>

            <ul className="tab-nav">
              <li>
                <button className="tab-btn active">Our Mission</button>
              </li>

              <li>
                <button className="tab-btn">Our Vision</button>
              </li>
            </ul>

            <div className="tab-content">
              <p className="section-text ">
                Sahayata Organization is a brain child of two cousin brothers
                Hitenn Munoat & Shubham Lunawat. Starting off as just an idea,
                Sahayata evolved into a registered NGO which fed hundreds of
                people around the city.
              </p>

              <ul className="tab-list">
                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>

                  <p className="tab-text">Charity For Foods</p>
                </li>

                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>

                  <p className="tab-text">Charity For Education</p>
                </li>

                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>

                  <p className="tab-text">Charity For Shelter</p>
                </li>

                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </div>

                  <p className="tab-text">Charity For Medical</p>
                </li>
              </ul>

              <button className="btn btn-secondary">
                <span>Learn More Us</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            {/* <div className="tab-content">
              <p>Vission</p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
