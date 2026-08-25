import "./style.css";
import { useEffect, useMemo, useState } from "react";
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { Link } from "react-router-dom";
import { Box, Chip, IconButton, Typography } from "@mui/material"
import { MaterialReactTable } from "material-react-table";
import AxiosInstance from "./Axios.jsx";
import DrawIcon from '@mui/icons-material/Draw';

const Home = () => {
  const [MyData, setMyData] = useState([]);

  const GetData = async () => {
    AxiosInstance.get('footballclub/').then((rest) => {
      setMyData(rest.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name'
      },
      {
        accessorKey: 'country_details.name',
        header: 'Country'
      },
      {
        accessorKey: 'league_details.name',
        header: 'League'
      },
      {
        accessorKey: 'city',
        header: 'City'
      },
      {
        accessorKey: 'attendence',
        header: 'Attendence'
      },
      {
        accessorKey: 'characteristic_names',
        header: 'Characteristic',
        Cell: ({ cell }) => (
          <div style={{display:'flex', gap:'8px,', flexWrap:'wrap',mt:1}}>
            {
              cell.getValue()?.map((char, index) => (
                <Chip
                  key={index} 
                  label={char}
                />
              ))
            }
          </div>
        )

      },
    ],
    [],
  );

  return (
    <div>
      <Box className="TopBar">
        <CalendarViewMonthIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1, }}>
          View all clubs
        </Typography>
      </Box>
      <MaterialReactTable
        columns={columns}
        data={MyData}
        enableRowActions
        renderRowActions={({ row }) => (
          <Box sx={{display:'flex', flexWrap:'nowrap', gap: '8px'}}>
            <IconButton
              component={Link}
              to={`e/${row.original.id}`}
              >
              <DrawIcon color="primary"/>
            </IconButton>
          </Box>
        )}
      />
    </div>
  );
};


export default Home;
