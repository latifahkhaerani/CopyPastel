import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import notif from "../src/helpers/notification";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://api.p2.gc01aio.foxhub.space/apis/auth/login",
        { email, password },
      );

      // console.log(data.data.user, "dalam login");
      localStorage.setItem("access_token", data.data.token);

      // untuk sidebar
      localStorage.setItem("username", data.data.user.username);
      localStorage.setItem("role", data.data.user.role);

      // after login
      navigate("/");

      // notification
      notif("Login success!");
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message, "ress");

      notif(error.response.data.message, true);
    }
  }

  return (
    <>
      <section
        className="container-fluid bg-light min-vh-100 d-flex align-items-center"
        id="login-section"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="row g-0">
                  {/* Left Image */}
                  <div className="col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
                    <img
                      src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/561/1056141_PE848273_S4.webp"
                      alt="login"
                      className="img-fluid rounded-4"
                    />
                  </div>

                  {/* Right Form */}
                  <div className="col-md-6">
                    <div className="p-5">
                      <h2 className="fw-bold mb-2">Welcome Back</h2>

                      <p className="text-muted mb-4">
                        Sign in to continue to your dashboard.
                      </p>

                      <form id="login-form" onSubmit={handleLogin}>
                        <div className="mb-3">
                          <label
                            htmlFor="login-email"
                            className="form-label fw-semibold"
                          >
                            Email
                          </label>

                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control py-2"
                            id="login-email"
                            placeholder="Enter email"
                            autoComplete="off"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="login-password"
                            className="form-label fw-semibold"
                          >
                            Password
                          </label>

                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control py-2"
                            id="login-password"
                            placeholder="Enter password"
                            autoComplete="off"
                            required
                          />
                        </div>

                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="login-remember"
                          />

                          <label
                            className="form-check-label"
                            htmlFor="login-remember"
                          >
                            Remember me
                          </label>
                        </div>

                        <button
                          className="btn rounded-pill text-decoration-none w-100 py-2 text-white"
                          type="submit"
                          style={{
                            backgroundColor: "#1E293B",
                            border: "none",
                          }}
                        >
                          Log In
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
