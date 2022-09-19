
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";

const loginFormFields = {
  loginUsername: "",
  loginPassword: "",
};

const x = () => {
  // <Route path="/crudPage" element={<CrudPage />} />
};

export default () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: 30 }}>
      <AuthLayout>
        <form style={{ padding: 30 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            name="email"
            // value={email}
            // onChange={ onInputChange}
          />

          <TextField
            margin="normal"                                             
            label="Password"
            type={"password"}
            fullWidth
            name="password"
            // value={ password }
            // onChange={onInputChange}
          />

          <Stack direction="row" spacing={19}>
            <Button
              className="btnlog"
              variant="contained"
              fullWidth
              onClick={x}
              href="/crudPage"
            >
              Login
            </Button>
            </Stack>          
        </form>
      </AuthLayout>
    </div>
  );
};
