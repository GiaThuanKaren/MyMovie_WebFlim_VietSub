import { Grid } from "@mui/material";
import style from "./RightSideBar.module.css";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';
import MovieItem from "../MovieItem/MovieItem";
function RightSideBar() {
  const { CurListMovie } = useSelector((state) => state);
  const { items, pagination } = CurListMovie;
  console.log(items, 9);
  return (
    <Grid item lg={9} md={9} sm={12}>
      <Grid container>
        {items && items.length > 0
          ? items.map((item, idx) => {
              return (
                <MovieItem
                  year={item.year}
                  slug={item.slug}
                  OriginalName={item.origin_name}
                  id={item._id}
                  title={item.name}
                />
              );
            })
          : null}
        {/* MovieItems */}
      </Grid>
      <Stack spacing={2}>
        <Grid container justifyContent={"center"}>
          <Pagination count={11} defaultPage={6} boundaryCount={2} />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default RightSideBar;
