import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import style from "./MovieItem.module.css";

function MovieItem({ slug, title, id, year, OriginalName }) {
  const router = useRouter();
  const DirectMovie = function (slugmovie) {
    router.push(`/movie/${slugmovie}`);
  };
  return (
    <Grid item lg={3} md={3}>
      <div
        onClick={() => {
          DirectMovie(slug);
        }}
        className={`${style.MovieItemContainer}`}
      >
        <div
          className={`${style.ImageMovieItem}`}
          style={{
            backgroundImage: `url(https://img.ophim.tv/uploads/movies/${slug}-thumb.jpg)`,
          }}
        ></div>
        <p>
          {title}-({OriginalName})
        </p>
        <p>{year}</p>
      </div>
    </Grid>
  );
}

export default MovieItem;
