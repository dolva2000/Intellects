/* eslint-disable @next/next/no-img-element */
import React from "react";

const Index = () => {
  const styles = {
    //-webkit-animation-delay:"0.5s"
    //-moz-animation-delay: "0.5s",
    //animation-delay: "0.5s",
  };
  return (
    <section className="featured-lis section-padding">
      <div className="container">
        <h3 className="section-title">DERNIERS PRODUITS</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="product-item">
              <div className="carousel-thumb">
                <img className="img-fluid" src="/img/product/img1.jpg" alt="" />
                <div className="overlay"></div>
                <span className="price">89.00 $</span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a>Edith</a>
                </h3>
                <a>
                  <i className="lni-bookmark"></i> Kinshasa
                </a>
                <a>
                  <i className="lni-map-marker"></i> Kinshasa
                </a>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <div className="card-text">
                  <div className="meta">
                    <div className="float-left">
                      <span className="icon-wrap">
                        <i className="lni-star-filled"></i>
                        <i className="lni-star-filled"></i>
                        <i className="lni-star"></i>
                        <i className="lni-star"></i>
                      </span>
                      <span className="count-review">
                        <span>8</span> telechargement
                      </span>
                    </div>
                    <div className="float-right">
                      <span className="btn-product bg-red">
                        <a>Nouveau</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="product-item">
              <div className="carousel-thumb">
                <img className="img-fluid" src="/img/product/img2.jpg" alt="" />
                <div className="overlay"></div>
                <span className="price">89.00 $</span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a>Katakoli</a>
                </h3>
                <a>
                  <i className="lni-bookmark"></i> Kinshasa
                </a>
                <a>
                  <i className="lni-map-marker"></i> Kinshasa
                </a>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <div className="card-text">
                  <div className="meta">
                    <div className="float-left">
                      <span className="icon-wrap">
                        <i className="lni-star-filled"></i>
                        <i className="lni-star-filled"></i>
                        <i className="lni-star-filled"></i>
                        <i className="lni-star"></i>
                      </span>
                      <span className="count-review">
                        <span>1</span> telechargement
                      </span>
                    </div>
                    <div className="float-right">
                      <span className="btn-product bg-yellow">
                        <a>Nouveau</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="product-item">
              <div className="carousel-thumb">
                <img className="img-fluid" src="/img/product/img3.jpg" alt="" />
                <div className="overlay"></div>
                <span className="price">49.00 $</span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a>Masano</a>
                </h3>
                <a>
                  <i className="lni-bookmark"></i> Kinshasa
                </a>
                <a>
                  <i className="lni-map-marker"></i> Kinshasa
                </a>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <div className="card-text">
                  <div className="meta">
                    <div className="float-left">
                      <span className="icon-wrap">
                        <i className="lni-star-filled"></i>
                        <i className="lni-star-filled"></i>
                        <i className="lni-star-filled"></i>
                        <i className="lni-star-filled"></i>
                      </span>
                      <span className="count-review">
                        <span>1</span> téléchargement
                      </span>
                    </div>
                    <div className="float-right">
                      <span className="btn-product bg-red">
                        <a>Nouveau</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
