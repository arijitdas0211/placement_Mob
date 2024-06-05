import React from "react";
import Form from "./Form";
import logo from "../img/logo.png";

export default function Main() {
  return (
    <>
      <main id="main" className="main">
        <section className="section container">
          <div className="row">
            <div className="text-center col-lg-12 col-md-12 col-sm-12 mb-3">
              <img src={logo} alt="Placement Predictor" className="img-fluid plogo m-auto" />
            </div>
            <div className="card-body-width m-auto col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title pb-1 text-center">Placment Prediction</h4>
                  <hr />
                  <div className="p-2">
                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
