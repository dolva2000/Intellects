import React from "react";

const Index = () => {
  return (
    <section className="subscribes section-padding">
      <div className="container">
        <div className="row wrapper-sub">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <p>
              Rejoignez nos plus de 10 000 abonnés et accédez aux derniers
              modéles, cadeaux,annonces et ressources !
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <form>
              <div className="subscribe">
                <input
                  className="form-control"
                  name="email"
                  placeholder="Votre Email ici"
                  required=""
                  type="email"
                />
                <button
                  className="btn btn-common"
                  type="submit"
                  style={{ backgroundColor: "red" }}
                >
                  S abonner
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
