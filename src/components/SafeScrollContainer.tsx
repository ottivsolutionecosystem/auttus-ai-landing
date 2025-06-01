
import React, { useRef, useEffect } from 'react';
import { useSafeScroll } from '../utils/scrollUtils';

interface SafeScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  autoScrollOnChange?: boolean;
  dependencies?: any[];
}

export const SafeScrollContainer: React.FC<SafeScrollContainerProps> = ({
  children,
  className = '',
  autoScrollOnChange = false,
  dependencies = []
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useSafeScroll();

  useEffect(() => {
    if (autoScrollOnChange && dependencies.length > 0) {
      setTimeout(() => {
        scrollToBottom(containerRef);
      }, 100);
    }
  }, dependencies);

  return (
    <div 
      ref={containerRef}
      className={`overflow-y-auto overscroll-contain ${className}`}
      style={{ 
        scrollBehavior: 'smooth',
        touchAction: 'pan-y' // Permite apenas scroll vertical no mobile
      }}
    >
      {children}
    </div>
  );
};
