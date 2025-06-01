
export const OrbitalStyles = () => (
  <style>{`
    @keyframes orbit-0 {
      from { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
    }
    @keyframes orbit-1 {
      from { transform: translate(-50%, -50%) rotate(60deg) translateX(200px) rotate(-60deg); }
      to { transform: translate(-50%, -50%) rotate(420deg) translateX(200px) rotate(-420deg); }
    }
    @keyframes orbit-2 {
      from { transform: translate(-50%, -50%) rotate(120deg) translateX(180px) rotate(-120deg); }
      to { transform: translate(-50%, -50%) rotate(480deg) translateX(180px) rotate(-480deg); }
    }
    @keyframes orbit-3 {
      from { transform: translate(-50%, -50%) rotate(180deg) translateX(230px) rotate(-180deg); }
      to { transform: translate(-50%, -50%) rotate(540deg) translateX(230px) rotate(-540deg); }
    }
    @keyframes orbit-4 {
      from { transform: translate(-50%, -50%) rotate(240deg) translateX(160px) rotate(-240deg); }
      to { transform: translate(-50%, -50%) rotate(600deg) translateX(160px) rotate(-600deg); }
    }
    @keyframes orbit-5 {
      from { transform: translate(-50%, -50%) rotate(300deg) translateX(210px) rotate(-300deg); }
      to { transform: translate(-50%, -50%) rotate(660deg) translateX(210px) rotate(-660deg); }
    }
  `}</style>
);
