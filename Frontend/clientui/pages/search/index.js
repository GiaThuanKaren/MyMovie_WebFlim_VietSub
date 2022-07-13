import { Grid } from "@mui/material";
import React from "react";
import style from "./SearchMain.module.css";
function SearchPage() {
  return;
  <>
    <Grid container></Grid>
    <div>SearchPage</div>;
  </>;
}

export default SearchPage;

export async function getStaticPaths() {
    return{
        paths:[],
        fallback:"blocking"
    }
}

export async function getStaticProps() {
  return {
    props:{
        movieList:[]
    }
  };
}
