import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import style from "./LeftSideBar.module.css";
import { action } from "../../Redux/Store/Store";
import { Box } from "@mui/system";
function LeftSideBar({ListCatologe}) {
  const router = useRouter();
  console.log(router.asPath)
  const dispatch = useDispatch();
  // const { Catologe } = useSelector((state) => state);
  // console.log("data", Catologe);
  const Direct = function (end) {
    router.push(`/${end}`);
  };
  const SetEpiso
  return (
   
    <Grid className={`${style}`}  item lg={3} md={3}>
      <div className="hidden-sm hidden-xs">
        <ul>
          {ListCatologe.length > 0 && ListCatologe
            ? ListCatologe[1].map((item, index) => {
                return (
                  <li
                    className={router.asPath === `/${item.href}`?`${style.CatologeMovieItemActive}`: `${style.CatologeMovieItem}`}
                    onClick={() => {
                      dispatch(action.SetCurPage(1));

                      Direct(item.href);
                    }}
                    key={item.name}
                  >
                    <a>
                      <p
                      
                       >{item.name ? item.name : ""}</p>
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
