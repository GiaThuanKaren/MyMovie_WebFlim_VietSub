import { Grid, Link } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./LeftSideBar.module.css";
function LeftSideBar() {
  const { Catologe } = useSelector((state) => state);
  // console.log("data", Catologe);
  return (
    <Grid item lg={3} md={3}>
      <div className="hidden-sm hidden-xs">
        <ul>
          {Catologe.length > 0 && Catologe
            ? Catologe[1].map((item, index) => {
                return (
                  <li key={item.name}>
                    <Link href={item.href ? item.href : "/"}>
                      
                        <p>{item.name ? item.name : ""}</p>
                      
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </Grid>
  );
}

export default LeftSideBar;
