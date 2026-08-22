import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields({ label, rows, value, name, onBlur, onChange }) {
  return (
    <Box
      component="form"
      className="description-form"
      noValidate
      autoComplete="off"
      sx={{ bgcolor: '#0b1120 ', width: '100%' }}
    >
      <div style={{ width: '100%' }}>
        <TextField
          className='des'
          id="standard-multiline-static"
          label={label}
          multiline
          rows={rows}
          variant="outlined"
          fullWidth
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}

        />


      </div>
    </Box>
  );
}