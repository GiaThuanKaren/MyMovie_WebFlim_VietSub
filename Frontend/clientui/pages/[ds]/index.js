  import { Grid } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../Components/Header/Header";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
function MovieByTag({ movielist, ListCatologe }) {
  const router = useRouter();
  console.log("called");
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <LeftSideBar ListCatologe={ListCatologe.data} />
        <RightSideBar itemsArr={movielist} />
      </Grid>
    </>
  );
}

export default MovieByTag;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { ds } = params;
  console.log(ds, `http://localhost:5000/movie/list?ds=${ds}&page=1`);

  let result = await Promise.all([
    axios.get(`http://localhost:5000/fliterlist`),
    axios.get(`http://localhost:5000/movie/list?ds=${ds}&page=1`),
  ]);
  console.log("Call Server");
  return {
    props: {
      movielist: result[1].data,
      ListCatologe: result[0].data,
    },
  };
}
