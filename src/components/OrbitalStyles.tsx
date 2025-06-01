
export const OrbitalStyles = () => (
  <style>{`
    @keyframes orbit-0 {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(25%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(25%) rotate(-360deg); }
    }
    @keyframes orbit-1 {
      from { transform: translate(-50%, -50%) rotate(60deg) translateX(40%) rotate(-60deg); }
      to { transform: translate(-50%, -50%) rotate(420deg) translateX(40%) rotate(-420deg); }
    }
    @keyframes orbit-2 {
      from { transform: translate(-50%, -50%) rotate(120deg) translateX(55%) rotate(-120deg); }
      to { transform: translate(-50%, -50%) rotate(480deg) translateX(55%) rotate(-480deg); }
    }
    @keyframes orbit-3 {
      from { transform: translate(-50%, -50%) rotate(180deg) translateX(70%) rotate(-180deg); }
      to { transform: translate(-50%, -50%) rotate(540deg) translateX(70%) rotate(-540deg); }
    }
    @keyframes orbit-4 {
      from { transform: translate(-50%, -50%) rotate(240deg) translateX(85%) rotate(-240deg); }
      to { transform: translate(-50%, -50%) rotate(600deg) translateX(85%) rotate(-600deg); }
    }
    @keyframes orbit-5 {
      from { transform: translate(-50%, -50%) rotate(300deg) translateX(100%) rotate(-300deg); }
      to { transform: translate(-50%, -50%) rotate(660deg) translateX(100%) rotate(-660deg); }
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
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(30%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(30%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(50%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(50%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(70%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(70%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(90%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(90%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(110%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(110%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(130%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(130%) rotate(-660deg); }
      }
    }

    /* Tablet optimizations */
    @media (min-width: 641px) and (max-width: 1024px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(27%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(27%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(42%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(42%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(57%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(57%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(72%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(72%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(87%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(87%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(102%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(102%) rotate(-660deg); }
      }
    }

    /* Desktop optimizations */
    @media (min-width: 1025px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(25%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(25%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(40%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(40%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(55%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(55%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(70%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(70%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(85%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(85%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(100%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(100%) rotate(-660deg); }
      }
    }
  `}</style>
);
