import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    slotProps: {
        paper: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    },
};





export default function MultiSelectForm({ label, options, value, name, onBlur, onChange }) {
    const theme = useTheme();

    const handleDelete = (valueToDelete) => {
        const newValue = value.filter((v) => v !== valueToDelete);
        onChange({
            target: {
                name,
                value: newValue,
            },
        });
    };

    return (
        <div>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    sx={{ bgcolor: '#0b1120 ' }}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={value}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    input={<OutlinedInput id="select-multiple-chip" label={label} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={options.find(option => option.id === value)?.name}
                                    onDelete={() => handleDelete(value)}
                                    onMouseDown={(event) => event.stopPropagation()}
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.id}
                            value={option.id}

                        >
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}