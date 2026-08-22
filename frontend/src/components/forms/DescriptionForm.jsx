import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields({ label, rows, value, name, onblur, onChange }) {
  return (
    <Box
      component="form"
      className="description-form"
      noValidate
      autoComplete="off"
      sx={{ bgcolor: '#0b1120 ' }}
    >
      <div>
        <TextField
          id="standard-multiline-static"
          label={label}
          multiline
          rows={rows}
          variant="outlined"
          fullWidth="true"
          value={value}
          name={name}
          onChange={onChange}
          onblur={onblur}

        />


      </div>
    </Box>
  );
}
