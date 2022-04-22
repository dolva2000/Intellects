/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
export default function index() {
  return (
    <section className="featured section-padding">
      <div className="container">
        <h1 className="section-title"> NOS PRODUITS</h1>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="featured-box">
              <figure>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <Link href="/details">
                  <a>
                    <img
                      className="img-fluid"
                      src="/img/featured/edit.jpg"
                      alt=""
                    />
                  </a>
                </Link>
              </figure>
              <div className="feature-content">
                <div className="tg-product">
                  <a>Logiciel &gt; Intelligent</a>
                </div>
                <h4>
                  <a href="ads-details.html">Edit </a>
                </h4>
                <span>Last Updated: 5 hours ago</span>
                <ul className="address">
                  <li>
                    <a>
                      <i className="lni-map-marker"></i> Kinshasa
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-alarm-clock"></i> 17 Mar, 8:30 pm
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-user"></i> David Givens
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-package"></i> Used
                    </a>
                  </li>
                </ul>
                <div className="btn-list">
                  <a className="btn-price">$ 1280</a>
                  <Link href="/details">
                    <a className="btn btn-common">
                      <i className="lni-list"></i>
                      Voir les Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="featured-box">
              <figure>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <Link href="/details">
                  <a>
                    <img
                      className="img-fluid"
                      src="/img/featured/genie.jpg"
                      alt=""
                    />
                  </a>
                </Link>
              </figure>
              <div className="feature-content">
                <div className="tg-product">
                  <a>Loptop &gt; Accessories</a>
                </div>
                <h4>
                  <a>Genie version 2.0.</a>
                </h4>
                <span>Last Updated: 8 hours ago</span>
                <ul className="address">
                  <li>
                    <a>
                      <i className="lni-map-marker"></i> Kinshasa
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-alarm-clock"></i> 7 Mar, 10:10 pm
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-user"></i> John Smith
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-package"></i> Used
                    </a>
                  </li>
                </ul>
                <div className="btn-list">
                  <a className="btn-price">$ 1100</a>
                  <Link href="/details">
                    <a className="btn btn-common">
                      <i className="lni-list"></i>
                      Voir les Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="featured-box">
              <figure>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <Link href="/details">
                  <a>
                    <img
                      className="img-fluid"
                      src="/img/featured/kotakoli.jpg"
                      alt=""
                    />
                  </a>
                </Link>
              </figure>
              <div className="feature-content">
                <div className="tg-product">
                  <a>Logiciel &gt; Commerce</a>
                </div>
                <h4>
                  <a>Kotakoli</a>
                </h4>
                <span>Last Updated: 4 hours ago</span>
                <ul className="address">
                  <li>
                    <a>
                      <i className="lni-map-marker"></i> Delaware
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-alarm-clock"></i> 7 Feb, 6:10 pm
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-user"></i> Justyna M.
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-package"></i> Used
                    </a>
                  </li>
                </ul>
                <div className="btn-list">
                  <a className="btn-price">$ 205</a>
                  <Link href="/details">
                    <a className="btn btn-common">
                      <i className="lni-list"></i>
                      Voir les Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="featured-box">
              <figure>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <Link href="/details">
                  <a>
                    <img
                      className="img-fluid"
                      src="/img/featured/masano.jpg"
                      alt=""
                    />
                  </a>
                </Link>
              </figure>
              <div className="feature-content">
                <div className="tg-product">
                  <a>Logiciel &gt; Game</a>
                </div>
                <h4>
                  <a href="ads-details.html">Masano</a>
                </h4>
                <span>Last Updated: 13 hours ago</span>
                <ul className="address">
                  <li>
                    <a>
                      <i className="lni-map-marker"></i> Kinshasa
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-alarm-clock"></i> 3 Jan, 9:05 pm
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-user"></i> Mh Arman
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-package"></i> Brand New
                    </a>
                  </li>
                </ul>
                <div className="btn-list">
                  <a className="btn-price">$ 799</a>
                  <Link href="/details">
                    <a className="btn btn-common">
                      <i className="lni-list"></i>
                      Voir les Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="featured-box">
              <figure>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <Link href="/details">
                  <a>
                    <img
                      className="img-fluid"
                      src="/img/featured/plugin.jpg"
                      alt=""
                    />
                  </a>
                </Link>
              </figure>
              <div className="feature-content">
                <div className="tg-product">
                  <a>Logiciel &gt; Intelligent</a>
                </div>
                <h4>
                  <a>plugin</a>
                </h4>
                <span>Last Updated: 4 hours ago</span>
                <ul className="address">
                  <li>
                    <a>
                      <i className="lni-map-marker"></i> Kinshasa
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-alarm-clock"></i> 1 Jan, 7:00 pm
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-user"></i> Elon Musk
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-package"></i> N/A
                    </a>
                  </li>
                </ul>
                <div className="btn-list">
                  <a className="btn-price">$ 250</a>
                  <Link href="/details">
                    <a className="btn btn-common">
                      <i className="lni-list"></i>
                      Voir les Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="featured-box">
              <figure>
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <Link href="/details">
                  <a>
                    <img
                      className="img-fluid"
                      src="/img/featured/genie.jpg"
                      alt=""
                    />
                  </a>
                </Link>
              </figure>
              <div className="feature-content">
                <div className="tg-product">
                  <a>Logiciel &gt; Gestion</a>
                </div>
                <h4>
                  <a>Genie </a>
                </h4>
                <span>Last Updated: 12 hours ago</span>
                <ul className="address">
                  <li>
                    <a>
                      <i className="lni-map-marker"></i> Kinshasa
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-alarm-clock"></i> 12 Dec, 10:10 pm
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-user"></i> John Smith
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-package"></i> Brand New
                    </a>
                  </li>
                </ul>
                <div className="btn-list">
                  <a className="btn-price">$ 25</a>
                  <Link href="/details">
                    <a className="btn btn-common">
                      <i className="lni-list"></i>
                      Voir les Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
