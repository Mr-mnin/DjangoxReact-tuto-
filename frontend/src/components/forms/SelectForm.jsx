import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectform({ label, options, value, name, onBlur, onChange }) {


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
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
} 
