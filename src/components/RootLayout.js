import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../redux/store";

const RouterLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
};

export default RouterLayout;
