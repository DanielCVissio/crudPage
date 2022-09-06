import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
// import "./Wrapper.css";
export default () => {
  return (
    <div className="container">
      <Paper >
        <Outlet />
        
      </Paper>
    </div>
  );
};