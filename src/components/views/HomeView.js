import { NavLink } from "react-router-dom";
import { Route } from "react-router";
import { useLocation } from "react-router";
import GoBack from "../training/GoBack";

export default function HomeView() {
  const location = useLocation();
  return (
    <div className="wrapper">
      <NavLink
        to={{
          pathname: "/smolin",
          state: {
            goBack: location,
            label: "go home",
          },
        }}
      >
        Redux_Smolin
      </NavLink>
      <NavLink
        to={{
          pathname: "/repeta",
          state: {
            goBack: location,
            label: "go home",
          },
        }}
      >
        Redux_Repeta
      </NavLink>

      <Route path="/smolin">
        <GoBack title="one" />
      </Route>
      <Route path="/repeta">
        <GoBack title="two" />
      </Route>
    </div>
  );
}
