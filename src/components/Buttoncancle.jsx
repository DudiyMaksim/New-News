import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Buttoncancle() {
  const navigate = useNavigate();

  const Clickt = () => {
    navigate('/news');
  };

  return (
    <Button variant="outlined" onClick={Clickt}>
      Cancel
    </Button>
  );
}
