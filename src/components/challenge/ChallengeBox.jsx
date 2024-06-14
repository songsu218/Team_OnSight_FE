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

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
const ChallengeBox = (props) => {
  const { dataLIst, takeButtonVisible, slidesPerViewCount } = {
    ...props,
  };
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
  const data = [
    {
      id: 1,
      src: "/img/gyeonggi.png",
      title: "경기도 어찌구 챌린지",
      description: "경기 클라이밍장 이름",
    },
    {
      id: 2,
      src: "/img/seoul.png",
      title: "서울 어찌구 챌린지",
      description: "서울 클라이밍장 이름",
    },
    {
      id: 3,
      src: "/img/gangwon.png",
      title: "강원도 어찌구 챌린지",
      description: "강원 클라이밍장 이름",
    },
  ];

  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);

  // const [swiper, setSwiper] = useState(null);
  // const [mainImageIndex, setMainImageIndex] = useState(0);

  // const swiperParams = {
  //   navigation : true,
  //   onSwiper : setSwiper,
  //   onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  // }

  return (
    <Container>
      <Grid container sx={{ Width: "100%" }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={2} sx={{ display: "flex", justifyContent: "right" }}>
            <IconButton
              aria-label="<"
              sx={{ width: "70px", height: "70px" }}
              onClick={goPrev}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={slidesPerViewCount}
              navigation
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              // {...swiperParams} ref={setSwiper}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card
                    orientation="horizontal"
                    size="sm"
                    key={item.title}
                    variant="outlined"
                    sx={{ borderRadius: "1rem" }}
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
                            {item.description}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs>
                        <AspectRatio
                          ratio="1"
                          sx={{ minHeight: 120, minWidth: 120 }}
                          onClick={()=>{debugger}}
                        >
                          <img
                            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.src}?h=120&fit=crop&auto=format`}
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
                      >
                        <Grid item>
                          {takeButtonVisible ? (
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
