import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields({label, rows}) {
  return (
    <Box 
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '20vw' } }}
      noValidate
      autoComplete="off"
    >
      <div>
              <TextField
                  id="standard-multiline-static"
                  label={label}
                  multiline
                  rows={rows}
                  defaultValue="Default Value"
                  variant="standard"
              />
        
      
      </div>
    </Box>
  );
}
