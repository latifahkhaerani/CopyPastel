// import Sidebar from "./Home";
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import notif from "../src/helpers/notification";
import loader from "../src/assets/loader.svg";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.p2.gc01aio.foxhub.space/apis/products/products",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      // 2 cara akses token
      // console.log(localStorage.getItem("access_token"));
      // console.log(localStorage.access_token);

      // console.log(data.data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
      console.log(error.response, "ress");
      // console.log(!localStorage.getItem("access_token"), 'true?')
      if (error.response.statusText == "Unauthorized") {
        notif(
          `${error.response.data.message}, Click here to login!`,
          true,
          "/login",
        );
      }
    } finally {
      setLoading(false);
    }
  }

  // delete
  async function deleteProduct(id) {
    try {
      setLoading(true);
      // console.log(id, "tebak id??");
      await axios.delete(
        `https://api.p2.gc01aio.foxhub.space/apis/products/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );
      notif(`Success delete product!`);
      getProducts(); //fetch ulang untuk dapat/tampilkan kembali semua data terbaru
    } catch (error) {
      console.log(error.response);
      notif(error.response.data.message, true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {/* pages */}
      <section className="container-fluid  min-vh-100">
        <div className="row">
          <section
            className="col-md-9 ms-sm-auto col-lg-10 ps-md-4 pe-md-4"
            id="product-section"
          >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <div>
                <h1 className="h2 fw-bold mb-1">Products</h1>
                <p className="text-muted mb-0">
                  Manage your products and inventory
                </p>
              </div>

              <Link to="/add-product">
                <button
                  className="btn btn-dark rounded-pill px-4"
                  id="new-product"
                >
                  <span className="material-symbols-outlined align-middle me-1">
                    add
                  </span>
                  New Product
                </button>
              </Link>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center mt-30">
                <img src={loader} alt="loading image" />
              </div>
            ) : (
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-0">
                  <div className="table-responsive ">
                    <table className="table align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="px-3">#</th>
                          <th>Name</th>
                          <th width="100">Image</th>
                          <th>Description</th>
                          <th className="text-center">Stock</th>
                          <th>Price</th>
                          <th>Author</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody id="table-product">
                        {product.map((p, idx) => (
                          <tr key={p.id}>
                            <td className="px-3">{idx + 1}</td>

                            <td className="fw-semibold">{p.name}</td>

                            <td>
                              <img
                                src={p.imgUrl}
                                alt={p.name}
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  objectFit: "cover",
                                  borderRadius: "12px",
                                }}
                              />
                            </td>

                            <td
                              className="text-muted"
                              style={{
                                maxWidth: "200px",
                              }}
                            >
                              {p.description.substring(0, 50)}...
                            </td>

                            <td className="text-center">
                              <span className="badge bg-secondary ">
                                {p.stock}
                              </span>
                            </td>

                            <td className="fw-bold">
                              Rp {p.price.toLocaleString("id-ID")}
                            </td>

                            <td>{p.author.email}</td>

                            <td>
                              <div className="d-flex gap-2 pr-2">
                                <button
                                  onClick={() => deleteProduct(p.id)}
                                  className="btn btn-outline-danger p-0 d-flex justify-content-center align-items-center"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}
                                >
                                  <span className="material-symbols-outlined">
                                    delete
                                  </span>
                                </button>

                                <Link
                                  to={`/edit-product/${p.id}`}
                                  className="btn btn-outline-primary p-0 d-flex justify-content-center align-items-center"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}
                                >
                                  <span className="material-symbols-outlined">
                                    edit
                                  </span>
                                </Link>

                                <Link
                                  to={`/upload-img/${p.id}`}
                                  className="btn btn-outline-success p-0 d-flex justify-content-center align-items-center"
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                  }}
                                >
                                  <span className="material-symbols-outlined">
                                    image
                                  </span>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
