import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SerectHour = ({initial, update}) => {
  const [value, setValue] = useState(String(initial))
  const hours = [...Array(24)].map((_, i) => String(i));

  useEffect(() => {
    setValue(String(initial))
  }, [initial])

  const handleChange = (e, newValue) => {
    setValue(newValue)
    update(newValue)
  }

  return (
      <Autocomplete
        sx={{ minWidth: 100}}
        value={value}
        onChange={handleChange}
        id="controllable-states-demo"
        options={hours}

        renderInput={(params) => <TextField {...params} label="時" />}
      />
  );
}

export default SerectHour