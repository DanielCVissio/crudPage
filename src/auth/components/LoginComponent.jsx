import { Google } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";


const loginFormFields = {
    loginUsername: '',
    loginPassword: '',
}

const x = ()=>{
  // <Route path="/crudPage" element={<CrudPage />} />
}

export default ()=> {
  const [checked, setChecked] = useState(true);
  
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  

  return (
    <div style={{ padding: 30 }}>
      <AuthLayout>
          <form>
              <TextField 
                label="Email"
                type ="email"
                placeholder="xxxx@xxx.com"
                fullWidth
                name="email"
                // value={email}
                // onChange={ onInputChange}
              />

              <TextField 
                label="Password" 
                type={'password'}
                placeholder='******'
                fullWidth
                name='password'
                // value={ password }
                // onChange={onInputChange}
              />

              <Button
                variant='contained'
                fullWidth
                onClick={x}
                href='/crudPage'
              > Login </Button>

              <Button 
                variant='contained'
                fullWidth>
                <Google/>
                  <Typography >oogle</Typography>
              </Button>

          </form>

      </AuthLayout>

    </div>
  );
}