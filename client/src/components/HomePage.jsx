import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // getImageAsync,
  getProducts,
  products,
} from "../redux/slice/ReduxSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const Products = useSelector(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  if (Products === "") {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <h1 className="font-bold text-6xl">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center space-y-6 ">
        {/* <img
          src={`data:${
            Products[0].img.contentType
          };base64,${Products[0].img.data.data.toString("base64")}`}
          alt="alt"
        /> */}
        {Products.map((item) => (
          <div
            key={item._id}
            className="w-full p-4 flex space-x-4 items-center justify-center bg-gradient from-slate-400 to-gray-400 "
          >
            <img
              src={`http://localhost:3001/uploads/${item.img.data}`}
              alt={item.name}
              className="max-w-[800px] "
            />
            <div className="flex flex-col items-center justify-center space-y-6 ">
              <h1 className="font-bold text-4xl text-gray-500">{item.name}</h1>
              <h3 className="font-semibold text-2xl text-gray-500 ">
                Fiyat: {item.price} <i>$</i>
              </h3>
              <div className="flex items-center justify-between space-x-6 w-full">
                <div className="flex items-center justify-center flex-col">
                  <p className="text-lg font-medium text-gray-500">
                    Garanti Tarihi:
                  </p>
                  <p className="font-medium text-base text-gray-600">
                    {item.guaranty}
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <p className="text-lg font-medium text-gray-500">
                    Ürün Alım Tarihi:
                  </p>
                  <p className="font-medium text-base text-gray-600">
                    {item.buyDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-lg font-medium text-gray-500">Ürün Id:</p>
                <p className="font-medium text-base text-gray-600">
                  {item._id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default HomePage;
