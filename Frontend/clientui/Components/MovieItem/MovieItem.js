import { Grid } from "@mui/material"
import style from "./MovieItem.module.css"

function MovieItem({slug,title,id,year,OriginalName}) {
  return (
    <Grid item lg={3} md={3}>
        <div className={`${style.MovieItemContainer}`}>
            <div className={`${style.ImageMovieItem}`} style={{backgroundImage:`url(https://img.ophim.tv/uploads/movies/${slug}-thumb.jpg)`}}>

            </div>
            <p>{title}-({OriginalName})</p>
            <p>{year}</p>
        </div>
    </Grid>
  )
}

export default MovieItem