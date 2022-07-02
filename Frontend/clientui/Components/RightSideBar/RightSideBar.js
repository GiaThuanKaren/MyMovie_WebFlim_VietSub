import { Grid } from "@mui/material";
import Link from "next/link";
import style from "./RightSideBar.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function RightSideBar() {
  return (
    <Grid item lg={9} md={9} sm={12}>
      <Grid container></Grid>
      <Stack spacing={2}>
        <Grid container justifyContent={"center"}>
          <Pagination count={11} defaultPage={6} boundaryCount={2} />
        </Grid>
      </Stack>
    </Grid>
  );
}

export default RightSideBar;
