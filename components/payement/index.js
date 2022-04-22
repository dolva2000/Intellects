import React from "react";

const Index = () => {
  return (
    <div id="content" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
            <div className="page-content">
              <div className="inner-box">
                <div className="dashboard-box">
                  <h2 className="dashbord-title">Payments</h2>
                </div>
                <div className="dashboard-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-sx-12">
                      <div className="order-details">
                        <div className="dashboardboxtitle">
                          <h2>Your Order</h2>
                        </div>
                        <div className="order_review mb-3">
                          <table className="table dashboardtable table-review-order">
                            <thead>
                              <tr>
                                <th className="product-name">Produit</th>
                                <th className="product-total">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <p>Katatoli</p>
                                </td>
                                <td>
                                  <p className="price">$190.00</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>Genie</p>
                                </td>
                                <td>
                                  <p className="price">$34.00</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>Edit</p>
                                </td>
                                <td>
                                  <p className="price">$87.00</p>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Subtotal</th>
                                <td>
                                  <p className="price">$87.00</p>
                                </td>
                              </tr>
                              <tr>
                                <th>Shipping</th>
                                <td>
                                  <form action="#" className="shipping">
                                    <div className="radio">
                                      <label>
                                        <input checked="" type="radio" />{" "}
                                        <span>Gratuit Shipping</span>
                                      </label>
                                    </div>
                                    <div className="radio">
                                      <label>
                                        <input type="radio" />{" "}
                                        <span>Flat Rate:</span>{" "}
                                      </label>
                                      <span className="price"> $10.00</span>
                                    </div>
                                  </form>
                                </td>
                              </tr>
                              <tr>
                                <th>Total</th>
                                <td>
                                  <p className="price">$197.00</p>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-sx-12">
                      <div className="dashboardboxtitle">
                        <h2>Moyen de Payment </h2>
                      </div>

                      <div className="form-group mb-3">
                        <label>
                          Votre Nom <sup>*</sup>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group mb-3">
                        <label>
                          Type de Carte Credit <sup>*</sup>
                        </label>
                        <div className="tg-select form-control">
                          <div className="select">
                            <select>
                              <option>Select Type</option>
                              <option>Select Type</option>
                              <option>Select Type</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label>
                          Numero de Carte Credit <sup>*</sup>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>
                          Verification du Numero dela Carte <sup>*</sup>
                        </label>
                        <input className="form-control" type="text" />
                      </div>

                      <div className="card card--padding fill-bg">
                        <table className="table-total-checkout">
                          <tbody>
                            <tr>
                              <th>GRAND TOTAL:</th>
                              <td>$197.00</td>
                            </tr>
                          </tbody>
                        </table>
                        <a
                          href="#"
                          className="btn btn-common btn-full"
                          style={{ backgroundColor: "red" }}
                        >
                          PAYEZ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
