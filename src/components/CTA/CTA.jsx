import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CTA = ({ title, link, ctaText, img }) => {
  return (
    <>
      <section class="section cta">
        <div class="container">
          <div class="cta-content">
            <h2 class="h2 section-title">{title}</h2>

            <Link to={link}>
              <button class="btn btn-outline">
                <span>{ctaText}</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </Link>
          </div>

          <figure class="cta-banner">
            <img
              src={img}
              width="520"
              height="218"
              loading="lazy"
              alt="sahayata"
              class="img-cover"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default CTA;
