import React from "react";
import {Stack,Button} from '@mui/material';
const MaterialUiExample = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default MaterialUiExample;
