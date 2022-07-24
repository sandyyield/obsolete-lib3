import { Tabs, Tab, AppBar, Grid, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import TabPanel from "../../components/TabPanel";
import { HomePage } from "../../contianer/HomePage";
import { Page1 } from "../../contianer/Page1";
import { Page2 } from "../../contianer/Page2";
import { Page3 } from "../../contianer/Page3";
import { Page4 } from "../../contianer/Page4";
import { Page5 } from "../../contianer/Page5";
import { Page6 } from "../../contianer/Page6";
import styles from "./style.module.css";

const Index = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e: any, value: React.SetStateAction<number>) =>
    setValue(value);
  const [language, setLanguage] = useState(0); //0:zh  1:en

  const logo = ["/img/logo.png", "/img/logo2.png"];
  const en = ["/img/en.png", "/img/cn.png"];

  const header = ['/img/headerNav0.png','/img/headerNav.png'] //后续改为 中文版

  const itemTexts = [
    // { index: 0, text:["首页" ,]},
    { index: 1, text: ["了解瀚铭", "ABOUT US"] },
    { index: 2, text: ["产品中心", ""] },
    { index: 3, text: ["市场应用", ""] },
    { index: 4, text: ["解决方案", ""] },
    { index: 5, text: ["生产研发", ""] },
    { index: 6, text: ["联系我们", ""] },
  ];

  const handleBackHome = () => setValue(0);

  const switchLanguage = () => {
    if (language === 0) {
      setLanguage(1);
    } else {
      setLanguage(0);
    }
  };

  return (
    <>
      <Box sx={{width:'100%'}}>
        <Grid container className={styles.headnav}>
          <>
            {/* <Grid item xs={3}>
            <Box
              className={styles.logo}
              sx={{ width: "100%", height: "100%" }}
              p={2}
              onClick={handleBackHome}
            >
              <img src={logo[language]} alt="" />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              style={{
                backgroundColor: "black",
              }}
            >
              {itemTexts.map((i) => (
                <Tab
                  key={i.index}
                  label={i.text[0]}
                  style={{ color: "white", height: "80px" }}
                />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={2}>
            <Box
              className={styles.switchencn}
              sx={{ width: "100%", height: "100%" }}
              p={2}
              onClick={switchLanguage}
            >
              <img src={en[language]} alt="" />
            </Box>
          </Grid> */}
          </>
        </Grid>
        <div style={{width:'100%'}}>
          <a href="#" className={styles.nav0} onClick={() => setValue(0)}/>
          <a href="#" className={styles.nav1} onClick={() => setValue(1)}/>
          <a href="#" className={styles.nav2} onClick={() => setValue(2)}/>
          <a href="#" className={styles.nav3} onClick={() => setValue(3)}/>
          <a href="#" className={styles.nav4} onClick={() => setValue(4)}/>
          <a href="#" className={styles.nav5} onClick={() => setValue(5)}/>
          <a href="#" className={styles.nav6} onClick={() => setValue(6)}/>
          <a href="#" className={styles.nav7} onClick={switchLanguage}/>
          <img src={header[language]} alt="" />
        </div>
        <TabPanel value={value} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Page1 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Page2 gotoPage={setValue} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Page3 />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Page4 />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Page5 />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Page6 />
        </TabPanel>
        <Box>
          <a href="#" onClick={() => setValue(1)} className={styles.h1}></a>
          <a href="#" onClick={() => setValue(2)} className={styles.h2}></a>
          <a href="#" onClick={() => setValue(3)} className={styles.h3}></a>
          <a href="#" onClick={() => setValue(4)} className={styles.h4}></a>
          <a href="#" onClick={() => setValue(5)} className={styles.h5}></a>
          <a href="#" onClick={() => setValue(6)} className={styles.h6}></a>
          <img src="/img/bottom.png" alt="" />
        </Box>
      </Box>
    </>
  );
};

export { Index as Home };
