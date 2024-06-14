import React, { useState, useEffect, useRef } from "react";

import "swiper/css";
import ChallengeBox from "../components/challenge/ChallengeBox";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const Challenge = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "50vh",
          borderBottom: "1px solid black",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex", marginTop: "15vh" }}>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Grid item xs={3.5}></Grid>
            <Grid item xs>
              <Grid item xs={12} sx={{}}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "2.5rem",
                  }}
                >
                  진행 중인 챌린지에요
                </Typography>
              </Grid>
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
                {" "}
                나의 챌린지 {">"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs>
            <ChallengeBox
              takeButtonVisible={true}
              slidesPerViewCount={2}
            ></ChallengeBox>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: "50vh",
          marginBottom: "5vh",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex", marginTop: "10vh" }}>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Grid item xs={3.5}></Grid>
            <Grid item xs>
              <Grid item xs={12} sx={{}}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "2.5rem",
                  }}
                >
                  지난 챌린지에요
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={2} sx={{ display: "flex" }}>
            <Grid item xs={12} sx={{}}>
              <Grid item xs={3.5}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "start" }}>
          <Grid item xs>
            <ChallengeBox
              takeButtonVisible={false}
              slidesPerViewCount={2}
            ></ChallengeBox>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{display:'flex'}}>
          <Grid item xs>1</Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="+"
              sx={{ width: "70px", height: "70px"}}
              onClick={()=>{}}
            >
              <ControlPointOutlinedIcon sx={{ fontSize: '3rem' }}/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Challenge;
