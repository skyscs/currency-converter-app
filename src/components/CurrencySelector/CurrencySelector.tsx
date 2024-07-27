import React from 'react';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

/**
 * Currency selector props
 *
 * @interface
 */
interface CurrencySelectorProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
  exclude: string;
  label: string;
}

/**
 * Currency selector component
 *
 * @type CurrencySelectorProps
 * @component
 */
const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  value,
  onChange,
  options,
  exclude,
  label,
}) => {
  return (
    <Container maxWidth="sm">
      <Box>
        <FormControl fullWidth>
          <InputLabel id="select-label">{label}</InputLabel>
          <Select labelId="select-label" value={value} onChange={onChange} label={label}>
            {options
              .filter((option) => option.value !== exclude)
              .map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};

export default CurrencySelector;
