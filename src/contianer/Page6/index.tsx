import { Button } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { useState } from "react"
import { FormInput } from "../../components/FormInput"
import './style.css'

const flexStyle: CSSProperties = {
    width: '1920px',
    height: `${5000 - 80}px`,
    display: 'flex',
    flexDirection: 'column',
}

const bannerStyle: CSSProperties = {
    width: '1918px',
    height: '800px',
    backgroundColor: 'red',
}

const formStyle: CSSProperties = {
    backgroundColor: '#EAEAEA',
    width: '100%',
    height: '100%',
}

//提交表单 css
const formFlexStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '1560px',
    marginLeft: '180px',
    justifyContent: 'space-between',
    marginTop: '120px'

}



const Index = () => {
    const [formInfo, setFormInfo] = useState(['', '', '', ''])

    const handleSubmit = () => {
        console.log(formInfo);
        //fetch todo...
    }

    return (
        <div style={flexStyle}>
            <div style={bannerStyle}>
                <img />
            </div>
            <div style={formStyle}>
                <div className="title">
                    服务客户
                </div>
                <div className="form-title">
                    在线提交您的需求
                </div>
                <div className="">
                    <div style={formFlexStyle}>
                        <FormInput title={"您的姓名:"} placeholder={"请输入您的名字"} formInfo={formInfo} setFormInfo={setFormInfo} index={0} />
                        <FormInput title={"您的电话/手机:"} placeholder={"请输入您的电话/手机"} formInfo={formInfo} setFormInfo={setFormInfo} index={1} />
                        <FormInput title={"您的邮箱:"} placeholder={"请输入您的邮箱"} formInfo={formInfo} setFormInfo={setFormInfo} index={2} />
                        <div style={{ marginTop: '80px' }}>
                            <FormInput title={"填写您的需求:"} placeholder={"请输入您的需求"} width={'1560px'} height={'360px'} isTextArea={true} formInfo={formInfo} setFormInfo={setFormInfo} index={3} />
                        </div>
                    </div>
                    <div style={{ marginTop: '40px' }}>
                        <Button style={{
                            width: '241px',
                            height: '80px',
                            background: '#000000',
                            borderRadius: '5px',
                            color: '#ffffff',
                            marginLeft: '840px',
                            marginTop: '40px',
                            fontSize: '36px',
                            fontFamily: 'OPPOSans'
                        }} onClick={handleSubmit}>提交</Button >
                    </div>
                    <div style={{ marginLeft: '816' }}>
                        我们的客户 这里开始用图片就行
                    </div>
                </div>
            </div>

        </div >
    )
}

export { Index as Page6 }