import Head from "next/head";
import Image from "next/image";
import { Grid } from "@mui/material";
import Link from "next/link";
import Header from "../Components/Header/Header";
import LeftSideBar from "../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../Components/RightSideBar/RightSideBar";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../Redux/Store/Store";
import { useEffect } from "react";
const axios = require("axios").default;
export default function Home({ data, movielist }) {
  const dispatch = useDispatch();
  console.log(data)
  // const { Catologe, TabIsClose } = useSelector((state) => state);
  // dispatch(action.SetCatologe(data.data));
  // dispatch(action.SetCurMovieList(movielist))
  // console.log(Catologe,18)

  return (
    <>
      <div>
        <Header />
        <Grid container spacing={3}>
          <LeftSideBar ListCatologe={data.data} />
          <RightSideBar itemsArr={movielist} />
        </Grid>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // const param = new URLSearchParams(location.search).get("page")
  console.log(context.params, 33);
  // let result = await axios.get(`http://localhost:5000/fliterlist`);
  // console.log(result);
  let result = await Promise.all([
    axios.get(`http://localhost:5000/fliterlist`),
    axios.get(`http://localhost:5000/movie/list?ds=phim-bo&page=1`),
  ]);
  // console.log(result[0].data,result[1].data)
  return {
    props: {
      data: result[0].data,
      movielist: result[1].data,
      startPage: 1,
    },
  };
}
