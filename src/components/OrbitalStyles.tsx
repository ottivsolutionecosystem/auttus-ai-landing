
export const OrbitalStyles = () => (
  <style>{`
    @keyframes single-orbit {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(140%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(140%) rotate(-360deg); }
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
      @keyframes single-orbit {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(160%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(160%) rotate(-360deg); }
      }
    }

    /* Tablet optimizations */
    @media (min-width: 641px) and (max-width: 1024px) {
      @keyframes single-orbit {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(145%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(145%) rotate(-360deg); }
      }
    }

    /* Desktop optimizations */
    @media (min-width: 1025px) {
      @keyframes single-orbit {
        from { transform: translate(-50%, -50%) rotate(0deg) translateX(140%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg) translateX(140%) rotate(-360deg); }
      }
    }
  `}</style>
);
