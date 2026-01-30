export default function ScrollingTicker() {
  return (
    <div className="py-4 overflow-hidden -mt-14" style={{ backgroundColor: '#0264B8' }}>
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
