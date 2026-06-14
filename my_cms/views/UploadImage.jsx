import axios from "axios";
import { useParams } from "react-router";
import notif from "../src/helpers/notification";
import { useNavigate } from "react-router";

export default function UploadImage() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleUpload(e) {
    e.preventDefault();
    try {
      // console.log(e.target[0].files[0], "<<<<<");

      const formData = new FormData();
      formData.append("file", e.target[0].files[0]);

      await axios.patch(
        `https://api.p2.gc01aio.foxhub.space/apis/products/products/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );

      notif("Success update image!");
      navigate("/");
    } catch (error) {
      console.log(error, "response error");
      notif(error.response.data.message, true);
    }
  }

  return (
    <>
      <div
        className="row justify-content-center align-items-center pl-30 pt-10"
        style={{ minHeight: "70vh" }}
      >
        <div className="col-lg-7 col-xl-6">
          <div className="card border-0 shadow-sm rounded-4 mt-4">
            <div className="card-body p-4">
              <h1 className="h2 fw-bold mb-1">Update Image</h1>

              <p className="text-muted mb-4">
                Upload a new image for this product
              </p>

              <form onSubmit={handleUpload} id="register-form">
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Product Image
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    autoComplete="off"
                    required
                  />
                </div>

                <button
                  className="btn btn-dark rounded-pill w-100 py-2"
                  type="submit"
                >
                  Update Image
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
