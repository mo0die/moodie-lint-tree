"use client";

import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    // Aggressively preload all images using multiple strategies
    const preloadImages = async () => {
      // Strategy 1: Create invisible Image objects (fastest)
      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't fail on error
          img.src = src;
        });
      });

      // Strategy 2: Create invisible img elements in DOM
      const imgElements = images.map((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.style.position = "absolute";
        img.style.left = "-9999px";
        img.style.width = "1px";
        img.style.height = "1px";
        img.style.opacity = "0";
        document.body.appendChild(img);
        return img;
      });

      // Wait for all images to load (but don't block the UI)
      void Promise.all(imagePromises).then(() => {
        // Clean up DOM elements after loading
        imgElements.forEach((img) => {
          if (document.body.contains(img)) {
            document.body.removeChild(img);
          }
        });
      });
    };

    // Start preloading immediately
    void preloadImages();
  }, [images]);

  return null; // This component doesn't render anything
}
