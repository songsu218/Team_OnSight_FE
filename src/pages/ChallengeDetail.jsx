import { Typography } from "@mui/joy";
import { Grid, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import ChallengeBox from "../components/challenge/ChallengeBox";
import "react-datepicker/dist/react-datepicker.css";
import ChallengeJoinList from "../components/challenge/ChallengeJoinList";
const ChallengeDetail = () => {
  const { challenge_id, challenge_name } = useParams();
  const [showJoinView, setShowJoinView] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title1, setTitle1] = useState([]);
  const location = useLocation();
  const detailData = [location.state.detailData || {}];
  const today = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}${month}${day}`;
  };

  useEffect(() => {
    const checkDate = () => {
      if (today() > detailData[0].date) {
        setShowJoinView(false);
        setTitle1("지난 챌린지 : ");
      } else if (today() <= detailData[0].date) {
        setShowJoinView(true);
        setTitle1("진행 중인 챌린지 : ");
      } else {
        console.log("몰?루");
      }
    };
    checkDate();
  }, [detailData]);

  return (
    <>
      <Grid
        container
        sx={{
          height: "45vh",
          // border: "1px solid red",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex", marginTop: "10vh" }}>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Grid item xs={3.5}></Grid>
            <Grid item xs={12} sx={{}}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "2.5rem",
                }}
              >
                {title1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "2.5rem",
                }}
              >
                {challenge_name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={2} sx={{ display: "flex" }}>
            <Grid item xs={12} sx={{}}>
              <Grid item xs={3.5}></Grid>
              <Button
                sx={{
                  fontfamily: "Roboto",
                  fontstyle: "normal",
                  fontsize: "2rem",
                  color: "#000000",
                }}
              >
                나의 챌린지 {">"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={3.5}></Grid>
          <Grid item xs={4.3}>
            <ChallengeBox
              showJoinButton={showJoinView}
              hideslideButton={true}
              slidesPerViewCount={1}
              dataList={detailData}
            ></ChallengeBox>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: "55vh",
          // border: "1px solid red",
        }}
      >
        <Grid item xs={4}>
          <ChallengeJoinList
            startDate={detailData[0].date}
            endDate={detailData[0].date}
          ></ChallengeJoinList>
        </Grid>
        <Grid item xs={8} sx={{display:'flex' ,justifyContent:"center", alignItems:"center"}}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "2.5rem",
            }}
          >
            집계는 챌린지가 끝난후에 진행되요.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ChallengeDetail;
