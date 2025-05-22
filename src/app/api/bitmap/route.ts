import { NextRequest, NextResponse } from 'next/server';
import { createCanvas, loadImage } from 'canvas';
import axios from 'axios';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const src = searchParams.get('src');

  if (!src) {
    return new NextResponse('Missing src parameter', { status: 400 });
  }

  try {
    const response = await axios.get(src, { responseType: 'arraybuffer' });
    const img = await loadImage(Buffer.from(response.data));

    const width = img.width;
    const height = img.height;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const lum = new Array(width * height);

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
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
        data[idx] = color;
        data[idx + 1] = color;
        data[idx + 2] = color;
        data[idx + 3] = 255;

        if (x + 1 < width) lum[i + 1] += err * 7 / 16;
        if (x > 0 && y + 1 < height) lum[i + width - 1] += err * 3 / 16;
        if (y + 1 < height) lum[i + width] += err * 5 / 16;
        if (x + 1 < width && y + 1 < height) lum[i + width + 1] += err * 1 / 16;
      }
    }

    ctx.putImageData(imageData, 0, 0);

    const buffer = canvas.toBuffer('image/png');

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Failed to process image', { status: 500 });
  }
}