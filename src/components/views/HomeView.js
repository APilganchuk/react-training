import { NavLink } from "react-router-dom";
import { Route } from "react-router";
import Training from "../training/Training";
import Training2 from "../training/Training2";

export default function HomeView() {
  return (
    <div className="wrapper">
      <NavLink to="/smolin">Redux_Smolin</NavLink>
      <NavLink to="/repeta">Redux_Repeta</NavLink>

      <Route path="/smolin" component={Training} />
      <Route path="/repeta" component={Training2} />
    </div>
  );
}
