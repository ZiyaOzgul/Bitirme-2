import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentProducts,
  getCurrentProductAsync,
} from "../redux/slice/ReduxSlice";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(currentProducts);
  useEffect(() => {
    dispatch(getCurrentProductAsync(productid));
  }, [dispatch]);
  if (product == "" || product == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="w-full bg-gradient-to-tr from-slate-200 to-gray-200 h-screen overflow-y-auto flex items-center justify-center">
        <div className="w-2/3 h-full  border-r border-r-slate-800 px-4">
          <img
            src={`http://localhost:3001/uploads/${product.img.data}`}
            alt={product.name}
            className="w-full h-full object-contain px-4 "
          />
        </div>
        <div className="w-1/2 h-auto flex flex-col  items-center justify-center space-y-12">
          <h1 className="w-full text-center font-bold text-6xl text-gray-800">
            {product.name}
          </h1>
          <h3 className="font-semibold text-xl text-gray-800">
            Fiyat : <i className="text-gray-900">{product.price} $</i>
          </h3>
          <div className="w-full flex items-center justify-evenly">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-medium text-gray-500">
                Garanti Tarihi:
              </p>
              <p className="font-medium text-base text-gray-600">
                {product.guaranty}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-medium text-gray-500">
                Ürün Alım Tarihi:
              </p>
              <p className="font-medium text-base text-gray-600">
                {product.buyDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductPage;
