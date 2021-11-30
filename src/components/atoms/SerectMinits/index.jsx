import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SerectMinits = ({initial, update}) => {
  const [value, setValue] = useState(initial)
  const minutes = [...Array(60)].map((_, i) => String(i));
  

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
        options={minutes}
     
        renderInput={(params) => <TextField {...params} label="分" />}
      />
  );
}

export default SerectMinits