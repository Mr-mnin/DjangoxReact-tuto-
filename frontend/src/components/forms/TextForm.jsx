import TextField from '@mui/material/TextField';

export default function TextFields({ label, value, name, onBlur, onChange, error, helperText  }) {
    return (
        <TextField
            sx={{ width: '100%', bgcolor: '#0b1120 ' }}
            id="standard-basic"
            label={label}
            variant="outlined"
            fullWidth='true'
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}

        />

    );
}

