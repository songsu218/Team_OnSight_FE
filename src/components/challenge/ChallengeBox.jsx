// import { Box } from "@mui/material";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { Button, Grid } from "@mui/material";
const ChallengeBox = (props) => {
  const { subjectList, detailList, srcList , isVisible  } = { ...props };

  const data = [
    {
      src: "/img/gyeonggi.png",
      title: "경기도 어찌구 챌린지",
      description: "경기 클라이밍장 이름",
    },
    {
      src: "/img/seoul.png",
      title: "서울 어찌구 챌린지",
      description: "서울 클라이밍장 이름",
    },
    {
      src: "/img/gangwon.png",
      title: "강원도 어찌구 챌린지",
      description: "강원 클라이밍장 이름",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        py: 1,
        overflow: "auto",
        width: "auto",
        minHeight: "140px",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item) => (
        <Card
          orientation="horizontal"
          size="sm"
          key={item.title}
          variant="outlined"
          sx={{ borderRadius: "1rem" }}
        >
          <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "26px",
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
          <AspectRatio ratio="1" sx={{ minHeight: 120, minWidth: 120 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Grid container sx={{ display: "flex", alignItems: "end" }}>
            <Grid item sx={{}}>
              { isVisible ? 
              <Button
                variant="contained"
                sx={{
                  height: "60px",
                  width: "100%",
                  borderRadius: "50%",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: "#000000",
                  backgroundColor: "#d3d3d3",
                  textTransform: "none",
                  padding: 0,
                }}
              >
                참가
              </Button>
              : ''
              }
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default ChallengeBox;
