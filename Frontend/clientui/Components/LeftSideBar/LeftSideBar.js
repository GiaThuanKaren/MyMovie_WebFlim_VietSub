import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import style from "./LeftSideBar.module.css";
import { action } from "../../Redux/Store/Store";
function LeftSideBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { Catologe } = useSelector((state) => state);
  // console.log("data", Catologe);
  const Direct = function (end) {
    router.push(`/${end}`);
  };
  return (
    <Grid item lg={3} md={3}>
      <div className="hidden-sm hidden-xs">
        <ul>
          {Catologe.length > 0 && Catologe
            ? Catologe[1].map((item, index) => {
                return (
                  <li
                    className={`${style.CatologeMovieItem}`}
                    onClick={() => {
                      dispatch(action.SetCurPage(1));

                      Direct(item.href);
                    }}
                    key={item.name}
                  >
                    <a>
                      <p>{item.name ? item.name : ""}</p>
                    </a>
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
