import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { AuthLayout } from "../layout/AuthLayout";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createAccount = (username, password) => {
    console.log(username, password);
    axiosInstance.post('/register', {nombre:username, email,password});
  };

  return (
    <div style={{ padding: 30 }}>
      <AuthLayout>
        <form>
          <Grid>
            <TextField
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              value={username}
            />
          </Grid>

          <Grid>
            <TextField
              label="Email"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              value={email}
            />
          </Grid>

          <Grid>
            <TextField
              label="Password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              value={password}
            />
          </Grid>

          <Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={()=>createAccount(username, password)}
            >
              {" "}
              Create Account{" "}
            </Button>
          </Grid>
        </form>
      </AuthLayout>
    </div>
  );
};
