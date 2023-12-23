const BorderContainer = ({ height = "40rem", width = "60rem",widthcss="w-[60rem]", heightcss="h-[40rem]", children }) => {
  return (
    <div
      className={`relative w-[${width}] h-[${height}] flex`}
      style={{ height: height, width: width }}
    >
      <div
        className={`absolute bg-cover w-[${width}] ${widthcss}`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/top.svg')",
          aspectRatio: 1117 / 56,
          width: width,
        }}
      ></div>

      <div
        className={`absolute bg-cover h-[${height}] ${heightcss} right-0`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/right.svg')",
          aspectRatio: 78 / 631,
          marginLeft: width,
        }}
      ></div>
      <div
        className={`absolute bg-cover w-[${width}] ${widthcss} bottom-0`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/bottom.svg')",
          aspectRatio: 1117 / 56,
          width: width,
          marginTop: height,
        }}
      ></div>
      <div
        className={`absolute bg-cover h-[${height}] ${heightcss}`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/left.svg')",
          aspectRatio: 78 / 631,
        }}
      ></div>
      {children}
    </div>
  );
};

export default BorderContainer;
