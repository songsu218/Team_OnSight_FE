import React, { useState, useEffect } from "react";

import style from "../css/Challenge.module.css";
import "swiper/css";
import ChallengeBox from "../components/challenge/ChallengeBox";
import { Button, Container, Grid, Typography } from "@mui/material";

const Challenge = () => {
  const line = { border: "1px solid red" };
  return (
    <Container sx={{ border: "1px solid red", width: '100%'}}>
      <Grid Container display="flex" sx={{height: '50vh' , width: '100%', borderBottom: '1px solid black'}}>
        <Grid item sx={line}>
          <Typography>진행 중인 챌린지에요</Typography>
        </Grid>
        <Grid item xs></Grid>
        <Grid item sx={line}>
          <Button> 나의 챌린지 {">"}</Button>
        </Grid>
      </Grid>
      <Grid Container sx={{height: '50vh'}}>
        <Grid item xs={12} sx={line}>
          <Typography>지난 챌린지에요</Typography>
        </Grid>
      </Grid>
    </Container>
    // <main className={`${style.mw} ${style.container}`}>
    //   <div className={style.top_section}>
    //     <div className={`${style.inner_container}`}>

    //       <div className={style.inner_top}>
    //         <div className={`${style.subject}`}>진행 중인 챌린지에요</div>
    //         <button className={`${style.myCh}`}>나의 챌린지 {">"} </button>
    //       </div>
    //       <div className={style.inner_bottom}>
    //         <button className={style.leftButton} />
    //         <div className={style.inner_bottom_item}>
    //           <ChallengeBox isVisible = {true}></ChallengeBox>
    //         </div>
    //         <button className={style.rightButton} />
    //       </div>
    //     상단
    //     </div>
    //   </div>
    //   <div className={style.bottom_section}>
    //     <div className={`${style.inner_container}`}>
    //       하단
    //       <div className={style.inner_top}>
    //         <div className={`${style.subject}`}>지난 챌린지에요</div>
    //       </div>
    //       <div className={style.inner_bottom}>
    //         <button className={style.leftButton} />
    //         <div className={style.inner_bottom_item}>
    //           <ChallengeBox></ChallengeBox>
    //         </div>
    //         <button className={style.rightButton} />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};
export default Challenge;
