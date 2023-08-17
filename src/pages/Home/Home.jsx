import {
  Hero,
  Features,
  About,
  CTA,
  Services,
  Insta,
  Testimonial,
  EventHome,
} from "../../components";
import "./style.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <CTA
        title="We're looking for young activists."
        ctaText="Join as Volunteer"
        img="/images/cta-banner.jpg"
      />
      <Services />
      <div id="donate">
        <CTA
          title="Let's Donate For a Cause"
          ctaText="Donate"
          img="/images/cta-banner.jpg"
          link="https://donate.stripe.com/test_9AQ00qaWW99r6je9AB"
        />
      </div>
      <Testimonial />
      <EventHome />
      <Insta />
    </>
  );
};

export default Home;
