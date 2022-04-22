import React from "react";

const Index = () => {
  return (
    <footer>
      <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">À propos de nous</h3>
                <div className="textwidget">
                  <p>
                    Intelect est une entreprise technologie de l’informatique,
                    qui conçois et commercialise des logiciels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Liens utiles</h3>
                <ul className="menu">
                  <li>
                    <a href="#">Détails de l adhésion</a>
                  </li>
                  <li>
                    <a href="#">Pourquoi choisir</a>
                  </li>
                  <li>
                    <a href="#">Offres d emploi</a>
                  </li>
                  <li>
                    <a href="#">Utilisation de cette plateforme</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Support & aide</h3>
                <ul className="menu">
                  <li>
                    <a href="#">Politique de confidentialité</a>
                  </li>
                  <li>
                    <a href="#">Protection des achats</a>
                  </li>
                  <li>
                    <a href="#">Soutien</a>
                  </li>
                  <li>
                    <a href="#">Contactez-nous </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Coordonnées</h3>
                <ul className="contact-footer">
                  <li>
                    <strong>Address :</strong>
                    <span>1900 Lumumba Blvd,Kinshasa</span>
                  </li>
                  <li>
                    <strong>Phone :</strong>
                    <span>+243 823 456 789</span>
                  </li>
                  <li>
                    <strong>E-mail :</strong>
                    <span>
                      <a href="#">info@example.com</a>
                    </span>
                  </li>
                </ul>
                <ul className="footer-social">
                  <li>
                    <a
                      className="facebook"
                      href="#"
                      style={{ backgroundColor: "red" }}
                    >
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href="#"
                      style={{ backgroundColor: "red" }}
                    >
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin"
                      href="#"
                      style={{ backgroundColor: "red" }}
                    >
                      <i className="lni-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="google-plus"
                      href="#"
                      style={{ backgroundColor: "red" }}
                    >
                      <i className="lni-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info float-left">
                <p>
                  All copyrights reserved &copy; 2022 - Designed by{" "}
                  <a href="https://mbokart-concept.net" rel="nofollow">
                    Mbok art Concept
                  </a>
                </p>
              </div>
              <div className="float-right">
                <ul className="bottom-card">
                  <li>
                    <a href="#">
                      <img src="img/footer/card1.jpg" alt="card" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/footer/card2.jpg" alt="card" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/footer/card3.jpg" alt="card" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/footer/card4.jpg" alt="card" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
