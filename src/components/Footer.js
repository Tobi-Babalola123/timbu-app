import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <footer class="py-5">
          <div class="row text-dark">
            <div class="mb-3">
              <h4 className="footer-title">TrendTrove</h4>
              <p className="contact-info">For more enquiries, call:</p>
              <h4 className="contact-number">+234 830 445 8722</h4>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Services</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    New in
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Sale
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Women clothing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Men Clothing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Kids
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Skincare
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Sport
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Jewelry
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Home & Kitchen
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Wig & Extensions
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3 copyright">
              <h5>Information</h5>
              <ul class="nav flex-column ">
                <li class="nav-item mb-2 ">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Refund Policy
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Shipping Policy
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3 copyright">
              <h5>Account</h5>
              <ul class="nav flex-column ">
                <li class="nav-item mb-2 ">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Search
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    About Us
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    Faq
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary nav-text">
                    contact
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form className="newsletter-form">
                <h4 className="newsletter-header">
                  Subscribe to our newsletter
                </h4>
                <p className="newsletter">
                  Monthly digest of what's new and exciting from us.
                </p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-danger footer-button" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="footer-email">
                <p className="contact-email">Mon-Fri, 10 am - 6pm</p>
                <p className="contact-email">
                  <strong>Trendtrove.com</strong>
                </p>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top copyright">
            <p className="copyright">
              © 2024 Trendtrove, Inc. All rights reserved.
            </p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-body-emphasis" href="bing">
                  <img
                    src="/images/instagram-logo.svg"
                    width="24"
                    height="24"
                    alt="instagram"
                  />
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="bing">
                  <img
                    src="/images/logo-facebook.svg"
                    width="24"
                    height="24"
                    alt="facebook"
                  />
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="bing">
                  <img
                    src="/images/twitter-social-logotype.svg"
                    width="24"
                    height="24"
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
