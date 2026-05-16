"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 240;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [sequenceFolder, setSequenceFolder] = useState<"sequence" | "sequence1" | null>(null);

  // Track scroll progress within the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to the current frame index
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 569) {
        setSequenceFolder("sequence1");
      } else {
        setSequenceFolder("sequence");
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sequenceFolder) return;

    // Reset loading state when changing folders
    setImagesLoaded(false);

    // Preload images
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to be 3 digits (e.g., 001, 010, 100)
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/${sequenceFolder}/ezgif-frame-${paddedIndex}.jpg`;

      const handleLoad = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };

      img.onload = handleLoad;
      // In case an image fails to load, still increment to avoid getting stuck
      img.onerror = handleLoad;

      images.push(img);
    }

    imagesRef.current = images;
  }, [sequenceFolder]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const render = () => {
      if (!canvasRef.current || !imagesRef.current.length) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Ensure canvas dimensions match its display size
      const { clientWidth, clientHeight } = canvas;
      if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
        canvas.width = clientWidth;
        canvas.height = clientHeight;
      }

      // Get current frame index from framer motion
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(currentIndex.get()) - 1)
      );

      const img = imagesRef.current[frameIndex];

      if (img && img.complete && img.naturalHeight !== 0) {
        // Implement object-fit: cover logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0, 0, img.width, img.height,
          centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
        );
      }
    };

    // Initial render
    render();

    // Re-render when scroll value changes
    const unsubscribe = currentIndex.on("change", render);

    // Re-render on window resize
    window.addEventListener("resize", render);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [imagesLoaded, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* Loading State Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212] text-white">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm font-medium tracking-widest"
            >
              LOADING ASSETS...
            </motion.div>
          </div>
        )}

        {/* Heading Logo */}
        <div className="absolute top-[20px] left-0 w-full flex justify-center z-50 pointer-events-none">
          <img
            src="/logo.png"
            alt="Yash Vijay Sain"
            className="h-[50px] w-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
