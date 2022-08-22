import { Button, Grid, TextField } from '@mui/material';
import * as React from 'react';
import { AuthLayout } from '../layout/AuthLayout';



export default ()=> {
    
    return (
      <div style={{ padding: 30 }}>
        <AuthLayout>
          <form>
          <Grid>
              <TextField 
                label="Username" 
                fullWidth/>
                
            </Grid>

            <Grid>
              <TextField 
                label="Email" 
                type={'email'}
                fullWidth/>
                
            </Grid>
            <Grid>
              <TextField 
                label="Password" 
                type={'password'}
                fullWidth/>
            </Grid>
            <Grid>
              <TextField 
                label="Password2" 
                type={'password'}
                fullWidth/>
            </Grid>
            <Grid>
            
            </Grid>
            <Grid>
              <Button fullWidth variant='contained'> Create Account </Button>
            </Grid>
          </form>
        </AuthLayout>
      </div>
    );
  }