
import React, { useEffect, useState } from "react";
import AxiosInstance from "./Axios.jsx";
  import { Box, Typography } from "@mui/material"
  import TextField from './forms/TextForm';
  import Selectform from './forms/SelectForm';
  import AddBoxIcon from '@mui/icons-material/AddBox';
  import MultiSelectForm from './forms/MultiSelectForm';
  import MultilineTextFields from "./forms/DescriptionForm.jsx";
  import Button from '@mui/material/Button';
  import { useFormik } from 'formik'
  import * as yup from 'yup'
  import MyMessage from "./forms/Message.jsx";
  import { useNavigate, useParams } from 'react-router-dom'


  const Edit = () => {
    const MyParam = useParams()
    const MyId = MyParam.id
    
    const [countries, setCountries] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [message, setmessage] = useState([]);
    const [myData, setMyData] = useState({
      name: "",
      description: "",
      attendance:0,
      city: "",
      country: "",
      league: "",
      characteristics: [],
    });
    console.log('MyData', myData)
    const navigate = useNavigate()

    




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

      AxiosInstance.get(`footballclub/${MyId}/`).then((rest) => {
        setMyData(rest.data);
      });
      
    }

      useEffect(() => {
        GetData();
      }, []);
    
      const valdationschema = yup.object({
        name: yup
          .string("The name must be text")
          .required("The name is required"),
        description: yup
          .string("The description must be text")
          .required("The description is required"),
        attendence: yup
          .number("The atendence must be in numbers")
          .required("The atendence is required"),
        characteristics: yup
          .array()
          .required("Atleast 1 characteristic is required")
          .min(1, "Select atleast 1 characteristic")


      })

      const formik = useFormik({
        initialValues: {
          name: myData.name,
          description: myData.description,
          attendence: myData.attendence,
          city: myData.city,
          country: myData.country,
          league: myData.league,
          characteristics: myData.characteristics,
        },
        enableReinitialize:true,
        validationSchema: valdationschema,

        onSubmit: (values) => {
          AxiosInstance.put(`footballclub/${MyId}/`, values)
            .then(() => {
              setmessage(
                <MyMessage
                  messageText={'Data has successfully got updated to the database'}
                  messagecolor={'black'}
                />
              )
              setTimeout(() => {
                navigate('/')
              }, 1500);
            })

        },
      })

      console.log('Form values', formik.values)

      return (

        <div>
          <Box className="TopBar">
            <AddBoxIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1, }}>
              Edit info's of {formik.values.name}
            </Typography>
          </Box>
          <Box >
            {message}
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
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                label={"City"}
                name='city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onblur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
              <Selectform
                label={'Leagues'}
                options={leagues}
                name='league'
                value={formik.values.league}
                onChange={formik.handleChange}
                onblur={formik.handleBlur}
                error={formik.touched.league && Boolean(formik.errors.league)}
                helperText={formik.touched.league && formik.errors.league}
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
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />

              <TextField
                label={'Attendence'}
                name='attendence'
                value={formik.values.attendence}
                onChange={formik.handleChange}
                onblur={formik.handleBlur}
                error={formik.touched.attendence && Boolean(formik.errors.attendence)}
                helperText={formik.touched.attendence && formik.errors.attendence}
              />

              <MultiSelectForm
                label={'Charateristics'}
                options={characteristics}
                name='characteristics'
                value={formik.values.characteristics}
                onChange={formik.handleChange}
                onblur={formik.handleBlur}
                error={formik.touched.characteristics && Boolean(formik.errors.characteristics)}
                helperText={formik.touched.characteristics && formik.errors.characteristics}
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
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}

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
                Update
              </Button>
            </Box>
          </Box>




        </div>
      );
    };
  
  export default Edit;
