import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(45deg, #f8fafc 0%, #e2e8f0 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#1a202c',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
            }}
          >
            Prince Iranzi
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#4a5568',
              margin: '0 0 40px 0',
              maxWidth: '800px',
            }}
          >
            Software Engineer × Digital Marketer
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              fontSize: '24px',
              color: '#718096',
            }}
          >
            <span>React • Next.js • TypeScript</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
