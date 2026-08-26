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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { green } from "@mui/material/colors";


const Delete = () => {
  const [isClicked, setIsClicked] = useState(false);
  const MyParam = useParams()
  const MyId = MyParam.id
  const [message, setmessage] = useState([]);
  const [myData, setMyData] = useState({
    name: "",
    description: "",
    attendance: 0,
    city: "",
    country: "",
    league: "",
    characteristics: [],
  });
  console.log('MyData', myData)
  const navigate = useNavigate()

  const GetData = async () => {

    AxiosInstance.get(`footballclub/${MyId}/`).then((rest) => {
      setMyData(rest.data);
    });

  }

  useEffect(() => {
    GetData();
  }, []);

  const DeleteRecord = (event) => {
    event.preventDefault()
    AxiosInstance.delete(`footballclub/${MyId}/`)
      .then(() => {
        setmessage(
          <MyMessage
            messageText={'Data has been successfully deleted to the database'}
            messagecolor={'green'}
          />
        )
        setTimeout(() => {
          navigate('/')
        }, 1500);
      })
  }

  return (
    <div>
      <form onSubmit={DeleteRecord}>
      {message}
      <Box className="TopBar">

        <DeleteForeverIcon color="error" />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'Bold', flexGrow: 1, ml: 1, }}>
          Are u sure you want to delete this record
        </Typography>
        <QuestionMarkIcon sx={{
          border: 'solid #ffffff44 2px ',
          fontSize: '20px',
          borderSpacing: '4px',
          borderRadius: '10px'
        }} />

      </Box>
      <Box sx={{ mt: 1 }}>
        <Box className='Textbox ' sx={{
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}>
          <Box className="Textbox blinking" >
            You will be deleting te club records of {myData.name} from {myData.city}
          </Box>

          <Box className="submit-action">
              
              <Button
                type="submit"
                onClick={() => setIsClicked(true)}
                sx={{
                  width: '100%',
                  fontWeight: 'bold',
                  justifyContent: 'center',
                  bgcolor: isClicked ? 'green' : '#880404',
                }}
                variant="contained"
              >
                Delete
              </Button>
          </Box>
        </Box>

      </Box>
      </form>
    </div>
  );
};

export default Delete;
