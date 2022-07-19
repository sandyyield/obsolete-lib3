import { Box, Button, TextField } from "@material-ui/core";
import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./style.module.css";

type infoType = {
  company: string;
  contact: string;
  addr: string;
  post: string;
  mail: string;
  tel: string;
  site: string;
  scenarios: string; //应用场景
  apply: string;
};

const Index = () => {
  const [info, setInfo] = useState<infoType>({
    company: "",
    contact: "",
    addr: "",
    post: "",
    mail: "",
    tel: "",
    site: "",
    scenarios: "", //应用场景
    apply: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: keyof infoType
  ) => {
    info[key] = event.target.value;
    setInfo({ ...info });
  };

  useEffect(() => {
    console.log("info", info);
  }, [info]);

  const imgPaths = [
    "/page4/page4_1.jpg",
    "/page4/page4_2.jpg",
    "/page4/page4_3.jpg",
    // "/page2/page1_4.jpg",
  ];

  return (
    <div>
      {imgPaths.map((i, index) => (
        <>
          <a name={index}></a>
          <img src={i} alt="" />
        </>
      ))}
      <div style={{ height: "5vh" }}></div>
      <div className={styles.box}>
        <div className={styles.line100}>
          <Box>
            <TextField
              id="standard-basic"
              label="公司名称"
              variant="standard"
              className={styles.line1}
              value={info["company"]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e, "company")
              }
            />
            <TextField
              id="standard-basic"
              label="联系人"
              variant="standard"
              className={styles.line1}
              value={info["contact"]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e, "contact")
              }
            />
          </Box>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="地址"
            variant="standard"
            className={styles.line2}
            value={info["addr"]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "addr")
            }
          />
        </div>
        <Box>
          <TextField
            id="standard-basic"
            label="职务"
            variant="standard"
            className={styles.line3}
            value={info["post"]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "post")
            }
          />
          <TextField
            id="standard-basic"
            label="邮箱"
            variant="standard"
            className={styles.line3}
            value={info["mail"]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "mail")
            }
          />
          <TextField
            id="standard-basic"
            label="电话"
            variant="standard"
            className={styles.line3}
            value={info["tel"]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "tel")
            }
          />
          <TextField
            id="standard-basic"
            label="公司网站"
            variant="standard"
            className={styles.line3}
            value={info["site"]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "site")
            }
          />
        </Box>
        <Box>
          <TextField
            id="standard-basic"
            label="应用场景详情"
            variant="standard"
            className={styles.line100}
            value={info["scenarios"]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "scenarios")
            }
          />
        </Box>
        <Box>
          <div>
            <TextField
              id="filled-multiline-static"
              label="产品应用简要描述"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              className={classNames(styles.line100, styles.linemargintop)}
              value={info["apply"]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e, "apply")
              }
            />
          </div>
        </Box>
      </div>

      <div className={styles.box}>
        <div style={{ marginTop: "0px" }}>
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
            // onClick={handleSubmit}
          >
            提交
          </Button>
        </div>
      </div>
      <div style={{ height: "5vh" }}></div>
      <div>
        <img src="/page4/page4_5.jpg" alt="" />
      </div>
    </div>
  );
};

export { Index as Page4 };
