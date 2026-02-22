import * as React from 'react';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput() {
  return <NumberInput aria-label="Quantity Input" step={1} min={1} max={10} />;
}

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'Cairo', sans-serif;
  font-weight: 400;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 17px;
  font-family: inherit;
  font-weight: 400;
  color: black;
  background: white;
  border: 3px solid #0F0F26;
  border-radius: 5px;
  margin: 0 8px;
  outline: 0;
  min-width: 0;
  width: 66px;
  height: 30px;
  text-align: center;

  &:hover {
    border-color: #0F0F26;
  }

  &:focus {
    border-color: #0F0F26;
    border: 3px solid #0F0F26;
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2px;
  box-sizing: border-box;
  line-height: 1;
  border: 1px solid;
  border-radius: 999px;
  border: #0F0F26 solid 3px;
  background: white;
  color: #0F0F26;
  width: 25px;
  height: 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: #0F0F26;
    border-color: #0F0F26;
    color: white;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);