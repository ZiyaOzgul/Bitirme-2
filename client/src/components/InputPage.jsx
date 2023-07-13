import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { postProducts } from "../redux/slice/ReduxSlice";
import { Navigate } from "react-router-dom";

const InputPage = () => {
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      productName: "",
      productImg: "",
      productGuaranty: "",
      productBuyDate: "",
      productPrice: "",
      productNumber: "",
    },
    onSubmit: (e) => {
      dispatch(
        postProducts({
          name: e.productName,
          productImg: e.productImg,
          guaranty: e.productGuaranty,
          price: e.productPrice,
          buyDate: e.productBuyDate,
          productNumber: e.productNumber,
        })
      );
      setSubmit(true);
    },
  });
  return (
    <section className="w-full bg-gradient-to-br from-purple-600 to-blue-600 h-screen flex items-center justify-center flex-col">
      <form
        onSubmit={formik.handleSubmit}
        className="my-4 mx-4 px-8 py-4 w-2/3 h-auto flex items-center justify-center flex-col border rounded-xl bg-gradient-to-br from-purple-400 to-blue-300 "
      >
        <h1 className="font-bold text-6xl my-4">Yeni Ürün Ekle</h1>
        <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productName"
        >
          Ürün İsmi
        </label>
        <input
          className="px-4 py-2 rounded w-2/3 mb-4 mt-1"
          type="text"
          placeholder="Ürün ismi..."
          id="productName"
          name="productName"
          onChange={formik.handleChange}
          value={formik.values.productName}
        />
        <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productPrice"
        >
          Ürün Fiyatı
        </label>
        <input
          className="px-4 py-2 rounded w-2/3 mb-4 mt-1"
          type="number"
          name="productPrice"
          placeholder="Ürün Fiyatı"
          id="productPrice"
          onChange={formik.handleChange}
          value={formik.values.productPrice}
        />
        <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productGuaranty"
        >
          Ürün Son Garanti Tarihi
        </label>
        <input
          className="px-4 py-2 rounded w-2/3 mb-4 mt-1"
          type="date"
          name="productGuaranty"
          id="productGuaranty"
          placeholder="Garanti tarihi..."
          onChange={formik.handleChange}
          value={formik.values.productGuaranty}
        />
        <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productBuyDate"
        >
          Ürün Alım Tarihi
        </label>
        <input
          className="px-4 py-2 rounded w-2/3 mb-4 mt-1"
          type="date"
          name="productBuyDate"
          placeholder="Ürün Alım Tarihi..."
          id="productBuyDate"
          value={formik.values.productBuyDate}
          onChange={formik.handleChange}
        />
        {/* <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productImg"
        >
          Ürün Fotoğrafı
        </label>
        <input
          class="block w-full  py-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          name="productImg"
          id="productImg"
          placeholder="Ürün Fotoğrafı"
          onChange={(e) => {
            formik.setFieldValue("productImg", e.currentTarget.files[0]);
          }}
        /> */}

        <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productNumber"
        >
          Ürün Barkod Numarası
        </label>

        <input
          className="px-4 py-2 rounded w-2/3 mb-4 mt-1"
          type="number"
          name="productNumber"
          id="productNumber"
          value={formik.values.productNumber}
          onChange={formik.handleChange}
        />

        <label
          className="font-medium text-lg text-gray-800"
          htmlFor="productImg"
        >
          Ürün Fotoğrafı
        </label>
        <div className="flex w-2/3 items-center justify-center ">
          <label
            for="productImg"
            className="flex flex-col items-center justify-center w-full h-64  border-gray-300 border-dashed rounded-lg cursor-pointer  bg-gradient-to-br from-purple-600 to-blue-600 hover:bg-gradient-to-tl transition-all ease-in-out duration-300 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
              </p>
            </div>
            <input
              type="file"
              name="productImg"
              id="productImg"
              placeholder="Ürün Fotoğrafı"
              onChange={(e) => {
                formik.setFieldValue("productImg", e.currentTarget.files[0]);
              }}
              className={`file:hidden ${
                formik.values.productImg == "" ? "hidden" : "text-white block"
              }`}
            />
          </label>
        </div>

        <button
          className="px-4 py-2 mt-4 rounded-md bg-gradient-to-br  from-purple-600 to-blue-500 hover:bg-gradient-to-tl duration-500 ease-in-out text-white focus:ring-blue-300"
          type="submit"
        >
          {submit ? <Navigate to={"/"} /> : null}
          Ürün Ekle
        </button>
      </form>
    </section>
  );
};

export default InputPage;
