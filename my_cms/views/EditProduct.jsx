import axios from "axios";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router";
import notif from "../src/helpers/notification";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [productToEdit, setProductToEdit] = useState([]);

  async function handleForm(
    e,
    name,
    categoryId,
    description,
    stock,
    price,
    imgUrl,
  ) {
    e.preventDefault();

    try {
      await axios.put(
        `https://api.p2.gc01aio.foxhub.space/apis/products/products/${id}`,
        { name, categoryId, description, stock, price, imgUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );

      notif("Success edit product!");
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      if (error.response.statusText == "Unauthorized") {
        notif(
          `${error.response.data.message}, Click here to login!`,
          true,
          "/login",
        );
      } else {
        notif(error.response.data.message, true);
      }
    }
  }

  // show data
  async function getProduct() {
    try {
      const { data } = await axios.get(
        `https://api.p2.gc01aio.foxhub.space/apis/products/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );

      setProductToEdit(data.data);
    } catch (error) {
      console.log(error.response);

      if (error.response.statusText == "Unauthorized") {
        notif(
          `${error.response.data.message}, Click here to login!`,
          true,
          "/login",
        );
      } else {
        notif(error.response.data.message, true);
      }
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-5"
        id="edit-product-section"
      >
        <div className="ml-65 my-3">
          <h1 className="h2 fw-bold mb-3">Update Product</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <Form handleForm={handleForm} productToEdit={productToEdit} />
          </div>
        </div>
      </section>
    </>
  );
}
