const express = require("express");
const routes = express.Router();
const axious = require("axios").default;
routes.get("/lastest", async (req, res) => {
  console.log(req.query.page);
  try {
    let result = await axious.get(
      `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${
        req.query.page ? req.query.page : 1
      }`
    );
    res.send(result.data);
  } catch (e) {
    res.json(e);
  }

  // console.log(result.data)
});

routes.get("/list", async (req, res) => {
  let queryDS = req.query.ds;
  let page = req.query.page;
  try {
    // let getFilterCatologe = await axious.get("http://localhost:5000/fliterlist")
    // let check =getFilterCatologe.data.data[1];
    // console.log(check)
    let ListMovieBySlug = await axious.get(
      `https://ophim.tv/_next/data/m5wySfMXDukfAvbiXTiQO/danh-sach/phim-moi.json?slug=${queryDS}&page=${
        page ? page : 1
      }`
    );
    console.log(ListMovieBySlug.data);
    res.send(ListMovieBySlug.data);
  } catch (e) {
    res.json(e);
  }
});

routes.get("/gender", async (req, res) => {
  let gender = req.query.gender;
  let page = req.query.page;
  let ds = req.query.ds;
  try {
    console.log(
      `https://ophim.tv/_next/data/m5wySfMXDukfAvbiXTiQO/danh-sach/${
        ds ? ds : "phim-moi"
      }.json?slug=${
        ds ? ds : "phim-moi"
      }&sort_field=_id&category=${gender}&country=&year=&page=${
        page ? page : 1
      }`
    );
    let respone = await axious.get(
      `https://ophim.tv/_next/data/m5wySfMXDukfAvbiXTiQO/danh-sach/${
        ds ? ds : "phim-moi"
      }.json?slug=${
        ds ? ds : "phim-moi"
      }&sort_field=_id&category=${gender}&country=&year=&page=${
        page ? page : 1
      }`
    );
    let data = respone.data;
    res.send(data);
  } catch (e) {
    res.status(404).json(e);
  }
  // https://ophim.tv/_next/data/m5wySfMXDukfAvbiXTiQO/danh-sach/phim-moi.json?slug=phim-moi&sort_field=_id&category=hanh-dong&country=&year=
});

module.exports = routes;
