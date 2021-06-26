import useStyles from "../styles";
import { Select, MenuItem, InputLabel, FormHelperText } from '@material-ui/core';
import { useState } from "react";
import { statesData } from './statesdata';

const StateDropdown = (props) => {
  const classes = useStyles();
  const [selVal, setSelVal] = useState("TN");

  const handleDdlChangeEvent = (e) => {
    setSelVal(e.target.value);
    props.callbackValue(e.target.value)
  }

  const list = (statesData.states || []).map((state) =>
    <MenuItem key={state.code} value={state.code}>{state.name}</MenuItem>
  )

  return <>
    <InputLabel id="demo-simple-select-label" className={classes.label_font_size}>Select State </InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selVal}
      onChange={handleDdlChangeEvent}
      className={classes.spacing_left_3}
    >
      {list}
    </Select>
    <FormHelperText className={classes.label_font_size}>States and Union Territories of India</FormHelperText>
  </>
}

export default StateDropdown;