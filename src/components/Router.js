import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = (state) => {
  return (
    <Router>
      <Routes>
        {state.isLoggedIn !== null ? 
        (
          <>
            <Route exact={true} path={"/"} element={<Home />}></Route>
          </>
        ) : 
        (
          <Route exact={true} path={"/"} element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;