import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2563EB',
          color: 'white',
          fontSize: 72,
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        The Digital Move
      </div>
    ),
    {
      ...size,
    }
  );
}
