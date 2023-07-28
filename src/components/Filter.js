import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Results from "./Results";

const Filter = ({repos}) => {

const [dateFilter, setDateFilter] = useState()

  return (
      <>

    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Filter By Last Updated</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value={'1970-01-01'} control={<Radio />} onClick={e => console.log(e.target.value)}label="All" />
        <FormControlLabel value={'2023-01-01'} control={<Radio />} onClick={e => console.log(e.target.value)}label="2023" />
        <FormControlLabel value={'2022-01-01'} control={<Radio />} onClick={e => console.log(e.target.value)} label="2022" />
        <FormControlLabel value={'2021-01-01'} control={<Radio  />} onClick={e => console.log(e.target.value)} label="2021" />
      </RadioGroup>
    </FormControl>
    
   

    </>
  )
  
}

export default Filter