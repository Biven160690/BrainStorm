import React from 'react';

import { NavigateFunction, useNavigate } from 'react-router';

import { Button } from '@mui/material';

export const FormsButtons = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleClickGoBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Button type='button' color='primary' onClick={handleClickGoBack}>
        Cancel
      </Button>
      <Button type='submit' color='error'>
        Delete
      </Button>
    </React.Fragment>
  );
};
