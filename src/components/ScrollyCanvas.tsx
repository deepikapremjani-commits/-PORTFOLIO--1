'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollyCanvasProps {
  numFrames: number;
  width?: number;
  height?: number;
}

const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ numFrames }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, numFrames - 1]);

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 0; i < numFrames; i++) {
        const frameNumber = i.toString().padStart(2, '0');
        const img = new Image();
        img.src = `/sequence/frame_${frameNumber}_delay-0.066s.png`;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one frame fails
        });

        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [numFrames]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize by disabling alpha if matching bg
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      if (images[currentFrame] && images[currentFrame].complete) {
        const img = images[currentFrame];

        // Handle High DPI displays
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;

        // Background color
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // object-fit: cover logic
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        let renderWidth = width;
        let renderHeight = height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          renderHeight = width / imgRatio;
          offsetY = (height - renderHeight) / 2;
        } else {
          renderWidth = height * imgRatio;
          offsetX = (width - renderWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    // Use framer motion's onChange to trigger renders dynamically along scroll
    const unsubscribe = frameIndex.on("change", render);

    // Initial render
    render();

    // Re-render on resize
    window.addEventListener('resize', render);

    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', render);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      </div>
    </div>
  );
};

export default ScrollyCanvas;
