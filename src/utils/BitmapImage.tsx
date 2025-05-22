'use client';

import { useEffect, useRef, useState } from 'react';

type BitmapImageProps = {
  src: string;
  alt?: string;
};

export default function BitmapImage({
  src,
  alt = '',
}: BitmapImageProps) {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      imageRef.current = img;
      draw();
    };
  }, [src]);

  const draw = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = containerRef.current;
    const containerWidth = container?.clientWidth || 300;
    const containerHeight = container?.clientHeight || 300;
    const containerRatio = containerWidth / containerHeight;

    const imageRatio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;

    let width, height;

    if (imageRatio > containerRatio) {
      // Imagem mais larga que o container
      height = containerHeight;
      width = height * imageRatio;
    } else {
      // Imagem mais alta que o container
      width = containerWidth;
      height = width / imageRatio;
    }

    if (width <= 0 || height <= 0 || isNaN(width) || isNaN(height)) {
      console.warn('Invalid width/height for bitmap rendering', { width, height });
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const imageData = ctx.createImageData(width, height);
    const d = imageData.data;
    const lum = new Array(Math.floor(width * height));

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.drawImage(imageRef.current, 0, 0, width, height);
    const srcData = tempCtx.getImageData(0, 0, width, height).data;

    for (let i = 0; i < srcData.length; i += 4) {
      const r = srcData[i];
      const g = srcData[i + 1];
      const b = srcData[i + 2];
      const l = 0.299 * r + 0.587 * g + 0.114 * b;
      lum[i / 4] = l;
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = x + y * width;
        const oldPixel = lum[i];
        const newPixel = oldPixel < 128 ? 0 : 255;
        const err = oldPixel - newPixel;

        lum[i] = newPixel;
        const color = newPixel;

        const idx = i * 4;
        d[idx] = color;
        d[idx + 1] = color;
        d[idx + 2] = color;
        d[idx + 3] = 255;

        if (x + 1 < width) lum[i + 1] += err * 7 / 16;
        if (x > 0 && y + 1 < height) lum[i + width - 1] += err * 3 / 16;
        if (y + 1 < height) lum[i + width] += err * 5 / 16;
        if (x + 1 < width && y + 1 < height) lum[i + width + 1] += err * 1 / 16;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  if (!isClient) return null;

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
      aria-label={alt}
      className='bitmap__canvas-box'
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}