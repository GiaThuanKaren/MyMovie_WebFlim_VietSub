import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import style from "../../styles/IdMovie.module.css";
function MoviePageDetail({ movie, episodes }) {
  const { Catologe } = useSelector((state) => state);
  // console.log(movie, episodes);
  const [proper, SetProper] = useState({
    CurEpisodes: 0,
    CurListEpisodes: episodes[0].server_data,
    CurServerName: episodes[0].server_name,
  });
  console.log(proper);
  console.log(proper.CurListEpisodes[proper.CurEpisodes].link_embed, proper);

  return (
    <>
      <Header />
      <div className={`${style.MovieDetailPage}`}>
        <Grid container spacing={2}>
          <Grid item xl={1} lg={1} md={1} sm={2}>
            <div className="hidden-sm hidden-xs"></div>
          </Grid>
          <Grid item xl={6} lg={6} md={7} sm={6} xs={12}>
            <h3>
              {proper.CurListEpisodes[proper.CurEpisodes].name
                ? proper.CurListEpisodes[proper.CurEpisodes].filename
                : proper.CurListEpisodes[proper.CurEpisodes].name}
            </h3>
            <iframe
              className={`iframe-Show-Movie`}
              width={"100%"}
              height={"500px"}
              allowFullScreen
              src={proper.CurListEpisodes[proper.CurEpisodes].link_embed}
            />
            <Grid container spacing={3}>
              {proper.CurListEpisodes && proper.CurListEpisodes.length >= 0
                ? proper.CurListEpisodes.map((item, idx) => {
                    return (
                      <Grid
                        style={{
                          backgroundColor: "springgreen",
                          color: "#fff",
                        }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                      >
                        <p
                          onClick={() => {
                            SetProper({
                              ...proper,
                              CurEpisodes: idx,
                            });
                          }}
                        >
                          {idx + 1}
                        </p>
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          </Grid>
          <Grid item xl={4} lg={4} md={3}>
            <div className="hidden-sm hidden-xs"></div>
          </Grid>
          <Grid item xl={1} lg={1} md={1} sm={2}>
            <div className="hidden-sm hidden-xs"></div>
          </Grid>
        </Grid>
      </div>
    </>
  );
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
  const slug = params.idmovie ? params.idmovie : "";
  console.log(slug, 19);
  let { data } = await axios.get(`http://localhost:5000/movie/${slug}`);
  return {
    props: {
      movie: data.movie,
      episodes: data.episodes,
    },
  };
}
