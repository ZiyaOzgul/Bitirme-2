import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import multer from "multer";
// import ImageSchema from "./schemas/ImageSchema.js";
import fs from "fs";
import ProductSchema from "./schemas/ProductSchema.js";
import path from "path";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
dotenv.config();

const { Port, Mongo_Url } = process.env;
mongoose
  .connect(Mongo_Url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(Port, () => {
      console.log(`${Port} is listening`);
    });
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const upload = multer({ storage: storage });

app.get("/products", (req, res) => {
  ProductSchema.find().then((result) => res.send(result));
});
app.post("/products", upload.single("productImg"), (req, res) => {
  const img = req.file.filename;
  const saveImage = new ProductSchema({
    name: req.body.name,
    img: {
      data: img,
      contentType: "image/png",
    },
    guaranty: req.body.guaranty,
    price: req.body.price,
    buyDate: req.body.buyDate,
  });
  saveImage
    .save()
    .then((resultsave) => {
      console.log("image saved id :", resultsave._id);
      ProductSchema.find().then((result) => res.send(result));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/currentProducts/:productID", (req, res) => {
  const productID = req.params.productID;
  const index = ProductSchema.findById(productID);
  if (index != "") {
    ProductSchema.findById(productID)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  } else {
    res.send("Ürün Bulunamadı");
  }
});
