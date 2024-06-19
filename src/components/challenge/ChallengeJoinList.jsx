import {
  Avatar,
  Checkbox,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CustomDatePicker from "./CustomDatePicker";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Typography } from "@mui/joy";

const ChallengeJoinList = (props) => {
  const { startDate, endDate, list } = {
    ...props,
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Grid item xs={5}>
          <CustomDatePicker
            label={"시작날짜"}
            setdate={startDate}
            readOnly={true}
          />
        </Grid>
        <Grid item xs={1} container justifyContent="center" alignItems="center">
          <ArrowForwardOutlinedIcon />
        </Grid>
        <Grid item xs={5}>
          <CustomDatePicker
            label={"종료날짜"}
            setdate={endDate}
            readOnly={true}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "1rem", marginLeft: "5rem" }}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "1.4rem",
            fontWeight: 700,
            lineHeight: "35.2px",
            textAlign: "left",
          }}
        >
          챌린지 참여자
        </Typography>
        <List
          dense
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                // secondaryAction={
                //   <Checkbox
                //     edge="end"
                //     onChange={handleToggle(value)}
                //     checked={checked.indexOf(value) !== -1}
                //     inputProps={{ 'aria-labelledby': labelId }}
                //   />
                // }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};
export default ChallengeJoinList;
