import { Alert, Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SuccessAlert from "../../components/shared/Alerts";
// import axiosInstance from "../../api/axiosInstance";
import { AuthLayout } from "../layout/AuthLayout";

export default () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseHttp, setResponseHttp] = useState(false);
  const [responseErr, setResponseErr] = useState(false);


  const createAccount = (username, email, password, confirmPassword) => {
    if (password === confirmPassword && username.length <= 10 ) {
      console.log(
        username,
        email,
        password,
        confirmPassword,
        "Cuenta creada correctamente"
      );
      const resApi = new Promise((resolve) => setTimeout(resolve, 500));
      resApi.then(() => {
        console.info("ok");
        setResponseHttp(true);
      });
      
    } else {
      console.log("contrasenia incorrecta");
      const resApiE = new Promise((resolve) => setTimeout(resolve, 500));
      resApiE.then(() => {
        console.info("error");
        setResponseErr(true);
      });
    };


    // axiosInstance.post('/register', {nombre:username, email,password});
  };

  return (
    <div style={{ padding: 30 }}>
      <AuthLayout>
        <form>
          <Grid>
            <TextField
              error={username.length >= 10}
              value={username}
              margin="dense"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              helperText={username === "" ? "username is required" : ""}
            />
          </Grid>
          <Grid>
            <TextField
              error={(email.length >= 1) & !email.includes("@")}
              margin="dense"
              label="Email"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              value={email}
              helperText={email === "" ? "email is required" : " "}
            />
          </Grid>

          <Grid>
            <TextField
              error={password.length >= 9}
              margin="dense"
              label="Password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              value={password}
              helperText={password === "" ? "password is required" : " "}
            />
          </Grid>

          <Grid>
            <TextField
              error={confirmPassword.length >= 9}
              margin="dense"
              label="Confirm-Password"
              type={"password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              value={confirmPassword}
              helperText={confirmPassword === "" ? " is required" : " "}
            />
          </Grid>

          <Grid>
          {responseHttp && (
              <SuccessAlert/>
            )}
            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                createAccount(username, email, password, confirmPassword)
              }
            >
              {" "}
              Create Account{" "}
            </Button>
          </Grid>
          {!!responseErr && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    Error, check the fields
                  </Alert>
                </Stack>
            )}
        </form>
      </AuthLayout>
    </div>
  );
};
