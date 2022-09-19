import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
// import axiosInstance from "../../api/axiosInstance";
import { AuthLayout } from "../layout/AuthLayout";

export default () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const formValidations={
  //   //arreglo que la primera posicion es la funcion que lo va a evaluar, y el segundo el mensaje de error
  //   email: [(value)=> value.includes('@'),'email must contain @.'],
  //   password: [(value)=> value.length>=6,'password must contain more than 6 letters.'],
  //   displayName: [(value)=> value.length>=1,'Username is quired.']
  // }
  

  const createAccount = (username,email, password, confirmPassword) => {
    console.log(username, email, password, confirmPassword);
    // axiosInstance.post('/register', {nombre:username, email,password});
  };

  

  return (
    <div style={{ padding: 30 }}>
      <AuthLayout>
        <form>
          <Grid >
            <TextField
              error={username.length >=11}
              value={username}
              margin="dense" 
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              helperText={username === "" ? 'username is required' : ' '}
            />
          </Grid>
          <Grid>

            <TextField
              error={email.includes('@')}
              margin="dense" 
              label="Email"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              value={email}
              helperText={email === "" ? 'email is required' : ' '}
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
              helperText={password === "" ? 'password is required' : ' '}
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
              helperText={confirmPassword === "" ? ' is required' : ' '}
            />
          </Grid>

          <Grid >
            <Button
              fullWidth
              variant="contained"
              onClick={()=>createAccount(username, email , password, confirmPassword)}
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
