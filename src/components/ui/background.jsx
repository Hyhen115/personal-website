import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Water ripple effect component with optimizations for performance
const WaterRippleEffect = ({
  waveSpeedX = 0.015,
  waveSpeedY = 0.008,
  waveAmpX = 50,
  waveAmpY = 25,
  backgroundColor = "transparent",
  lineColor = "rgba(59, 131, 246, 0.28)", // Changed back to blue with low opacity
  gridSpacing = 20, // Increased spacing between grid points (was 10)
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const boundingRef = useRef({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const linesRef = useRef([]);
  const mouseRef = useRef({
    x: -10,
    y: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });
  const animationFrameRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    ctxRef.current = canvas.getContext("2d");

    function setSize() {
      if (container) {
        boundingRef.current = container.getBoundingClientRect();
        if (!canvas || !container) return;
        canvas.width = boundingRef.current.width;
        canvas.height = boundingRef.current.height;
      }
    }

    function setLines() {
      const { width, height } = boundingRef.current;
      linesRef.current = [];
      const oWidth = width + 200,
        oHeight = height + 30;
      // Reduce the number of lines by increasing the grid spacing
      const totalLines = Math.ceil(oWidth / gridSpacing);
      const totalPoints = Math.ceil(oHeight / gridSpacing);
      const xStart = (width - gridSpacing * totalLines) / 2;
      const yStart = (height - gridSpacing * totalPoints) / 2;
      for (let i = 0; i <= totalLines; i++) {
        const pts = [];
        // Only create points for every other line to make it even more sparse
        if (i % 2 === 0) {
          for (let j = 0; j <= totalPoints; j++) {
            // Only include every other point to reduce density
            if (j % 2 === 0) {
              pts.push({
                x: xStart + gridSpacing * i,
                y: yStart + gridSpacing * j,
                wave: { x: 0, y: 0 },
                cursor: { x: 0, y: 0, vx: 0, vy: 0 },
              });
            }
          }
          linesRef.current.push(pts);
        }
      }
    }

    function movePoints(time) {
      const lines = linesRef.current;
      const mouse = mouseRef.current;
      lines.forEach((pts) => {
        pts.forEach((p) => {
          const move =
            Math.sin(
              (p.x + time * waveSpeedX) * 0.002 +
                (p.y + time * waveSpeedY) * 0.002
            ) * 12;
          p.wave.x = Math.cos(move) * waveAmpX;
          p.wave.y = Math.sin(move) * waveAmpY;

          const dx = p.x - mouse.sx,
            dy = p.y - mouse.sy;
          const dist = Math.hypot(dx, dy),
            l = Math.max(175, mouse.vs);
          if (dist < l) {
            const s = 1 - dist / l;
            const f = Math.cos(dist * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
          }

          p.cursor.vx += (0 - p.cursor.x) * 0.005;
          p.cursor.vy += (0 - p.cursor.y) * 0.005;
          p.cursor.vx *= 0.92;
          p.cursor.vy *= 0.92;
          p.cursor.x += p.cursor.vx * 2;
          p.cursor.y += p.cursor.vy * 2;

          p.cursor.x = Math.min(100, Math.max(-100, p.cursor.x));
          p.cursor.y = Math.min(100, Math.max(-100, p.cursor.y));
        });
      });
    }

    function moved(point, withCursor = true) {
      const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0);
      const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0);
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    }

    function drawLines() {
      const { width, height } = boundingRef.current;
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      // Changed shadow color back to blue
      ctx.shadowColor = "rgba(59, 130, 246, 0.1)";
      ctx.shadowBlur = 5; // Keeping reduced blur for performance

      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1; // Keeping thinner lines for better performance
      linesRef.current.forEach((points) => {
        let p1 = moved(points[0], false);
        ctx.moveTo(p1.x, p1.y);
        points.forEach((p, idx) => {
          const isLast = idx === points.length - 1;
          p1 = moved(p, !isLast);
          const p2 = moved(
            points[idx + 1] || points[points.length - 1],
            !isLast
          );
          ctx.lineTo(p1.x, p1.y);
          if (isLast) ctx.moveTo(p2.x, p2.y);
        });
      });
      ctx.stroke();
    }

    function tick(t) {
      const mouse = mouseRef.current;

      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      const dx = mouse.x - mouse.sx,
        dy = mouse.y - mouse.sy;
      const d = Math.hypot(dx, dy);
      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.sx = mouse.x;
      mouse.sy = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      movePoints(t);
      drawLines();
      // Use a lower frame rate (approximately 30fps instead of 60fps)
      animationFrameRef.current = setTimeout(() => {
        requestAnimationFrame(tick);
      }, 33); // ~30fps for better performance
    }

    function onResize() {
      setSize();
      setLines();
    }

    function onMouseMove(e) {
      const { left, top } = boundingRef.current;
      const mouse = mouseRef.current;
      mouse.x = e.pageX - left;
      mouse.y = e.pageY - top;
    }

    setSize();
    setLines();
    animationFrameRef.current = requestAnimationFrame(tick);
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
    };
  }, [waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, lineColor, gridSpacing]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

// Updated SharedBackground component with enhanced wave settings
const SharedBackground = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 1000], [0.9, 0.5]); // Your current opacity settings
  
  // Keep your current ripple color
  const rippleColor = "rgba(59, 130, 246, 0.15)"; 
  
  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ opacity: backgroundOpacity }}
    >
      {/* Water ripple effect with enhanced wave parameters */}
      <WaterRippleEffect 
        waveSpeedX={0.012} // Slightly faster than before, slower than original
        waveSpeedY={0.006} // Slightly faster than before, slower than original
        waveAmpX={35}     // More amplitude than before (30), less than original (50)
        waveAmpY={20}     // More amplitude than before (15), less than original (25)
        backgroundColor="transparent"
        lineColor={rippleColor}
        gridSpacing={20}  // Slightly denser grid than before (25), sparser than original (20)
      />
      
      {/* Minimal background elements with blue tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-blue-400/3 blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-blue-500/3 blur-3xl" />
      </div>
    </motion.div>
  );
};

export default SharedBackground;