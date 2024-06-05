import { React } from "react";
import { titleCase } from "title-case";
import PcaPrediction from "../package/PcaPrediction";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Prediction() {
  const location = useLocation();
  const formValues = location.state;
  const pstatus = PcaPrediction(formValues);
  const filteredStatus = Object.fromEntries(
    Object.entries(pstatus).filter(([key]) => key !== "mismatched")
  );

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className="row align-items-top">
            <div className="col-lg-12">
              <div className="card card-body-width m-auto">
                <div className="card-body">
                  <h5 className="card-title pb-1 fw-medium text-center">
                    Student Placement Prediction
                  </h5>
                  <hr />
                  {pstatus.mismatched === false ? (
                    <div className="table-responsive">
                      <h5>According to data provided -</h5>
                      <div className="card-title fs-6">
                        <div className="mb-2 color-black">Degree: - {titleCase(formValues.degree)}</div>
                      </div>
                      <table className="table table-hover border-1 border-dark-subtle mx-auto">
                        <thead>
                          <tr className="custom_tr">
                            <th>Role</th>
                            <th>Status</th>
                            <th>Package (Approximately)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(filteredStatus).map(([role, { placed, salary }], index) => (
                            <tr key={index}>
                              <th className="custom_th">{role.replace('_', ' ')}</th>
                              <td>{placed ? "Good to go" : "Need Training"}</td>
                              <td>{placed ? (salary ? `₹${salary} Lacs` : "N/A") : "N/A"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="card-body">
                      <h5 className="text-center pt-3">Sorry! Total Score is below 60%. Criteria Mismatched!</h5>
                    </div>
                  )}
                  <div className="button-area text-center">
                    <Link className="btn btn-sm btn-dark custom_btn" to="/"><i class="bi bi-arrow-left"></i> Go back</Link>
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
