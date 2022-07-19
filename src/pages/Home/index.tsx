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

  const itemTexts = [
    { index: 0, text: "首页" },
    { index: 1, text: "了解瀚铭" },
    { index: 2, text: "产品中心" },
    { index: 3, text: "市场应用" },
    { index: 4, text: "解决方案" },
    { index: 5, text: "产品研发" },
    { index: 6, text: "联系我们" },
  ];

  return (
    <>
      <Box>
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
              label={i.text}
              style={{ color: "white", height: "80px" }}
            />
          ))}
        </Tabs>
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
          <img src="/img/bottom.jpg" alt="" />
        </Box>
      </Box>
    </>
  );
};

export { Index as Home };
