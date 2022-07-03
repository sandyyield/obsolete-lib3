import { Tabs, Tab, AppBar, Grid, Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner';
import TabPanel from '../../components/TabPanel';
import { HomePage } from '../../contianer/HomePage';
import { Page6 } from '../../contianer/Page6';


const Index = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e: any, value: React.SetStateAction<number>) => setValue(value);

    const itemTexts = [
        { index: 0, text: '首页' },
        { index: 1, text: '了解瀚铭' },
        { index: 2, text: '产品中心' },
        { index: 3, text: '市场应用' },
        { index: 4, text: '解决方案' },
        { index: 5, text: '产品研发' },
        { index: 6, text: '联系我们' },
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
                        backgroundColor: 'black',
                    }}
                >
                    {itemTexts.map(i => (<Tab key={i.index} label={i.text} style={{ color: 'white', height: '80px' }} />))}
                </Tabs>
                <TabPanel value={value} index={0}>
                    <HomePage />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Page Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Page Three
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Page6 />
                </TabPanel>
            </Box>


        </>

    )
}

export { Index as Home }