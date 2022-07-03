import React from 'react'
import './style.css'

const backStyle = {
    width: '1920px',
    height: '80px',
    background: '#000000'
}

const Index = () => {

    const context = '首页                了解瀚铭                产品中心                市场应用                解决方案                生产研发                联系我们';
    return (
        <div className="main">
            <div className="text">
                {context}
            </div>
        </div>
    )
}

export { Index as Nav }