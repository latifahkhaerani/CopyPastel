import axios from "axios";
import { useState } from "react";
import notif from "../src/helpers/notification";
import Button from "../components/Button";

export default function AddStaff() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");

  async function handleAdd(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `https://api.p2.gc01aio.foxhub.space/apis/auth/add-user`,
        {
          username,
          email,
          password,
          phone,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );

      // console.log(data.data, "<<");

      localStorage.setItem("access_token", data.token);
      notif("Success add new user!");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      notif(error.response.data.message, true);
    }
  }
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="new-user-section"
      >
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <div className="pt-4 pb-2 mb-3 border-bottom">
              <form onSubmit={handleAdd} id="register-form">
                <h1 className="h2 fw-bold mb-3">Register User</h1>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-username">Username</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="register-username"
                    placeholder="Enter username ..."
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-email">Email</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    id="register-email"
                    placeholder="Enter email address ..."
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="register-password">Password</label>
                    <label className="text-danger text-end fw-bold">*</label>
                  </div>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    id="register-password"
                    placeholder="Enter password ..."
                    autoComplete="off"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="register-phone">Phone Number</label>
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="register-phone"
                    placeholder="Enter phone number (optional) ..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="register-address">Address</label>
                  <textarea
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    id="register-address"
                    className="form-control"
                    rows={3}
                    placeholder="Enter address (optional) ..."
                    autoComplete="off"
                    defaultValue={""}
                  />
                </div>

                <Button nameButton="Add User" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
