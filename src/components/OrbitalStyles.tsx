
export const OrbitalStyles = () => (
  <style>{`
    @keyframes orbit-0 {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(50%) rotate(-360deg); }
    }
    @keyframes orbit-1 {
      from { transform: translate(-50%, -50%) rotate(60deg) translateX(75%) rotate(-60deg); }
      to { transform: translate(-50%, -50%) rotate(420deg) translateX(75%) rotate(-420deg); }
    }
    @keyframes orbit-2 {
      from { transform: translate(-50%, -50%) rotate(120deg) translateX(100%) rotate(-120deg); }
      to { transform: translate(-50%, -50%) rotate(480deg) translateX(100%) rotate(-480deg); }
    }
    @keyframes orbit-3 {
      from { transform: translate(-50%, -50%) rotate(180deg) translateX(125%) rotate(-180deg); }
      to { transform: translate(-50%, -50%) rotate(540deg) translateX(125%) rotate(-540deg); }
    }
    @keyframes orbit-4 {
      from { transform: translate(-50%, -50%) rotate(240deg) translateX(150%) rotate(-240deg); }
      to { transform: translate(-50%, -50%) rotate(600deg) translateX(150%) rotate(-600deg); }
    }
    @keyframes orbit-5 {
      from { transform: translate(-50%, -50%) rotate(300deg) translateX(175%) rotate(-300deg); }
      to { transform: translate(-50%, -50%) rotate(660deg) translateX(175%) rotate(-660deg); }
    }

    @keyframes pulse-soft {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.02); }
    }

    .animate-pulse-soft {
      animation: pulse-soft 3s ease-in-out infinite;
    }

    /* Mobile optimizations - órbitas bem espaçadas */
    @media (max-width: 640px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(60%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(60%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(90%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(90%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(120%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(120%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(150%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(150%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(180%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(180%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(210%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(210%) rotate(-660deg); }
      }
    }

    /* Tablet optimizations */
    @media (min-width: 641px) and (max-width: 1024px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(52%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(52%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(77%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(77%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(102%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(102%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(127%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(127%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(152%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(152%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(177%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(177%) rotate(-660deg); }
      }
    }

    /* Desktop optimizations */
    @media (min-width: 1025px) {
      @keyframes orbit-0 {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(50%) rotate(-360deg); }
      }
      @keyframes orbit-1 {
        from { transform: translate(-50%, -50%) rotate(60deg) translateX(75%) rotate(-60deg); }
        to { transform: translate(-50%, -50%) rotate(420deg) translateX(75%) rotate(-420deg); }
      }
      @keyframes orbit-2 {
        from { transform: translate(-50%, -50%) rotate(120deg) translateX(100%) rotate(-120deg); }
        to { transform: translate(-50%, -50%) rotate(480deg) translateX(100%) rotate(-480deg); }
      }
      @keyframes orbit-3 {
        from { transform: translate(-50%, -50%) rotate(180deg) translateX(125%) rotate(-180deg); }
        to { transform: translate(-50%, -50%) rotate(540deg) translateX(125%) rotate(-540deg); }
      }
      @keyframes orbit-4 {
        from { transform: translate(-50%, -50%) rotate(240deg) translateX(150%) rotate(-240deg); }
        to { transform: translate(-50%, -50%) rotate(600deg) translateX(150%) rotate(-600deg); }
      }
      @keyframes orbit-5 {
        from { transform: translate(-50%, -50%) rotate(300deg) translateX(175%) rotate(-300deg); }
        to { transform: translate(-50%, -50%) rotate(660deg) translateX(175%) rotate(-660deg); }
      }
    }
  `}</style>
);
