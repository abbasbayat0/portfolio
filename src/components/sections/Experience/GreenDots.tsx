const GreenDots = ({ current, left }: { current: boolean; left: boolean }) => {
  return (
    <div
      className={`absolute h-3 w-3 rounded-full bg-green shadow-[0px_0px_15px_15px] shadow-[#141c21] md:top-0 ${left ? "-left-1 md:left-[-18.25%]" : "-top-0.5 -left-1 md:left-[115.75%]"}`}
    >
      {/* current pointer */}
      {current && (
        <span className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-green" />
      )}
    </div>
  );
};

export default GreenDots;
