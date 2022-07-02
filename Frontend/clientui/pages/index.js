import Head from "next/head";
import Image from "next/image";

import { Grid } from "@mui/material";
import Link from "next/link";
import Header from "../Components/Header/Header";
import LeftSideBar from "../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../Components/RightSideBar/RightSideBar";
export default function Home({ data }) {
  return (
    <>
      <div>
        <Header />
        <Grid container spacing={3}>
          <LeftSideBar result={data} />
          <RightSideBar />
        </Grid>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let respone = await fetch(`http://localhost:5000/fliterlist`);
  let result = await respone.json();
  console.log(result);
  return {
    props: {
      data: result,
    },
  };
}
