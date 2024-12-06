import React, { useRef, useState, useLayoutEffect } from 'react';
import * as fabric from 'fabric';

// Define types for the canvas size state
interface CanvasSize {
  width: number;
  height: number;
}

const FabricCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({ width: 0, height: 0 });

  const fabricCanvasRef = useRef<fabric.Canvas | null>(null); // Ref to store fabric canvas instance

  // Update canvas size based on parent container's width
  const updateCanvasSize = () => {
    const parentWidth = containerRef.current?.offsetWidth || 0;
    const parentHeight = (parentWidth * 9) / 16; // Maintaining 16:9 aspect ratio
    setCanvasSize({ width: parentWidth, height: parentHeight });

    // Resize fabric canvas dynamically
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.setWidth(parentWidth);
      fabricCanvasRef.current.setHeight(parentHeight);
    }
  };

  useLayoutEffect(() => {
    // Initialize the fabric canvas only once
    if (canvasRef.current && !fabricCanvasRef.current) {
      const canvas = new fabric.Canvas(canvasRef.current);
      fabricCanvasRef.current = canvas;

      // Add a rectangle object
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'transparent',
        width: 150,
        height: 100,
        stroke: 'black',
        strokeWidth: 2,
      });
      canvas.add(rect);
    }

    // Perform an initial canvas size update
    updateCanvasSize();

    // Update canvas size on window resize or container resize
    window.addEventListener('resize', updateCanvasSize);
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup: remove resize listener and dispose of the fabric canvas instance
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (containerRef.current) {
        resizeObserver.disconnect();
      }
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose(); // Clean up fabric canvas
        fabricCanvasRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-[82%] border border-border-color">
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ width: '100%', height: '100%' }}
      ></canvas>
    </div>
  );
};

export default FabricCanvas;