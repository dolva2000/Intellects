/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const Categorie = () => {
  return (
    <div className="main-container section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-xs-12 page-sidebar">
            <aside>
              <div className="widget widget_search">
                <form role="search" id="search-form">
                  <input
                    type="search"
                    className="form-control"
                    autoComplete="off"
                    name="s"
                    placeholder="Recherche"
                    id="search-input"
                    value=""
                  />
                  <button
                    type="submit"
                    id="search-submit"
                    className="search-btn"
                  >
                    <i className="lni-search"></i>
                  </button>
                </form>
              </div>

              <div className="widget categories">
                <h4 className="widget-title"> Categories</h4>
                <ul className="categories-list">
                  <li>
                    <a>
                      <i className="lni-dinner"></i>
                      Logiciel &amp; de Maison{" "}
                      <span className="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-control-panel"></i>
                      Logiciel <span className="category-counter">(8)</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-github"></i>
                      Logiciel de Commerce{" "}
                      <span className="category-counter">(2)</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-coffee-cup"></i>
                      Logiciel de Gestion{" "}
                      <span className="category-counter">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-home"></i>
                      Logiciel d application{" "}
                      <span className="category-counter">(4)</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-pencil"></i>
                      Logiciel Intelligent{" "}
                      <span className="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni-display"></i>
                      Game<span className="category-counter">(9)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title">Publicité</h4>
                <div className="add-box">
                  <img className="img-fluid" src="/img/img1.jpg" alt="" />
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-9 col-md-12 col-xs-12 page-content">
            <div className="product-filter">
              <div className="short-name">
                <span>Montrant (1 - 12 produits de 7371 produits)</span>
              </div>
              <div className="Show-item">
                <span>Afficher les éléments</span>
                <form className="woocommerce-ordering" method="post">
                  <label>
                    <select name="order" className="orderby">
                      <option selected="selected" value="menu-order">
                        49 items
                      </option>
                      <option value="popularity">popularity</option>
                      <option value="popularity">Average ration</option>
                      <option value="popularity">newness</option>
                      <option value="popularity">price</option>
                    </select>
                  </label>
                </form>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#grid-view">
                    <i className="lni-grid"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#list-view"
                  >
                    <i className="lni-list"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="adds-wrapper">
              <div className="tab-content">
                <div id="grid-view" className="tab-pane fade">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                            <a>Logiciel &gt; Gestion</a>
                          </div>
                          <h4>
                            <a>Edit</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>Kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i> Mobile
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>

                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/genie.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Loptop &gt; Accessories</a>
                          </div>
                          <h4>
                            <a>Genie</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>Kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i> Loptop
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/masano.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Game &gt; Accessories</a>
                          </div>
                          <h4>
                            <a>Masano</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i> Electronics
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/kotakoli.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Logiciel &gt; </a>
                          </div>
                          <h4>
                            <a>Logiciel de Services In USA</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i>Photography
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="list-view" className="tab-pane fade active show">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/genie.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Logiciel &gt; Vente</a>
                          </div>
                          <h4>
                            <a>Genie</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i> Mobile
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/kotakoli.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Logiciel &gt; intelligent</a>
                          </div>
                          <h4>
                            <a>kotakoli</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>dev </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/kotakoli.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Logiciel &gt; Accessories</a>
                          </div>
                          <h4>
                            <a>kotakoli</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i> dev
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="featured-box">
                        <figure>
                          <div className="icon">
                            <i className="lni-heart"></i>
                          </div>
                          <a>
                            <img
                              className="img-fluid"
                              src="/img/featured/plugin.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="feature-content">
                          <div className="tg-product">
                            <a>Logiciel &gt; Accessories</a>
                          </div>
                          <h4>
                            <a>Logiciel Plugin</a>
                          </h4>
                          <span>Last Updated: 4 hours ago</span>
                          <ul className="address">
                            <li>
                              <a>
                                <i className="lni-map-marker"></i>kinshasa
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-alarm-clock"></i> 7 Jan, 10:10
                                pm
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-user"></i> John Smith
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="lni-tag"></i>dev
                              </a>
                            </li>
                          </ul>
                          <div className="btn-list">
                            <a className="btn-price">$ 25</a>
                            <a className="btn btn-common">
                              <i className="lni-list"></i>
                              Voir les details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination-bar">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link active">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
