
/**
 * Utilitário para controlar scroll de forma segura sem afetar o scroll da página principal
 */

export const safeScrollToBottom = (containerRef: React.RefObject<HTMLElement>) => {
  if (containerRef.current) {
    // Previne o scroll da página principal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    // Executa o scroll no container específico
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
    
    // Restaura o overflow da página após um pequeno delay
    setTimeout(() => {
      document.body.style.overflow = originalOverflow;
    }, 100);
  }
};

export const preventPageScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const restorePageScroll = () => {
  document.body.style.overflow = '';
};

/**
 * Hook para scroll seguro que não afeta a página principal
 */
export const useSafeScroll = () => {
  const scrollToBottom = (containerRef: React.RefObject<HTMLElement>) => {
    safeScrollToBottom(containerRef);
  };

  return { scrollToBottom };
};
