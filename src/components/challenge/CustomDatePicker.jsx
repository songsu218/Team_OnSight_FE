import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const parseDateString = (dateString) => {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6) - 1;
  const day = dateString.substring(6, 8);
  return new Date(year, month, day);
};

const CustomDatePicker = (props) => {
  const { label,setdate , disabled , readOnly } = {
    ...props,
  };
  const [selectedDate, setSelectedDate] = useState(parseDateString(setdate));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!readOnly) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={
          <TextField
            label={label}
            variant="outlined"
            onClick={handleOpen}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleOpen} disabled={disabled}>
                    <CalendarTodayIcon />
                  </IconButton>
                </InputAdornment>
              ),
			  readOnly: readOnly
            }}
			disabled={disabled}
          />
        }
        open={open}
        onClickOutside={handleClose}
        onSelect={handleClose}
        dateFormat="yyyy/MM/dd"
		disabled={disabled}
      />
    </Grid>
  );
};

export default CustomDatePicker;
