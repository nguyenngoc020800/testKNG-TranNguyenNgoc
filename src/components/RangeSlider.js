import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import style from "styled-components";

const FormSymbol = style.div`
position:absolute;
top:33px;
right:19px;
z-index:1;
`;

const Input = styled(MuiInput)`
  width: 100%;
`;

export default function RangeSlider() {
  const [value2, setValue2] = React.useState(100);

  const handleSliderChange = (event, newValue) => {
    setValue2(newValue);
  };

  const handleInputChange = (event) => {
    setValue2(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value2 < 0) {
      setValue2(0);
    } else if (value2 > 1000) {
      setValue2(1000);
    }
  };

  return (
    <Box sx={{ width: "90%", margin: "0 auto", position: "relative" }}>
      <Typography id="input-slider" gutterBottom sx={{ textAlign: "left" }}>
        <span>
          Donate Us<span className="text-danger">*</span>
        </span>
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value2 === "number" ? value2 : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="success"
            min={0}
            max={1000}
          />
        </Grid>
        <Grid item>
          <Input
            value={value2}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 0,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
          <FormSymbol>$</FormSymbol>
        </Grid>
      </Grid>
    </Box>
  );
}
