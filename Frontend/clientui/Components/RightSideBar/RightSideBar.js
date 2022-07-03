import { Grid } from "@mui/material";
import style from "./RightSideBar.module.css";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import PaginationItem from "@mui/material/PaginationItem";
import MovieItem from "../MovieItem/MovieItem";
import { useEffect, useState } from "react";
import { action } from "../../Redux/Store/Store";
function RightSideBar({ itemsArr }) {
  const router = useRouter();
  const {CurPage} = useSelector(state=> state);
  console.log(router.pathname, "---16---");
  // console.log(itemsArr, "------");
  // console.log();
  const { page } = router.query;
  const dispatch = useDispatch();
  const { items, params, type_list } = itemsArr;
  console.log("Type   ", type_list);
  // console.log(items, 9);
  const [properties, SetProperties] = useState(() => {
    // đưa vào biến này , để chuyển trang chung 1 biến items
    console.log("get first");
    return { Curpage: 1, ListMovie: items, PageNum: params.pagination };
  });
  // console.log(properties);
  useEffect(() => {
    async function CallApi() {
      let respone = await axios.get(
        `http://localhost:5000/movie/list?ds=${type_list}&page=${properties.Curpage}`
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
    // console.log(value);
    // router.push(`/`)
    dispatch(action.SetCurPage(value))
    SetProperties({
      ...properties,
      Curpage: value,
    });
  };
  console.log(CurPage)
  return (
    <Grid item lg={9} md={9} sm={12}>
      <Grid container spacing={3}>
        {CurPage == 1
          ? items.map((item, idx) => {
              console.log(item, 56);
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
          : properties.ListMovie.map((item, idx) => {
              console.log("below");
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
            })}
        {/* MovieItems */}
      </Grid>
      <Stack spacing={2}>
        <Grid container justifyContent={"center"}>
          <Pagination
            page={properties.Curpage == 1 ? CurPage : properties.Curpage }
            count={620}
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
