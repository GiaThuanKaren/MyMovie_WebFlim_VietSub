import { Grid } from "@mui/material";
import style from "./RightSideBar.module.css";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import PaginationItem from "@mui/material/PaginationItem";
import MovieItem from "../MovieItem/MovieItem";
import { useEffect, useState } from "react";
function RightSideBar({ itemsArr }) {
  const router = useRouter();
  // console.log(router.query)
  const { page } = router.query;
  console.log(items);
  const { items, pagination } = itemsArr;
  // console.log(items, 9);
  const [properties ,SetProperties]=useState({
    // đưa vào biến này , để chuyển trang chung 1 biến items
  })

  const ChoosePage = function (event, value) {
    console.log(value);
    // router.push({
    //   pathname:"/",
    //   query:{page:value}
    // })
  };
  return (
    <Grid item lg={9} md={9} sm={12}>
      <Grid container>
        {items && items.length > 0
          ? items.map((item, idx) => {
              return (
                <MovieItem
                  key={item._id}
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
          <Pagination
            count={11}
            onChange={ChoosePage}
            defaultPage={1}
            boundaryCount={2}
          />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default RightSideBar;
