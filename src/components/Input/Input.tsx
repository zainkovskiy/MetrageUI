import React from 'react';

export interface InputProps {
  // onChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void,
}

const Input: React.FC<InputProps> = (props) => {
  // const { onChange } = props;
  const [value, setValue] = React.useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    // onChange && onChange(e.target.value);
  }
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default Input;