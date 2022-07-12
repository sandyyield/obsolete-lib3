import { CSSProperties } from "@material-ui/core/styles/withStyles";
import "./style.css";

type propsTyle = {
  title: string;
  placeholder: string;
  index: number;
  width?: string;
  height?: string;
  isTextArea?: boolean;
  formInfo?: any;
  setFormInfo?: any;
};

const Index = (props: propsTyle) => {
  const {
    title,
    placeholder,
    width = "100%",
    height = "80px",
    isTextArea = false,
    formInfo,
    setFormInfo,
    index,
  } = props;

  const titleStyle: CSSProperties = {
    fontSize: "2.3rem",
    fontFamily: "OPPOSans",
    color: "#000000",
    marginBottom: "12px",
  };

  const handleChange = (e: any) => {
    const arr = [...formInfo];
    arr[index] = e.target.value;
    setFormInfo(arr);
  };

  return (
    <div>
      <div className="inputTitle" style={titleStyle}>
        {title}
      </div>
      {!isTextArea ? (
        <input
          className="inputRect"
          placeholder={placeholder}
          style={{  height, right: 0 }}
          value={formInfo[index]}
          onChange={handleChange}
        ></input>
      ) : (
        <textarea
          className="inputRect"
          placeholder={placeholder}
          style={{ width, height, resize: "none" }}
          value={formInfo[index]}
          onChange={handleChange}
        ></textarea>
      )}
    </div>
  );
};

export { Index as FormInput };
