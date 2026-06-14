// import { useState } from "react";
import Detail from "./views/Detail";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import BaseLayout from "./views/BaseLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,{/* <Login /> */}
    </>
  );
}

export default App;
