import React from "react";

const Home = () => {
  return (
    // <!-- ---slider start--- -->
    <section>
      <div
        id="carouselExampleIndicators"
        class="carousel slide pointer"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container d-flex justify-content-between background">
              <div
                class="d-flex justify-content-center align-items-start 
            flex-column ms-5"
              ></div>
              <div>
                <img src="./images/slider.jpeg" class="d-block s-image" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container d-flex justify-content-between background">
              <div
                class="d-flex justify-content-center align-items-start
            flex-column ms-5"
              ></div>
              <div>
                <img src="./images/model2.jpeg" class="d-block s-image" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container d-flex justify-content-between background">
              <div
                class="d-flex justify-content-center align-items-start
        flex-column ms-5"
              ></div>
              <div>
                <img src="./images/models.jpeg" class="d-block s-image" />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-success"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-success"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section>
        <section id="category">
          <div className="row clothing-category">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <figure>
                <img
                  src="./images/women_clothing-modified.png"
                  className="clothing-tags"
                  alt="clothing"
                />
                <figcaption className="category-name">
                  Women's clothing
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <figure>
                <img
                  src="./images/Men's_clothing-modified.png"
                  className="clothing-tags"
                  alt="clothing"
                />
                <figcaption className="category-name">
                  Men's clothing
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <figure>
                <img
                  src="./images/kids.png"
                  className="clothing-tags"
                  alt="clothing"
                />
                <figcaption className="category-name_kids">kids</figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <figure>
                <img
                  src="./images/sport-modified.png"
                  className="clothing-tags"
                  alt="clothing"
                />
                <figcaption className="category-name_kids">sport</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
