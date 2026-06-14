import Categories from "./views/Categories";
import AddProduct from "./views/AddProduct";
import Login from "./views/Login";
import Product from "./views/Product";
import AddStaff from "./views/AddStaff";
import { BrowserRouter, Routes, Route } from "react-router";

import UploadImage from "./views/UploadImage";
import EditProduct from "./views/EditProduct";
import BaseLayout from "./views/BaseLayout";

function App() {
  return (
    <>
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="IDEA Admin Panel" />
        <meta name="author" content="Hacktiv8" />
        <link
          href="./image/IDEA_logo.svg"
          type="image/x-icon"
          rel="shortcut icon"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0"
          rel="stylesheet"
        />
        <link href="./css/style.css" rel="stylesheet" />
        <title>IDEA - Admin Panel</title>
        {/* Preloader */}
        <div id="preloader" style={{ display: "none" }}>
          <div className="loading">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
              background="transparent"
              speed={1}
              style={{ width: 300, height: 300 }}
              loop=""
              autoPlay=""
            />
          </div>
        </div>
        {/* End Preloader */}

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<BaseLayout />}>
              {/* <Route path="/product" element={<Product />} /> */}
              <Route path="/" element={<Product />} />
              <Route path="/category" element={<Categories />} />
              <Route path="/add-staff" element={<AddStaff />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="/upload-img/:id" element={<UploadImage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
