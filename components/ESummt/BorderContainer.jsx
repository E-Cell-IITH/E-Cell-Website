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
        className={`absolute bg-[url('/esummit/bordercontainer/top.svg')] bg-cover ${widthcss} z-[-10]`}
        style={{
          aspectRatio: 1117 / 56,
        }}
      ></div>

      <div
        className={`absolute 
        bg-[url('/esummit/bordercontainer/rightres.svg')]
        aspect-[48/1050] 
        sm:bg-[url('/esummit/bordercontainer/right.svg')] 
        sm:aspect-[78/631]
        bg-cover ${heightcss} ${marginleftcss} right-0 z-[-10]`}
      ></div>
      <div
        className={`absolute bg-[url('/esummit/bordercontainer/bottom.svg')] bg-cover ${widthcss} ${margintopcss} bottom-0 z-[-10]`}
        style={{
          aspectRatio: 1117 / 56,
        }}
      ></div>
      <div
        className={`absolute 
        bg-[url('/esummit/bordercontainer/leftres.svg')]
        aspect-[40/1047]
        sm:bg-[url('/esummit/bordercontainer/left.svg')]
        sm:aspect-[78/631]
        bg-cover ${heightcss} z-[-10]`}
      ></div>
      {children}
    </div>
  );
};

export default BorderContainer;
