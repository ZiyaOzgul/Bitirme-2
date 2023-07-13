import React from "react";
import { UilPlus, UilSearch } from "@iconscout/react-unicons";
const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-slate-100">
      <div className="w-1/3 h-2/5 bg-gradient-to-br from-slate-600 to-gray-600 border border-slate-400 shadow-2xl shadow-slate-800 drop-shadow-2xl  text-white flex-col flex items-center rounded-lg justify-center px-2 py-1">
        <h1 className="font-bold text-6xl my-6">Hoş Geldiniz</h1>
        <div className="w-full flex justify-center items-center space-x-2  mt-10 ">
          <p className="font-medium text-xl">Ürün Ekleyebilir </p>
          <UilPlus className="w-10 h-10 "></UilPlus>
        </div>
        <div className="w-full flex justify-center items-center space-x-2  mt-10 ">
          <p className="font-medium text-xl">Ürün Arayabilirsiniz </p>
          <UilSearch className="w-10 h-10 "></UilSearch>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
