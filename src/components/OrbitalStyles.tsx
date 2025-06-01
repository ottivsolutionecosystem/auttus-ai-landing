
export const OrbitalStyles = () => (
  <style>{`
    @keyframes orbit-0 {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(35%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(35%) rotate(-360deg); }
    }
    @keyframes orbit-1 {
      from { transform: translate(-50%, -50%) rotate(60deg) translateX(50%) rotate(-60deg); }
      to { transform: translate(-50%, -50%) rotate(420deg) translateX(50%) rotate(-420deg); }
    }
    @keyframes orbit-2 {
      from { transform: translate(-50%, -50%) rotate(120deg) translateX(65%) rotate(-120deg); }
      to { transform: translate(-50%, -50%) rotate(480deg) translateX(65%) rotate(-480deg); }
    }
    @keyframes orbit-3 {
      from { transform: translate(-50%, -50%) rotate(180deg) translateX(80%) rotate(-180deg); }
      to { transform: translate(-50%, -50%) rotate(540deg) translateX(80%) rotate(-540deg); }
    }
    @keyframes orbit-4 {
      from { transform: translate(-50%, -50%) rotate(240deg) translateX(95%) rotate(-240deg); }
      to { transform: translate(-50%, -50%) rotate(600deg) translateX(95%) rotate(-600deg); }
    }
    @keyframes orbit-5 {
      from { transform: translate(-50%, -50%) rotate(300deg) translateX(110%) rotate(-300deg); }
      to { transform: translate(-50%, -50%) rotate(660deg) translateX(110%) rotate(-660deg); }
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
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(40%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(40%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(55%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(55%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(70%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(70%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(85%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(85%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(100%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(100%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(115%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(115%) rotate(-660deg); }
      }
    }

    /* Tablet optimizations */
    @media (min-width: 641px) and (max-width: 1024px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(37%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(37%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(52%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(52%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(67%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(67%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(82%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(82%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(97%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(97%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(112%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(112%) rotate(-660deg); }
      }
    }
  `}</style>
);
