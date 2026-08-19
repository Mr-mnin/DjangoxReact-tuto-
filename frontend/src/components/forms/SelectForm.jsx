import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectform({ label, options }) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth variant="standard">
            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
            <Select
                labelId={`${label}-select-label`}
                id={`${label}-select`}
                value={value}
                onChange={handleChange}
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
