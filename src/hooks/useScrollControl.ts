
import { useCallback, useEffect } from 'react';

interface UseScrollControlOptions {
  preventPageScroll?: boolean;
  autoRestore?: boolean;
}

export const useScrollControl = (options: UseScrollControlOptions = {}) => {
  const { preventPageScroll = false, autoRestore = true } = options;

  const lockPageScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }, []);

  const unlockPageScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }, []);

  const safeContainerScroll = useCallback((
    containerRef: React.RefObject<HTMLElement>,
    behavior: 'smooth' | 'instant' = 'smooth'
  ) => {
    if (!containerRef.current) return;

    // Temporariamente bloqueia o scroll da página
    const wasLocked = document.body.style.overflow === 'hidden';
    if (!wasLocked) lockPageScroll();

    // Executa o scroll no container
    if (behavior === 'smooth') {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }

    // Restaura o scroll da página após o scroll do container
    if (!wasLocked && autoRestore) {
      setTimeout(() => {
        unlockPageScroll();
      }, 300);
    }
  }, [lockPageScroll, unlockPageScroll, autoRestore]);

  useEffect(() => {
    if (preventPageScroll) {
      lockPageScroll();
      return () => {
        if (autoRestore) {
          unlockPageScroll();
        }
      };
    }
  }, [preventPageScroll, lockPageScroll, unlockPageScroll, autoRestore]);

  return {
    lockPageScroll,
    unlockPageScroll,
    safeContainerScroll
  };
};
