import React from "react";
import Link from "next/link";
const Details = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="product-info row">
          <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="details-box ads-details-wrapper">
              <div
                id="owl-demo"
                className="owl-carousel owl-theme"
                style={{ opacity: "1", display: "block" }}
              >
                <div className="owl-wrapper-outer">
                  <div
                    className="owl-wrapper"
                    style={{ width: "3810px", left: "0px", display: "block" }}
                  >
                    <div className="owl-item" style={{ width: "635px" }}>
                      <div className="item">
                        <div className="product-img">
                          <img
                            className="img-fluid"
                            src="/img/productinfo/img1.jpg"
                            alt=""
                          />
                        </div>
                        <span className="price">$1,550</span>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "635px" }}>
                      <div className="item">
                        <div className="product-img">
                          <img
                            className="img-fluid"
                            src="/img/productinfo/img2.jpg"
                            alt=""
                          />
                        </div>
                        <span className="price">$1,550</span>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "635px" }}>
                      <div className="item">
                        <div className="product-img">
                          <img
                            className="img-fluid"
                            src="/img/productinfo/img3.jpg"
                            alt=""
                          />
                        </div>
                        <span className="price">$1,550</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="owl-controls clickable">
                  <div className="owl-pagination">
                    <a href="#prev" className="prev-owl"></a>
                    <div className="owl-page active">
                      <span className=""></span>
                      <a
                        className="item-link"
                        style={{
                          background:
                            ' url("/img/productinfo/img1.jpg") center center / cover no-repeat',
                        }}
                      ></a>
                    </div>
                    <div className="owl-page">
                      <span className=""></span>
                      <a
                        className="item-link"
                        style={{
                          background:
                            ' url("/img/productinfo/img1.jpg") center center / cover no-repeat',
                        }}
                      ></a>
                    </div>
                    <div className="owl-page">
                      <span className=""></span>
                      <a
                        className="item-link"
                        style={{
                          background:
                            ' url("/img/productinfo/img1.jpg") center center / cover no-repeat',
                        }}
                      ></a>
                    </div>
                    <a href="#next" className="next-owl"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="details-box">
              <div className="ads-details-info">
                <h2>Jeux Masano</h2>
                <p className="mb-2">
                  Masano, univers de loisir et divertissement, joué aux jeux
                  vidéo en ligne et télécharger les jeux Masano
                </p>
                <div className="details-meta">
                  <span>
                    <a href="#">
                      <i className="lni-alarm-clock"></i> 7 Jan, 10:10 pm
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="lni-map-marker"></i> New York
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="lni-eye"></i> 299 View
                    </a>
                  </span>
                </div>
                <h4 className="title-small mb-3">Specification:</h4>
                <ul className="list-specification">
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> 256GB PCIe flash
                    storage
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> 2.7 GHz dual-core
                    Intel Core i5
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> Turbo Boost up to
                    3.1GHz
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> Intel Iris
                    Graphics 6100
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> 8GB memory
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> 10 hour battery
                    life
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> 13.3 Retina
                    Display
                  </li>
                  <li>
                    {" "}
                    <i className="lni-check-mark-circle"></i> 1 Year
                    international warranty
                  </li>
                </ul>
              </div>
              <ul className="advertisement mb-4">
                <li>
                  <p>
                    <strong>Type:</strong> <a href="#">Electronics</a>,{" "}
                    <a href="#">For sale</a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Condition:</strong> New
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Brand:</strong> <a href="#">Apple</a>
                  </p>
                </li>
              </ul>
              <div className="ads-btn mb-4">
                <a href="#" className="btn btn-common btn-reply">
                  <i className="lni-envelope"></i> Email
                </a>
                <Link href="/payement">
                  <a href="#" className="btn btn-common">
                    <i className="lni-download "></i> Telechargez
                  </a>
                </Link>
              </div>
              <div className="share">
                <span>Share: </span>
                <div className="social-link">
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled"></i>
                  </a>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled"></i>
                  </a>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-fill"></i>
                  </a>
                  <a className="google" href="#">
                    <i className="lni-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="description-info">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-xs-12">
              <div className="description">
                <h4>Description</h4>
                <p>
                  Masano, univers de loisir et divertissement, joué aux jeux
                  vidéo en ligne et télécharger les jeux Masano Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
