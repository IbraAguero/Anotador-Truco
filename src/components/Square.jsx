const Square = ({ points }) => {
  const lineConfigs = [
    { key: "top", className: "top-0 left-[7px] w-[calc(100%-14px)] h-[6px]" },
    { key: "left", className: "top-[7px] left-0 h-[calc(100%-14px)] w-[6px]" },
    {
      key: "bottom",
      className: "bottom-0 left-[7px] w-[calc(100%-14px)] h-[6px]",
    },
    {
      key: "right",
      className: "top-[7px] right-0 h-[calc(100%-14px)] w-[6px]",
    },
    {
      key: "diagonal",
      className:
        "top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[calc(100%-8px)] w-[6px] rotate-45",
    },
  ];

  const lines = lineConfigs
    .slice(0, points)
    .map((line) => (
      <div
        key={line.key}
        className={`absolute bg-zinc-950 rounded ${line.className}`}
      ></div>
    ));

  return <div className="relative w-[50px] h-[50px]">{lines}</div>;
};
export default Square;
