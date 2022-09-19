import { Outlet } from "react-router-dom";
// import "./Wrapper.css";
export default () => {
  return (
    <div className="container">
        <Outlet />
    </div>
  );
};