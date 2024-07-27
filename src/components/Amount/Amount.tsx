import { Container, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

/**
 * Amount props
 *
 * @interface
 */
interface AmountProps {
  amount: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  symbol: string | undefined;
}

/**
 * Amount component
 *
 * @type AmountProps
 * @component
 */
const Amount: React.FC<AmountProps> = ({ amount, handler, symbol }) => {
  return (
    <Container maxWidth="sm">
      <TextField
        fullWidth
        inputProps={{ inputMode: 'decimal' }}
        label="Amount"
        variant="outlined"
        onChange={handler}
        value={amount}
        InputProps={{
          startAdornment: symbol ? (
            <InputAdornment position="start">{symbol}</InputAdornment>
          ) : null,
        }}
      />
    </Container>
  );
};

export default Amount;
