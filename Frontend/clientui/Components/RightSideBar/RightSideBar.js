import { Grid } from "@mui/material";
import Link from "next/link";
import style from "./RightSideBar.module.css";

function RightSideBar() {
  return <Grid item lg={9} md={9} sm={12}> right
  <Link href={`/`}>
    <a>Main</a>
  </Link>
   </Grid>;
}

export default RightSideBar;
