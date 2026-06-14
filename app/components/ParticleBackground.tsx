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
    let particles: Ember[] = [];

    // Detect mobile for performance
    const isMobile = window.innerWidth < 768;

    // Aggressively reduce on mobile for smooth performance
    const particleCount = isMobile ? 14 : 46;

    // Warm ember palette
    const colors = ['255, 90, 31', '255, 138, 76', '255, 178, 122'];

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

    class Ember {
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      size!: number;
      color!: string;
      baseAlpha!: number;
      flicker!: number;

      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = Math.random() * canvas!.width;
        // New embers spawn near the bottom; on first init, scatter them
        this.y = initial ? Math.random() * canvas!.height : canvas!.height + 10;
        const speed = isMobile ? 0.25 : 0.45;
        this.vx = (Math.random() - 0.5) * speed * 0.6;
        this.vy = -(Math.random() * speed + 0.15); // drift upward
        this.size = (isMobile ? Math.random() * 1.1 + 0.4 : Math.random() * 1.8 + 0.5);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.4 + 0.25;
        this.flicker = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.flicker += 0.06;

        // Mouse interaction — desktop only (embers shy away from cursor)
        if (!isMobile) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 160 && distance > 0) {
            const force = (160 - distance) / 160;
            this.vx -= (dx / distance) * force * 0.04;
            this.vy -= (dy / distance) * force * 0.04;
          }
        }

        // Recycle once it floats off the top
        if (this.y < -10 || this.x < -20 || this.x > canvas!.width + 20) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        const alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(this.flicker));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.shadowBlur = isMobile ? 6 : 12;
        ctx.shadowColor = `rgba(${this.color}, 0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Ember(true));
      }
    };

    // Aggressive throttle on mobile — skip frames
    let frameCount = 0;
    const skipFrames = isMobile ? 2 : 0;

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
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();

    // Respect reduced-motion: draw a single static frame, no loop.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.draw());
    } else {
      animate();
    }

    // Pause the loop when the hero scrolls out of view (saves CPU / battery / INP).
    let running = !prefersReduced;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (prefersReduced) return;
        if (entry.isIntersecting && !running) {
          running = true;
          animate();
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    // Also pause when the browser tab is hidden.
    const onVisibility = () => {
      if (prefersReduced) return;
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
        running = false;
      } else if (!running) {
        running = true;
        animate();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
      io.disconnect();
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
