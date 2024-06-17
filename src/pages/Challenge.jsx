import React, { useState, useEffect, useRef } from "react";

import "swiper/css";
import ChallengeBox from "../components/challenge/ChallengeBox";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { ch } from "../api";

const Challenge = () => {
  const [ongoingChallenges, setOngoingChallenges] = useState([]);
  const [pastChallenges, setPastChallenges] = useState([]);
  const test = () => {
    ch.chCurrentList(new Date())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(`${error}`);
      });
  };

  const data = [
    {
      id: 1,
      title: "경기도 어찌구 챌린지",
      center: "경기 클라이밍장 이름",
      date: "20240714",
      images: "/img/gyeonggi.png",
    },
    {
      id: 2,
      title: "서울 어찌구 챌린지",
      center: "서울 클라이밍장 이름",
      date: "20240715",
      images: "/img/seoul.png",
    },
    {
      id: 3,
      title: "경기2 어찌구 챌린지",
      center: "경기2 클라이밍장 이름",
      date: "20240715",
      images: "/img/gyeonggi.png",
    },
    {
      id: 4,
      title: "서울2 어찌구 챌린지",
      center: "서울2 클라이밍장 이름",
      date: "20240715",
      images: "/img/seoul.png",
    },
    {
      id: 5,
      images: "/img/gangwon.png",
      title: "강원도 어찌구 챌린지",
      date: "20240519",
      center: "강원 클라이밍장 이름",
    },
    {
      id: 6,
      images: "/img/gangwon.png",
      title: "강원도2 어찌구 챌린지",
      date: "20240519",
      center: "강원2 클라이밍장 이름",
    },
    {
      id: 7,
      images: "/img/gangwon.png",
      title: "강원도3 어찌구 챌린지",
      date: "20240519",
      center: "강원3 클라이밍장 이름",
    },
  ];

  useEffect(() => {
    const today = new Date();
    const formattedToday = `${today.getFullYear()}${(
      "0" +
      (today.getMonth() + 1)
    ).slice(-2)}${("0" + today.getDate()).slice(-2)}`;

    const ongoing = [];
    const past = [];

    data.forEach((challenge) => {
      if (challenge.date > formattedToday) {
        ongoing.push(challenge);
      } else {
        past.push(challenge);
      }
    });

    setOngoingChallenges(ongoing);
    setPastChallenges(past);
  }, []);
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
              showJoinButton={true}
              slidesPerViewCount={2}
              dataList={ongoingChallenges}
            ></ChallengeBox>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: "50vh",
          // paddingBottom:'1vh',
        }}
      >
        <Grid item xs={12} sx={{ display: "flex", marginTop: "2vh" }}>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Grid item xs={3.5}></Grid>
            <Grid item xs>
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
          <Grid item xs></Grid>
          <Grid item xs={2} sx={{ display: "flex" }}>
            <Grid item xs={12} sx={{}}>
              <Grid item xs={3.5}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs>
            <ChallengeBox
              showJoinButton={false}
              slidesPerViewCount={2}
              dataList={pastChallenges}
            ></ChallengeBox>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid item xs></Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="+"
              sx={{ width: "70px", height: "70px" }}
              onClick={() => {}}
            >
              <ControlPointOutlinedIcon sx={{ fontSize: "3rem" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Challenge;
