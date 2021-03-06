/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <header id="header-wrap">
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="lni-menu"></span>
              <span className="lni-menu"></span>
              <span className="lni-menu"></span>
            </button>
            <a href="index.html" className="navbar-brand">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link" style={{ backgroundColor: "red" }}>
                    PAGE D’ACCUEIL
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/categories">
                  <a className="nav-link">NOS PRODUITS</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  INSTORE
                </a>
                <div className="dropdown-menu">
                  <Link href="/payement">
                    <a className="dropdown-item">Information sur le paiement</a>
                  </Link>
                  <Link href="/payement">
                    <a className="dropdown-item">
                      Type d’achat et telechargement, de logiciels, plugin,
                      assistance Edith
                    </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  GAME
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item">Jeux pour enfant</a>
                  <a className="dropdown-item">Jeux pour adulte</a>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="sign-in">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  <i className="lni-user"></i> Mon Compte
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item">
                    <i className="lni-home"></i>Créer un Compte
                  </a>
                  <a className="dropdown-item">
                    <i className="lni-user"></i> Se Connecter
                  </a>
                  <a className="dropdown-item">
                    <i className="lni-reload"></i>Mot de passe oublie
                  </a>
                  <a className="dropdown-item">
                    <i className="lni-close"></i> Se Deconnecter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mobile-menu">
          <li>
            <Link href="/">
              <a className="active">PAGE D’ACCUEIL</a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a>NOS PRODUITS</a>
            </Link>
          </li>
          <li>
            <a>INSTORE</a>
            <ul className="dropdown">
              <li>
                <Link href="/payement">
                  <a>Information sur le paiement</a>
                </Link>
              </li>
              <li>
                <Link href="/payement">
                  <a>
                    Type d’achat et telechargement, de logiciels, plugin,
                    assistance Edith
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Game</a>
            <ul className="dropdown">
              <li>
                <a href="about.html">jeux pour enfant</a>
              </li>
              <li>
                <a href="services.html">jeux pour adulye</a>
              </li>
            </ul>
          </li>
          <li></li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <a>Mon Compte</a>
            <ul className="dropdown">
              <li>
                <a>
                  <i className="lni-home"></i>Créer un Compte
                </a>
              </li>
              <li>
                <a>
                  <i className="lni-wallet"></i> Se Connecter
                </a>
              </li>
              <li>
                <a>
                  <i className="lni-heart"></i>Mot de passe oublie
                </a>
              </li>
              <li>
                <a>
                  <i className="lni-folder"></i> Se Deconnecter
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div id="hero-area">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xs-12 text-center">
              <div className="contents">
                <h1 className="head-title">
                  BIENVENUE SUR{" "}
                  <span className="year" style={{ color: "red" }}>
                    Intellect{" "}
                  </span>
                </h1>
                <p>
                  Intelect est une entreprise technologie de l’informatique, qui
                  conçois et commercialise des logiciels.
                </p>
                <div className="search-bar">
                  <fieldset>
                    <form className="search-form">
                      <div className="form-group tg-inputwithicon">
                        <i className="lni-tag"></i>
                        <input
                          type="text"
                          name="customword"
                          className="form-control"
                          placeholder="Que Cherchez-vous "
                        />
                      </div>
                      <div className="form-group tg-inputwithicon">
                        <i className="lni-map-marker"></i>
                        <div className="tg-select">
                          <select>
                            <option value="none">Tous les emplacement</option>
                            <option value="none">Kinshasa</option>
                            <option value="none">chine</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group tg-inputwithicon">
                        <i className="lni-layers"></i>
                        <div className="tg-select">
                          <select>
                            <option value="none">
                              Selectionnez les Categories
                            </option>
                            <option value="none">Logiciek Intelect</option>
                            <option value="none">Logiciel</option>
                            <option value="none">Logiciel de Maison</option>
                            <option value="none">Logiciel</option>
                            <option value="none">Logiciel de Services</option>
                            <option value="none">Logiciel</option>
                            <option value="none">Logiciel</option>
                          </select>
                        </div>
                      </div>
                      <button
                        className="btn btn-common"
                        type="button"
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        <i className="lni-search"></i>
                      </button>
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
