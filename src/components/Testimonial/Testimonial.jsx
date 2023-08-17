import React from "react";
import "./style.css";

const Testimonial = () => {
  return (
    <>
      <section class="testi">
        <div class="testi-content">
          <p class="section-subtitle">
            <img
              src="/images/subtitle-img-green.png"
              width="32"
              height="7"
              alt="sahayata"
            />

            <span>Our Testimonials</span>
          </p>

          <h2 class="h2 section-title">
            What People Say About <strong>Our Organization</strong>
          </h2>

          <div class="testi-card">
            <figure class="card-avatar">
              <img
                src="/images/testi-avatar.png"
                width="60"
                height="60"
                loading="lazy"
                alt="David S. Neuman"
              />
            </figure>

            <div>
              <blockquote class="testi-text">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaquesa quae
                abillo inventore veritatis quasi architecto beatae vitae dicta
                sunt explicabo enimpsam voluptatem
              </blockquote>

              <h3 class="testi-name">David S. Neuman</h3>

              <p class="testi-title">Business Manager</p>
            </div>
          </div>
        </div>

        <figure class="testi-banner">
          <img
            src="/images/testi-banner.jpg"
            width="960"
            height="846"
            loading="lazy"
            alt="sahayata"
            class="img-cover"
          />
        </figure>
      </section>
    </>
  );
};

export default Testimonial;
