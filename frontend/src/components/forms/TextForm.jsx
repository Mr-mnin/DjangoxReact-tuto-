import TextField from '@mui/material/TextField';

export default function TextFields({ label }) {
    return (
        <TextField
            id="standard-basic"
            sx={{ width: '100%' }}
            label={label}
            variant="outlined"
            fullWidth
        />
        
    );
}

