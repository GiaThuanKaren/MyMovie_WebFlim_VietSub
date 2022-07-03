import { Grid } from "@mui/material";
import style from "./RightSideBar.module.css";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import PaginationItem from "@mui/material/PaginationItem";
import MovieItem from "../MovieItem/MovieItem";
import { useEffect, useState } from "react";
function RightSideBar({ itemsArr }) {
  const router = useRouter();
  console.log(itemsArr, "------");
  // console.log();
  const { page } = router.query;
  const { items, pagination } = itemsArr;
  // console.log(items);
  // console.log(items, 9);
  const [properties, SetProperties] = useState({
    // đưa vào biến này , để chuyển trang chung 1 biến items
    Curpage: 1,
    ListMovie: items,
    PageNum:pagination
  });
  console.log(properties);
  useEffect(() => {
    async function CallApi() {
      let respone = await axios.get(
        `http://localhost:5000/movie/lastest?page=${properties.Curpage}`
      );
      SetProperties({
        ...properties,
        ListMovie: respone.data.items,
      });
    }
    CallApi();
    window.scrollTo(0, 0);
  }, [properties.Curpage]);
  const ChoosePage = function (event, value) {
    console.log(value);
    SetProperties({
      ...properties,
      Curpage: value,
    });
  };
  return (
    <Grid item lg={9} md={9} sm={12}>
      <Grid container spacing={3}>
        {properties.ListMovie && properties.ListMovie.length > 0
          ? properties.ListMovie.map((item, idx) => {
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
            count={properties.PageNum.totalPages}
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
