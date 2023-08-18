import { useState, useEffect } from 'react';

const initialMousePosition = { x: 0, y: 0 };

export default function useMouse() {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    // 구독(subscription)
    globalThis.addEventListener('mousemove', handleMouseMove);
    const clearIntervalId = setInterval(() => console.count(), 300);

    // 구독 해지(unsubscription)
    // 클린 업
    return () => {
      globalThis.addEventListener('mousemove', handleMouseMove);
      clearInterval(clearIntervalId);
    };
  }, []);

  return mousePosition;
}
