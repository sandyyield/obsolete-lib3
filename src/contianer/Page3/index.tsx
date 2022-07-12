const Index = () => {
  const imgs = [
    "/page3/page3_1.png",
    "/page3/page3_2.png",
    "/page3/page3_3.png",
    "/page3/page3_4.png",
    "/page3/page3_5.png",
    "/page3/page3_6.png",
    "/page3/page3_7.jpg",
  ];

  return (
    <div>
      {imgs.map((i) => (
        <img src={i} alt="" />
      ))}
    </div>
  );
};

export { Index as Page3 };
