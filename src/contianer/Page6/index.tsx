import { Button } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import "./style.css";

const flexStyle: CSSProperties = {
  width: "1912px",
  height: `${5000 - 80}px`,
  display: "flex",
  flexDirection: "column",
};

const formStyle: CSSProperties = {
  backgroundColor: "#EAEAEA",
  width: "100%",
  height: "100%",
};

//提交表单 css
const formFlexStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  width: "83%",
//   marginLeft: "7%",
  marginRight: "10%",
  justifyContent: "space-between",
  marginTop: "120px",
  paddingLeft: "7%",
};

const Index = () => {
  const [formInfo, setFormInfo] = useState(["", "", "", ""]);

  const handleSubmit = () => {
    console.log(formInfo);
    //fetch todo...
  };

  const flexLayout = { height: "10vh", width: "30%" };

  const input = (index: number) => inputs[index];

  const inputs = [
    <FormInput
      title={"您的姓名:"}
      placeholder={"请输入您的名字"}
      formInfo={formInfo}
      setFormInfo={setFormInfo}
      index={0}
    />,
    <FormInput
      title={"您的电话/手机:"}
      placeholder={"请输入您的电话/手机"}
      formInfo={formInfo}
      setFormInfo={setFormInfo}
      index={1}
    />,
    <FormInput
      title={"您的邮箱:"}
      placeholder={"请输入您的邮箱"}
      formInfo={formInfo}
      setFormInfo={setFormInfo}
      index={2}
    />,
  ];

  return (
    // <div style={flexStyle}>
    <div className="box">
      <div>
        <img src="/page6/page6_banner.jpg" />
      </div>
      <div style={formStyle}>
        <div className="title">服务客户</div>
        <div className="form-title">在线提交您的需求</div>
        <div className="">
          <div style={formFlexStyle}>
            <div style={flexLayout}>{input(0)}</div>
            <div style={flexLayout}>{input(1)}</div>
            <div style={flexLayout}>{input(2)}</div>
          </div>
          <div
            style={{ marginTop: "80px", marginLeft: "7%", marginRight: "10%" }}
          >
            <FormInput
              title={"填写您的需求:"}
              placeholder={"请输入您的需求"}
              width={"100%"}
              height={"39vh"}
              isTextArea={true}
              formInfo={formInfo}
              setFormInfo={setFormInfo}
              index={3}
            />
          </div>
          <div style={{ marginTop: "40px" }}>
            <Button
              style={{
                width: "20%",
                // height: "10%",
                background: "#000000",
                borderRadius: "5px",
                color: "#ffffff",
                marginLeft: "40%",
                marginTop: "5vh",
                fontSize: "36px",
                fontFamily: "OPPOSans",
              }}
              onClick={handleSubmit}
            >
              提交
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img src="/page6/page6_p1.jpg" />
      </div>
      <div>
        <img src="/page6/page6_bottom_1.jpg" />
      </div>
    </div>
  );
};

export { Index as Page6 };
