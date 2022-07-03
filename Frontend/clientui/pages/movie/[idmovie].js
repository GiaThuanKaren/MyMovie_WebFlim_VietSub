import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header"
function MoviePageDetail() {
  return <>
    <Header />
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
