import style from "./style.module.css";

const Index = ({ gotoPage }: any) => {
  const imgPaths = [
    // "/page2/page1_1.jpg",
    // "/page2/page1_2.jpg",
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
    // "/page2/page1_16.jpg",
  ];

  const handleClick = () => gotoPage(6);

  return (
    <div className={style.page2image}>
      <img src={"/page2/page1_1.jpg"} alt="" />
      <div>
        <a href="#0" className={style.a1}></a>
        <a href="#1" className={style.a2}></a>
        <a href="#3" className={style.a3}></a>
        <a href="#4" className={style.a4}></a>
        <a href="#5" className={style.a5}></a>

        <a href="#6" className={style.a6}></a>
        <a href="#7" className={style.a7}></a>
        <a href="#8" className={style.a8}></a>
        <a href="#9" className={style.a9}></a>
        <a href="#10" className={style.a10}></a>
        <a href="#11" className={style.a11}></a>
        <a href="#12" className={style.a12}></a>
        <img src={"/page2/page1_2.jpg"} alt="" />
      </div>
      {imgPaths.map((i, index) => (
        <>
          <a name={index}></a>
          <img src={i} alt="" />
        </>
      ))}
      <div>
        <div className={style.abtm} onClick={handleClick}></div>
        <img src={"/page2/page1_16.jpg"} alt="" />
      </div>
    </div>
  );
};

export { Index as Page2 };
