"use client"
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <p>
        <h1>Login</h1>
        <h5>Have an account?</h5>
      </p>
      <FormControl>
        <TextField id="email" label="Email" type="text" />
        <TextField id="username" label="Username" type="text" />
        <TextField id="password" label="Password" type="password" />
        <Button variant="contained" href="/">Register</Button>
      </FormControl>
    </>
  );
}