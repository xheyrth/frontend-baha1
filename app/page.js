import React from 'react';
import { Button, Stack } from "@mui/material";
import Link from 'next/link'; // Import Link from Next.js
import './globals.css';

export default function Landing() {
  return (
    <div>
      <h1>Welcome To Our Website</h1>
      <Stack spacing={2} direction="row">
        {/* Use Link from Next.js to handle client-side navigation */}
        <Link href="/LogReg/Login" passHref>
          <Button variant="contained" component="a">
            Login
          </Button>
        </Link>
        <Link href="/LogReg/Register" passHref>
          <Button variant="contained" component="a">
            Register
          </Button>
        </Link>
      </Stack>
    </div>
  );
}
