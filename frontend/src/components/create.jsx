import { useState, useEffect } from "react";
import AxiosInstance from "./Axios.jsx";
import { Box, Typography } from "@mui/material"
import TextField from './forms/TextForm';
import Selectform from './forms/SelectForm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MultiSelectForm from './forms/MultiSelectForm';
import MultilineTextFields from "./forms/DescriptionForm.jsx";
import Button from '@mui/material/Button';
import { useFormik } from 'formik'




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

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      attendence: "",
      city: "",
      country: "",
      league: "",
      characteristics: [],
    },
    onSubmit: (values) => {
      AxiosInstance.post('footballclub/', values)
        .then(() => {
          console.log('Submitted');
          
        })
        
    },
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

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        className="formbox"
        sx={{
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}>
        <Box className='formarea'>
          <TextField
            label={"Club name"}
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <TextField
            label={"City"}
            name='city'
            value={formik.values.city}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <Selectform
            label={'Leagues'}
            options={leagues}
            name='league'
            value={formik.values.league}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
        </Box>
        <Box className='formarea'>

          <Selectform
            label={'Country'}
            options={countries}
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />

          <TextField
            label={'Attendence'}
            name='attendence'
            value={formik.values.attendence}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />

          <MultiSelectForm
            label={'Charateristics'}
            options={characteristics}
            name='characteristics'
            value={formik.values.characteristics}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
        </Box>
        <Box className='formarea' sx={{
          flexDirection: 'none',

        }}>
          <MultilineTextFields
            label={'Deacription'}
            rows={10}
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        <Box className="submit-action">
          <Button
            type="submit"
            sx={{
              width: '100%',
              fontWeight: 'bold',
              justifyContent: 'center',
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>




    </div>
  );
};

export default Create;