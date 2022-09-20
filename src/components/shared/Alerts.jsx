import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SuccessAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        Account created successfully
      </Alert>
    </Stack>
  );
}



// {/* <Alert variant="filled" severity="warning">
// This is a warning alert — check it out!
// </Alert>
// <Alert variant="filled" severity="success">
// This is a success alert — check it out!
// </Alert> */}

