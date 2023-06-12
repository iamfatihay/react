import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from 'react';

const TextFieldComp = () => {

  let error1 = true;

  return (
    <div>
      <Container>
        <Typography variant='h4' align='center' color="error" >TEXT-FIELD (input)</Typography>
        <Box sx={{ mt: 4 }}>
          {/* margin='dense' her taraftan az bir margin verir */}
          <TextField margin='dense'
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            type='email'
            fullWidth
          />
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          {/* defaultta label input outline çizgisinde gelir, variant=filled diyerek label ı input alanına alabiliriz */}
          <TextField
            type='password'
            margin='normal'
            fullWidth
            error={error1}
            id="password"
            placeholder="password giriniz"
            helperText={error1 && "yanlis girdiniz"}
          />
          <FormControl fullWidth margin='normal' variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle color='error'/>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button fullWidth variant='contained' color='error' >SUBMIT</Button>
        </Box>
      </Container>
    </div>
  )
}

export default TextFieldComp