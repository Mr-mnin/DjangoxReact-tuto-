import TextField from '@mui/material/TextField';

export default function TextFields({ label }) {
    return (
        <TextField
            sx={{ width: '100%', bgcolor: '#0b1120 ' }}
            id="standard-basic"
           
            label={label}
            variant="outlined"
            fullWidth
        />
        
    );
}

