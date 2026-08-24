import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function Selectform({ label, options, value, name, onBlur, onChange, error, helperText }) {


    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
            <Select
                sx={{ bgcolor: '#0b1120 ' }}
                labelId={`${label}-select-label`}
                id={`${label}-select`}
                label={label}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                error={error}
                helperText={helperText}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
    );
} 
