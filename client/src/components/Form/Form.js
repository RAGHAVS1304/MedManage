import React from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { rootStyles, paperStyles, formStyles, fileInputStyles, buttonSubmitStyles } from './styles';

const Form = () => {
  const theme = useTheme();

  return (
    <Container>
      <Paper css={paperStyles(theme)} elevation={3}>
        <form css={formStyles}>
          <TextField className={rootStyles} />
          {/* Other form elements */}
          <Button className={buttonSubmitStyles}>Submit</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
