
export const OrbitalStyles = () => (
  <style>{`
    @keyframes orbit-0 {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(30%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(30%) rotate(-360deg); }
    }
    @keyframes orbit-1 {
      from { transform: translate(-50%, -50%) rotate(60deg) translateX(45%) rotate(-60deg); }
      to { transform: translate(-50%, -50%) rotate(420deg) translateX(45%) rotate(-420deg); }
    }
    @keyframes orbit-2 {
      from { transform: translate(-50%, -50%) rotate(120deg) translateX(60%) rotate(-120deg); }
      to { transform: translate(-50%, -50%) rotate(480deg) translateX(60%) rotate(-480deg); }
    }
    @keyframes orbit-3 {
      from { transform: translate(-50%, -50%) rotate(180deg) translateX(75%) rotate(-180deg); }
      to { transform: translate(-50%, -50%) rotate(540deg) translateX(75%) rotate(-540deg); }
    }
    @keyframes orbit-4 {
      from { transform: translate(-50%, -50%) rotate(240deg) translateX(90%) rotate(-240deg); }
      to { transform: translate(-50%, -50%) rotate(600deg) translateX(90%) rotate(-600deg); }
    }
    @keyframes orbit-5 {
      from { transform: translate(-50%, -50%) rotate(300deg) translateX(105%) rotate(-300deg); }
      to { transform: translate(-50%, -50%) rotate(660deg) translateX(105%) rotate(-660deg); }
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
    }

    /* Tablet optimizations */
    @media (min-width: 641px) and (max-width: 1024px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(32%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(32%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(47%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(47%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(62%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(62%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(77%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(77%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(92%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(92%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(107%) rotate(-300deg); }
        to { transform: translate(-50%, -50()) rotate(660deg) translateX(107%) rotate(-660deg); }
      }
    }

    /* Desktop optimizations */
    @media (min-width: 1025px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(28%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(28%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(43%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(43%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(58%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(58%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(73%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(73%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(88%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(88%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(103%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(103%) rotate(-660deg); }
      }
    }
  `}</style>
);
