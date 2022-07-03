import { Box } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'
import { Banner } from '../../components/Banner'


const mainBoxStyle = { height: '7600px', width: '1920', background: '#000000' }

const productTextStyle: CSSProperties = {
    width: '232px',
    height: '112px',
    fontSize: '60px',
    fontFamily: 'Source Han Sans CN',
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: '60px',
}

const Index = () => {
    return (
        <Box style={mainBoxStyle}>
            <Banner />
            <div style={productTextStyle}>
                {'产品应用PRODUCT'}
            </div>
        </Box>
    )
}

export { Index as HomePage }