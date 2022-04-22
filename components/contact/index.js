import React from "react";

const Index = () => {
  return (
    <section id="content" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
            <h2 className="contact-title">
              <font style={{ textAlign: "inherit" }}>
                <font style={{ textAlign: "inherit" }}>
                  Envoyez-nous un message
                </font>
              </font>
            </h2>

            <form
              id="contactForm"
              className="contact-form"
              data-toggle="validator"
              noValidate="true"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Nom"
                          required=""
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="E-mail"
                          required=""
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="msg_subject"
                          name="subject"
                          placeholder="Matière"
                          required=""
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Massage"
                          rows="10"
                          data-error="Write your message"
                          required=""
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    id="submit"
                    className="btn btn-common disabled"
                    style={{
                      pointerEvents: "all",
                      cursor: "pointer",
                      backgroundColor: "red",
                    }}
                  >
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        Soumettre maintenant
                      </font>
                    </font>
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <h2 className="contact-title">
              <font sstyle={{ textAlign: "inherit" }}>
                <font style={{ textAlign: "inherit" }}>Entrer en contact</font>
              </font>
            </h2>
            <div className="information">
              <p>
                <font style={{ textAlign: "inherit" }}>
                  <font style={{ textAlign: "inherit" }}>
                    Lorem Ipsum Est simplement un texte factice de l industrie
                    de l impression et de la composition.{" "}
                  </font>
                  <font style={{ textAlign: "inherit" }}>
                    Lorem Ipsum a été le leader de l industrie
                  </font>
                </font>
              </p>
              <div className="contact-datails">
                <div className="icon">
                  <i
                    className="lni-map-marker icon-radius"
                    style={{ color: "red" }}
                  ></i>
                </div>
                <div className="info">
                  <h3>
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>Adresse</font>
                    </font>
                  </h3>
                  <span className="detail">
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        1900 lumumba Blvd, Kinshasa ,{" "}
                      </font>
                    </font>
                    <br />
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        Lorem Ipsum Est simplement un faux texte
                      </font>
                    </font>
                  </span>
                </div>
              </div>
              <div className="contact-datails">
                <div className="icon">
                  <i
                    className="lni-pointer icon-radius"
                    style={{ color: "red" }}
                  ></i>
                </div>
                <div className="info">
                  <h3>
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        Avez-vous des questions?
                      </font>
                    </font>
                  </h3>
                  <span className="detail">
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        Intelect@gmail.com
                      </font>
                    </font>
                  </span>
                </div>
              </div>
              <div className="contact-datails">
                <div className="icon">
                  <i
                    className="lni-phone-handset icon-radius"
                    style={{ color: "red" }}
                  ></i>
                </div>
                <div className="info">
                  <h3>
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        Appelez-nous et engagez-nous
                      </font>
                    </font>
                  </h3>
                  <span className="detail">
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        Bureau principal : + 243 82 456 789
                      </font>
                    </font>
                  </span>
                </div>
              </div>
              <div className="contact-datails">
                <div className="icon">
                  <i
                    className="lni-phone icon-radius"
                    style={{ color: "red" }}
                  ></i>
                </div>
                <div className="info">
                  <h3>
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>Téléphone</font>
                    </font>
                  </h3>
                  <span className="detail">
                    <font style={{ textAlign: "inherit" }}>
                      <font style={{ textAlign: "inherit" }}>
                        (+243) 825678 912
                      </font>
                    </font>
                  </span>
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
