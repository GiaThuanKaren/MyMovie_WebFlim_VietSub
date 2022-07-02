import { Grid } from "@mui/material";
import style from "./LeftSideBar.module.css";
function LeftSideBar({ result }) {
  console.log(result);
  return (
    <Grid item lg={3} md={3}>
      <div className="hidden-sm hidden-xs">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Grid>
  );
}

export default LeftSideBar;
