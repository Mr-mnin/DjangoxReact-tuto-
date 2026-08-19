import { useState, useEffect } from "react";
import AxiosInstance from "./Axios.jsx";
import { Box, Typography } from "@mui/material"
import TextField from './forms/TextForm';
import Selectform from './forms/SelectForm';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Create = () => {
  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  console.log(countries, leagues, characteristics);

  const GetData = async () => {
    AxiosInstance.get('countries/').then((rest) => {
      setCountries(rest.data);
    });

    AxiosInstance.get('leagues/').then((rest) => {
      setLeagues(rest.data);
    });

    AxiosInstance.get('characteristics/').then((rest) => {
      setCharacteristics(rest.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (

    <div>
      <Box className="TopBar">
        <AddBoxIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          Create a Club
        </Typography>
      </Box>

      <Box className="formbox"
        sx={{
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      }}>
      
        <Box
          className="formarea"
          
        >
          <TextField label="Club Name" />
        </Box>

        <Box className="formarea">
          <TextField label="City" />
        </Box>

        <Box className="formarea">
          <Selectform label="League" options={leagues} />
        </Box>

        <Box
          className="formarea"
         
        >
          <Selectform label="Country" options={countries} />
        </Box>

        <Box className="formarea">
          <TextField label="Attendance" />
        </Box>
      </Box>

      
           </div>
  );
};

export default Create;
