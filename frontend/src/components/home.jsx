import "./style.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Typography } from "@mui/material"

const Home = () => {
  return (
    <div >
      <Box className="TopBar">
        <AddBoxIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1, }}>
          Create a Club
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
