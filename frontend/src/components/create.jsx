import { useState, useEffect } from "react";
import AxiosInstance from "./Axios.jsx";
import { Box, Typography } from "@mui/material"
import TextField from './forms/TextForm';
import Selectform from './forms/SelectForm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MultiSelectForm from './forms/MultiSelectForm';
import MultilineTextFields from "./forms/DescriptionForm.jsx";
import Button from '@mui/material/Button';
import { useformik } from 'formik'




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

  const formik = useformik({
    initialValues: {
      name: "",
      description: "",
      attendence: "",
      city: "",
      country: "",
      league: "",
      characteristics: [],
    }
  })

  console.log('Form values', formik.values)

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
            name='name'
            value={formik.value.name}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <TextField
            label={"City"}
            name='city'
            value={formik.value.city}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <Selectform
            label={'Leagues'}
            options={leagues}
            name='league'
            value={formik.value.league}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />

          <Box >
            <Button
              sx={{
                width: '314%',
                fontWeight: 'Bold',
                justifyContent: 'flex-start',
              }}
              variant="contained"
            >
              <span style={{ width: '500%', textAlign: 'center' }}>Submit</span>
            </Button>
          </Box>
        </Box>
        <Box className='formarea'>

          <Selectform
            label={'Country'}
            options={countries}
            name='country'
            value={formik.value.country}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />

          <TextField
            label={'Attendence'}
            name='attendence'
            value={formik.value.attendence}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />

          <MultiSelectForm
            label={'Charateristics'}
            options={characteristics}
            name='characteristics'
            value={formik.value.characteristics}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
        </Box>
        <Box className='formarea'>
          <MultilineTextFields
            label={'Deacription'}
            rows={10}
            
          />
        </Box>
      </Box>




    </div>
  );
};

export default Create;
