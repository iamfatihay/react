import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { kullaniciSil } from '../features/yetkiSlice';


export default function Navbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleLogout = () => {
    dispatch(kullaniciSil())
    navigate("/login")
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Clarusway News
          </Typography>
          <Button color="inherit" onClick={handleLogout} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}