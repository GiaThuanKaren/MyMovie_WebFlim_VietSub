import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header"
import style from "../../styles/idMovie.module.css"
function MoviePageDetail() {
  const {Catologe} = useSelector(state=> state)
  console.log(Catologe)
  return <>
    <Header />
    <div className={`${style.MovieDetailPage}`}>

    </div>
    <Grid container>

    </Grid>
  </>;
}

export default MoviePageDetail;
// const {} =useSelector(state=>state);
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const id = params.idmovie ? params.idmovie : "";
  console.log(id, 19);
  
  return {
    props: {
      data: [],
    },
  };
}
