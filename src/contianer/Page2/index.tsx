import style from "./style.module.css";

const Index = () => {
  const imgPaths = [
    "/page2/page1_1.jpg",
    "/page2/page1_2.jpg",
    "/page2/page1_3.jpg",
    "/page2/page1_4.jpg",
    "/page2/page1_5.jpg",
    "/page2/page1_6.jpg",
    "/page2/page1_7.jpg",
    "/page2/page1_8.jpg",
    "/page2/page1_9.jpg",
    "/page2/page1_10.jpg",
    "/page2/page1_11.jpg",
    "/page2/page1_12.jpg",
    "/page2/page1_13.jpg",
    "/page2/page1_14.jpg",
    "/page2/page1_15.jpg",
    "/page2/page1_16.jpg",
  ];
  return (
    <div className={style.page2image}>
      {imgPaths.map((i) => (
        <img src={i} alt="" />
      ))}
    </div>
  );
};

export { Index as Page2 };
