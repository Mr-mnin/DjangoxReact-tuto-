import { useState, useEffect } from "react";
import AxiosInstance from "./Axios.jsx";
import { Box, Typography } from "@mui/material"
import TextField from './forms/TextForm';
import Selectform from './forms/SelectForm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MultiSelectForm from './forms/MultiSelectForm';
import MultilineTextFields from "./forms/DescriptionForm.jsx";



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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1, }}>
          Create a Club
        </Typography>
      </Box>

      <Box className="formbox"
        sx={{
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}>
        <Box className='formarea'>
          <TextField
            label={"Club name"}
          />
          <TextField
            label={"City"}
          />
          <Selectform
            label={'Leagues'}
            options={leagues}
          />
        </Box>
        <Box className='formarea'>
          
            <Selectform
              label={'Country'}
              options={countries}
          />

          <TextField
            label={'Atendance'}
          />

          <MultiSelectForm
            label={'Charateristics'}
            options={characteristics}
            />
        </Box>
        <Box className='formarea'>
          <MultilineTextFields
            label={'Deacription'}
            rows={9}
          />
        </Box>
        </Box>

      


    </div>
  );
};

export default Create;
