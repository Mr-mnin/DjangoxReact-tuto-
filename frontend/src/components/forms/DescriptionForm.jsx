import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields({label, rows}) {
  return (
    <Box 
      component="form"
      className="description-form"
      noValidate
      autoComplete="off"
    >
      <div>
              <TextField
                  id="standard-multiline-static"
                  label={label}
                  multiline
                  rows={rows}
                    variant="outlined"
                    fullWidth
              />
        
      
      </div>
    </Box>
  );
}
