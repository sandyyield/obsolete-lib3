import { Box } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import { Banner } from "../../components/Banner";

const mainBoxStyle = { height: "7600px", width: "1920", background: "#000000" };

const productTextStyle: CSSProperties = {
  width: "232px",
  height: "112px",
  fontSize: "60px",
  fontFamily: "Source Han Sans CN",
  fontWeight: "bold",
  color: "#FFFFFF",
  lineHeight: "60px",
};

const imgs = [
  "/page0/page0_1.jpg",
  "/page0/page0_2.jpg",
  "/page0/page0_3.jpg",
  "/page0/page0_4.jpg",
  "/page0/page0_5.jpg",
  "/page0/page0_6_01.jpg",
  // "/page0/page0_7.jpg",
];

const Index = () => {
  return (
    <>
      {/* <Box style={mainBoxStyle}> */}
        <Banner />
      {/* </Box> */}
      {imgs.map((i) => (
        <img src={i} alt="" />
      ))}
    </>
  );
};

export { Index as HomePage };
