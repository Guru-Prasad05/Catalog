import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Box,
  Typography,
  Avatar,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isPlaying) {
      intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % data.length;
        setCurrentIndex(nextIndex);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, currentIndex, data.length]);

  const handleNextClick = () => {
    const box = document.querySelector(".box");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + 150;
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(false);
    currentIndex === data.length - 1 &&
      (box.scrollLeft = box.scrollLeft - width);
  };

  const handlePrevClick = () => {
    const box = document.querySelector(".box");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - 150;
    const prevIndex = (currentIndex + data.length - 1) % data.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(false);
    currentIndex === 0 && (box.scrollLeft = box.scrollLeft + width);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item sx={{ display: "flex" }}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "700px",
              borderRadius: "30px",
            }}
          >
            <CardMedia
              component="img"
              height="500"
              image={data[currentIndex].image}
            />
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              ml: "10px",
              bgcolor: "transparent",
              p: "10px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h2" sx={{ color: "#707070" }}>
              {data[currentIndex].title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#00000029", textAlign: "left" }}
            >
              {data[currentIndex].description}
            </Typography>
          </Box>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
          <div
            className="box"
            style={{
              position: "relative",
              width: "600px",
              marginTop: "20px",
              marginLeft: "180px",
              display: "flex",
              overflowX: "hidden",
              scrollBehavior: "smooth",
              zIndex: "1",
            }}
          >
            {data.map((data, index) => (
              <Grid item key={index}>
                <Button
                  sx={{ width: "150px" }}
                  onClick={() => handleIndicatorClick(index)}
                >
                  <CardMedia
                    component="img"
                    height="90"
                    image={data.image}
                    sx={[
                      { filter: "grayscale(1)", borderRadius: "20px" },
                      currentIndex === index && {
                        filter: "grayscale(0)",
                      },
                    ]}
                  />
                </Button>
              </Grid>
            ))}
          </div>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              width: "750px",
              transform: "translate(23.5%,50%)",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{ fontSize: "30px", fontWeight: "600" }}
              onClick={handlePrevClick}
            >
              &lt;
            </Button>
            <Button
              sx={{ fontSize: "30px", fontWeight: "600" }}
              onClick={handleNextClick}
            >
              &gt;
            </Button>
          </Box>
          <Avatar
            sx={{
              bgcolor: "#25BEDA",
              display: "flex",
              justifyContent: "center",
              left: "200px",
              top: "50px",
            }}
          >
            <IconButton
              sx={{ color: "white", width: "30px" }}
              onClick={handlePlayPauseClick}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Avatar>
        </Grid>
      
    </div>
  );
};

export default Carousel;
