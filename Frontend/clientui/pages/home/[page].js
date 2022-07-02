import axios from "axios";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
function Page({ data }) {
  const router = useRouter();
  const [propertise, SetProperties] = useState({
    totalPages: 1,
  });
  const { pagination, items } = data;
  console.log(items);
  const ChoosePage = function (event, value) {
    console.log(value);
    router.push(`/home/${value}`);
  };
  return (
    <div>
      Page
      <Stack spacing={2}>
        <Grid container justifyContent={"center"}>
          <Pagination
            count={pagination.totalPages}
            onChange={ChoosePage}
            defaultPage={1}
            boundaryCount={2}
          />
        </Grid>
      </Stack>
    </div>
  );
}

export default Page;

export async function getStaticPaths({ params }) {
  let respone = await axios.get("http://localhost:5000/movie/lastest?page=1");
  let getDataRespone = respone.data;
  let generateArr = Array.from(
    { length: getDataRespone.pagination.totalPages },
    (_, i) => i + 1
  );
  let ArrParams = generateArr.map((item, idx) => {
    return {
      params: { page: `${item}` },
    };
  });
  console.log(ArrParams);
  return {
    paths: ArrParams,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // const param = new URLSearchParams(location.search).get("page")
  console.log(context.params, 13, "Page");
  let result = await axios.get(
    `http://localhost:5000/movie/lastest?page=${Page ? Page : 1}`
  );
  // console.log(result);
  //   let result =await Promise.all([axios.get(`http://localhost:5000/fliterlist`),axios.get(`http://localhost:5000/movie/lastest?page=1`)])
  // console.log(result[0].data,result[1].data)
  return {
    props: {
      data: result.data,
      movielist: [],
    },
  };
}
