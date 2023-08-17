import "./style.css";

const Features = () => {
  return (
    <>
      <section class="section features">
        <div class="container">
          <ul class="features-list">
            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="leaf-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Enviroment Wing</h3>

                <p class="item-text">
                  Focusing on making this world a better place one sapling at a
                  time.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Education Wing</h3>

                <p class="item-text">
                  Providing education to underprivileged kids and availing
                  resources.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Helth & Welfare Wing</h3>

                <p class="item-text">
                  Organizing all kinds of medical facilities and camps for the
                  society.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon">
                <ion-icon name="woman-outline"></ion-icon>
              </div>

              <div>
                <h3 class="h4 item-title">Womens Welfare Wing</h3>

                <p class="item-text">
                  Empowering women while pushing them towards new opportunities.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
