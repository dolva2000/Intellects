import React from "react";

const Index = () => {
  return (
    <section className="counter-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-layers" style={{ color: "red" }}></i>
              </div>
              <div className="counterUp">12090</div>
              <p>téléchargement</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-map" style={{ color: "red" }}></i>
              </div>
              <div className="counterUp">350</div>
              <p>Pays</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-user" style={{ color: "red" }}></i>
              </div>
              <div className="counterUp">23453</div>
              <p>Client satisfait</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-briefcase" style={{ color: "red" }}></i>
              </div>
              <div className="counterUp">250</div>
              <p>Version Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
