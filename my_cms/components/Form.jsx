import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "./Button";

export default function Form({ handleForm, productToEdit }) {
  // for dropdown
  const [category, setCategory] = useState([]);
  // to fill the form
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  // for dropdown
  async function getCategory() {
    try {
      const { data } = await axios.get(
        `https://api.p2.gc01aio.foxhub.space/apis/products/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );
      // console.log(data.data);
      setCategory(data.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  // show category first
  useEffect(() => {
    getCategory();
  }, []);

  // for edit page. show while watch
  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setCategoryId(productToEdit.categoryId);
      setDescription(productToEdit.description);
      setStock(productToEdit.stock);
      setPrice(productToEdit.price);
      setImgUrl(productToEdit.imgUrl);
    }
  }, [productToEdit]);

  return (
    <>
      <div className="card bg-light border-0 shadow-sm px-5 py-4 rounded-4">
        <form
          onSubmit={(e) =>
            handleForm(e, name, categoryId, description, stock, price, imgUrl)
          }
          id="product-form"
        >
          <div className="mb-3  ">
            <label htmlFor="product-name">
              Name <span className="text-danger fw-bold">*</span>
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              className="form-control"
              id="product-name"
              placeholder="Enter product name"
              autoComplete="off"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-category">
              Category <span className="text-danger fw-bold">*</span>
            </label>
            <select
              value={categoryId}
              onChange={(e) => {
                // console.log("select changed", e.target.value);
                setCategoryId(+e.target.value);
              }}
              id="product-category"
              className="form-select"
              required=""
            >
              <option disabled>-- Select Category --</option>
              {/* looping category */}
              {category.map((cat) => {
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="product-desc">
              Description <span className="text-danger fw-bold">*</span>
            </label>
            <input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              className="form-control"
              id="product-desc"
              placeholder="Enter product description"
              autoComplete="off"
              required=""
            />
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="product-stock">
                  Stock <span className="text-danger fw-bold">*</span>
                </label>
                <input
                  value={stock}
                  onChange={(e) => {
                    setStock(+e.target.value);
                  }}
                  type="number"
                  min={0}
                  className="form-control"
                  id="product-stock"
                  placeholder="Enter product stock"
                  autoComplete="off"
                  required=""
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="product-price">
                  Price <span className="text-danger fw-bold">*</span>
                </label>
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(+e.target.value);
                  }}
                  type="number"
                  min={0}
                  className="form-control"
                  id="product-price"
                  placeholder="Enter product price"
                  autoComplete="off"
                  required=""
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="product-image">Image</label>
            <input
              value={imgUrl}
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              type="text"
              className="form-control"
              id="product-image"
              placeholder="Enter product image url"
              autoComplete="off"
            />
          </div>
          <div className="row mt-4 mb-2">
            <div className="col-6">
              <Link to="/">
                <Button
                  nameButton="Cancel"
                  backgroundColor="#E2E8F0"
                  color="#000"
                ></Button>
              </Link>
            </div>
            <div className="col-6">
              <Button nameButton="Submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
