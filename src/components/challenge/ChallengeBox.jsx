import React, { useRef, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { Button, Container, Grid, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useNavigate } from "react-router-dom";

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
const ChallengeBox = (props) => {
  const { dataList, showJoinButton, hideslideButton, slidesPerViewCount } = {
    ...props,
  };
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleCardClick = (item) => {
    navigate(`/challenge/${item.id}/${item.title}`, { state: { detailData:item } });
  };

  return (
    <Container>
      <Grid container sx={{ Width: "100%" }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={2} sx={{ display: "flex", justifyContent: "right" }}>
            <IconButton
              aria-label="<"
              sx={{ width: "70px", height: "70px" }}
              onClick={goPrev}
              hidden={hideslideButton}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={slidesPerViewCount}
              // navigation
              navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              
              // {...swiperParams} ref={setSwiper}
            >
              {dataList.length == 0 ? '' : dataList.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card
                    orientation="horizontal"
                    size="sm"
                    key={item.title}
                    variant="outlined"
                    sx={{ borderRadius: "1rem" }}
                    onClick={()=> handleCardClick(item)}
                  >
                    <Grid container>
                      <Grid item xs={7}>
                        <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                          <Typography
                            sx={{
                              fontFamily: "Roboto",
                              fontSize: "1.9rem",
                              fontWeight: 700,
                              lineHeight: "35.2px",
                              textAlign: "left",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            level="body-sm"
                            sx={{
                              fontFamily: "Roboto",
                              fontStyle: "nomal",
                              fontWeight: 700,
                              textAlign: "left",
                            }}
                          >
                            {item.center}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs>
                        <AspectRatio
                          ratio="1"
                          sx={{ minHeight: 120, minWidth: 120 }}
                        >
                          <img
                            srcSet={`${item.images}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.images}?h=120&fit=crop&auto=format`}
                            alt={item.title}
                          />
                        </AspectRatio>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        sx={{
                          display: "flex",
                          alignItems: "end",
                          justifyContent: "flex-end",
                        }}
                        onClick={(e) => {debugger; e.stopPropagation();}}
                      >
                        <Grid item>
                          {showJoinButton ? (
                            <Button
                              variant="contained"
                              sx={{
                                height: "50px",
                                width: "100%",
                                borderRadius: "50%",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "1.4rem",
                                color: "#000000",
                                backgroundColor: "#d3d3d3",
                                textTransform: "none",
                                padding: 0,
                              }}
                            >
                              참가
                            </Button>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item xs={2} sx={{}}>
            <IconButton
              aria-label=">"
              sx={{ width: "70px", height: "70px" }}
              onClick={goNext}
              hidden={hideslideButton}
            >
              <ArrowForwardIosOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChallengeBox;
