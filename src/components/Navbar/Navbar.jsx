import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div
        className="header"
        style={{ backgroundColor: "#0a0a0a", zIndex: "100" }}
        data-header
      >
        <div className="container">
          <h1>
            <a href="/" className="logo">
              <img
                src="/images/sahayata_w_logo.png"
                alt=""
                height="auto"
                width="230px"
              />
            </a>
          </h1>

          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            data-nav-open-btn
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>
            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              data-nav-close-btn
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <a href="/" className="logo">
              Sahayata
            </a>

            <ul className="navbar-list">
              <li>
                <a href="/" className="navbar-link" data-nav-link>
                  <span>Home</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a href="#about" className="navbar-link" data-nav-link>
                  <span>About</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a href="#service" className="navbar-link" data-nav-link>
                  <span>Service</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </li>

              {/* <li>
                <a href="#donate" className="navbar-link" data-nav-link>
                  <span>Donate</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </li> */}

              <li>
                <a href="/events" className="navbar-link" data-nav-link>
                  <span>Event</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a href="/contact" className="navbar-link" data-nav-link>
                  <span>Contact</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-action">
            <button className="search-btn" aria-label="Search">
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <Link to="https://donate.stripe.com/test_9AQ00qaWW99r6je9AB">
              <button className="btn btn-primary">
                <span>Donation</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
