'use client';

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Detect mobile for performance
    const isMobile = window.innerWidth < 768;

    // Aggressively reduce on mobile for smooth performance
    const particleCount = isMobile ? 12 : 50;
    const connectionDistance = isMobile ? 80 : 150;

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Mouse tracking — disabled on mobile
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        const speed = isMobile ? 0.2 : 0.5;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.size = isMobile ? Math.random() * 1 + 0.3 : Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Mouse interaction — desktop only
        if (!isMobile) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (200 - distance) / 200;
            this.vx -= forceDirectionX * force * 0.05;
            this.vy -= forceDirectionY * force * 0.05;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Aggressive throttle on mobile — skip every other frame
    let frameCount = 0;
    const skipFrames = isMobile ? 3 : 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      frameCount++;
      if (skipFrames > 0 && frameCount % (skipFrames + 1) !== 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connections — skip entirely on mobile for performance
        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectionDistance * connectionDistance) {
              const distance = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 - (distance / connectionDistance) * 0.12})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
