const BorderContainer = ({
  widthcss = "w-[60rem]",
  heightcss = "h-[40rem]",
  margintopcss = "mt-[40rem]",
  marginleftcss = "ml-[60rem]",
  children,
}) => {
  return (
    <div className={`relative flex ${widthcss} ${heightcss}`}>
      <div
        className={`absolute bg-cover ${widthcss}`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/top.svg')",
          aspectRatio: 1117 / 56,
        }}
      ></div>

      <div
        className={`absolute bg-cover ${heightcss} ${marginleftcss} right-0`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/right.svg')",
          aspectRatio: 78 / 631,
        }}
      ></div>
      <div
        className={`absolute bg-cover ${widthcss} ${margintopcss} bottom-0`}
        style={{
          backgroundImage: "url('/esummit/bordercontainer/bottom.svg')",
          aspectRatio: 1117 / 56,
        }}
      ></div>
      <div
        className={`absolute bg-cover ${heightcss}`}
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
