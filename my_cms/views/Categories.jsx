import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import notif from "../src/helpers/notification";
import loader from "../src/assets/loader.svg";

export default function Categories() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCategory() {
    try {
      setLoading(true);
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
      if (error.response.statusText == "Unauthorized") {
        notif("Please login first", true);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          {loading ? (
            <div className="flex justify-center pl-50 mt-50">
              <img src={loader} alt="loading image" className="" />
            </div>
          ) : (
            <div className="mt-4 ml-60 mr-10">
              <div className="mb-4 ">
                <h1 className="h2 fw-bold mb-1">Categories</h1>
                <p className="text-muted mb-0">
                  Manage your product categories
                </p>
              </div>

              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="card-body p-0">
                  <table className="table align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="px-5" width="100">
                          #
                        </th>
                        <th>Category Name</th>
                      </tr>
                    </thead>

                    <tbody id="table-category">
                      {category.map((cat, idx) => (
                        <tr key={cat.id}>
                          <td className="px-5">{idx + 1}</td>

                          <td>
                            <span className="fw-semibold">{cat.name}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            // <table className="table ml-70">
            //   <thead>
            //     <tr>
            //       <th scope="col">#</th>
            //       <th scope="col">Name</th>
            //     </tr>
            //   </thead>

            //   <tbody id="table-category">
            //     {category.map((cat, idx) => (
            //       <tr key={cat.id}>
            //         <td>{idx + 1}</td>
            //         <td className="fw-bold">{cat.name}</td>
            //       </tr>
            //     ))}
            //   </tbody>
            // </table>
          )}
        </div>
      </div>
    </>
  );
}
