export default function LightningLoader() {
  return (
    <div className="flex items-center justify-center  ">
      <div className="relative flex items-center justify-center">
        {/* Flash */}
        <div className="absolute w-40 h-40 bg-red-500 opacity-20 rounded-full animate-ping"></div>

        {/* Glow */}
        <div className="absolute w-24 h-24 bg-red-500 blur-2xl opacity-60 animate-pulse rounded-full"></div>

        {/* Trovão */}
        <svg
          className="w-20 h-20 text-red-500 animate-bounce drop-shadow-[0_0_20px_rgba(255,25,0,0.8)]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      </div>
    </div>
  );
}