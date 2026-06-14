import Form from "../components/Form";
import { useNavigate } from "react-router";
import axios from "axios";
import notif from "../src/helpers/notification";

export default function AddProduct() {
  const navigate = useNavigate();

  // untuk form add
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
      // console.log(name, categoryId, description, stock, price, imgUrl);
      const { data } = await axios.post(
        `https://api.p2.gc01aio.foxhub.space/apis/products/products`,
        { name, categoryId, description, stock, price, imgUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );

      console.log("success");
      // console.log(data.data, "<<<");
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      notif(error.response.data.message, true);
    }
  }
  return (
<>
  <section
    className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-5"
    id="new-product-section"
  >
    <div className="ml-65 my-3">
      <h1 className="h2 fw-bold mb-3">New Product</h1>
    </div>

    <div className="row justify-content-center">
      <div className="col-12 col-lg-8 col-xl-6">
        <Form handleForm={handleForm} />
      </div>
    </div>
  </section>
</>
  );
}
