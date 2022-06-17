import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const mainDivStyle = {
    width: "90%",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,.2)"
}

function MUI() {
  return (
    <div style={mainDivStyle}>
        <Button variant="contained">Hello World</Button>
        <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={()=>("test")}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
        <p>just a p.</p>
    </div>
    
  );
}

export default MUI