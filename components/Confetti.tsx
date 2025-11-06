import React, { useEffect, useRef } from 'react';

interface ConfettiProps {
  fire: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ fire }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (fire && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const colors = ['#002776', '#FFDC00', '#009B3A', '#FFFFFF', '#C0C0C0'];
      const particles: any[] = [];
      const particleCount = 200;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: width / 2,
          y: height,
          radius: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.random() * 16 - 8,
          vy: Math.random() * -25 - 10,
          gravity: 0.4
        });
      }

      let animationFrameId: number;
      let startTime = Date.now();

      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
          p.vy += p.gravity;
          p.x += p.vx;
          p.y += p.vy;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = p.color;
          ctx.fill();
        });

        if (Date.now() - startTime < 3500) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, width, height);
        }

      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [fire]);

  if (!fire) return null;

  return <canvas ref={canvasRef} className="absolute inset-0 z-[100] pointer-events-none" />;
};

export default Confetti;
