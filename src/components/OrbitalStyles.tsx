
export const OrbitalStyles = () => (
  <style>{`
    @keyframes orbit-0 {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(25%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(25%) rotate(-360deg); }
    }
    @keyframes orbit-1 {
      from { transform: translate(-50%, -50%) rotate(60deg) translateX(35%) rotate(-60deg); }
      to { transform: translate(-50%, -50%) rotate(420deg) translateX(35%) rotate(-420deg); }
    }
    @keyframes orbit-2 {
      from { transform: translate(-50%, -50%) rotate(120deg) translateX(45%) rotate(-120deg); }
      to { transform: translate(-50%, -50%) rotate(480deg) translateX(45%) rotate(-480deg); }
    }
    @keyframes orbit-3 {
      from { transform: translate(-50%, -50%) rotate(180deg) translateX(55%) rotate(-180deg); }
      to { transform: translate(-50%, -50%) rotate(540deg) translateX(55%) rotate(-540deg); }
    }
    @keyframes orbit-4 {
      from { transform: translate(-50%, -50%) rotate(240deg) translateX(65%) rotate(-240deg); }
      to { transform: translate(-50%, -50%) rotate(600deg) translateX(65%) rotate(-600deg); }
    }
    @keyframes orbit-5 {
      from { transform: translate(-50%, -50%) rotate(300deg) translateX(75%) rotate(-300deg); }
      to { transform: translate(-50%, -50%) rotate(660deg) translateX(75%) rotate(-660deg); }
    }

    @keyframes pulse-soft {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.02); }
    }

    .animate-pulse-soft {
      animation: pulse-soft 3s ease-in-out infinite;
    }

    /* Mobile optimizations */
    @media (max-width: 640px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(28%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(28%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(38%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(38%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(48%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(48%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(58%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(58%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(68%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(68%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(78%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(78%) rotate(-660deg); }
      }
    }
  `}</style>
);
