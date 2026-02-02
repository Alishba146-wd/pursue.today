export default function ScrollingTicker() {
  return (
    <div className="py-4 overflow-hidden -mt-14 relative z-10" style={{ backgroundColor: '#2C7BBD' }}>
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(14)].map((_, i) => (
          <span key={i} className="text-white font-bold text-base md:text-lg mx-4 md:mx-8">
            PURSUE TODAY
          </span>
        ))}
      </div>
    </div>
  );
}
