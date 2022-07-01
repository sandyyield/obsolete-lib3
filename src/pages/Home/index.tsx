import { Tabs, Tab, AppBar, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


const Index = () => {

    const [value, setValue] = useState(0);

    const handleChange = (e: any, value: React.SetStateAction<number>) => setValue(value);

    useEffect(() => {
        console.log('value', value)
    }, [value])


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
            <Grid container >
                <Grid item xs={12} >
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
                        {itemTexts.map(i => (<Tab key={i.index} label={i.text} style={{ color: 'white' }} />))}
                    </Tabs>
                </Grid>
            </Grid>
        </>

    )
}

export { Index as Home }