'use client';

import { motion, useInView, type Transition } from 'motion/react';
import { useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  transition: Transition;
  amount?: number;
};

// IntersectionObserver считает clip-path частью зоны отсечения элемента, поэтому
// наблюдать напрямую за анимируемым (изначально схлопнутым в 0 по ширине) блоком
// нельзя — ratio всегда будет 0, и анимация никогда не запустится. Поэтому следим
// за немым обёрточным div без clip-path, а схлопываем уже вложенный motion.div.
export default function Reveal({ children, transition, amount = 0.3 }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 0 0 0)' } : undefined}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}
