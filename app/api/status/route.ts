import { NextResponse } from 'next/server';
import dns from 'node:dns';

export const runtime = 'nodejs';

// Prefer IPv4 to avoid misconfigured AAAA/IPv6 paths in some networks.
dns.setDefaultResultOrder('ipv4first');

function sleepReject(timeoutMs: number) {
  return new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('timeout')), timeoutMs);
  });
}

async function fetchWithTimeout(url: string, timeoutMs: number) {
  return await Promise.race([
    fetch(url, { cache: 'no-store' }),
    sleepReject(timeoutMs),
  ]);
}

export async function GET() {
  try {
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrls = isDev
      ? ['http://localhost:8080', 'https://api.caseycapozzi.com']
      : ['https://api.caseycapozzi.com'];

    let lastErr: unknown = null;
    for (const baseUrl of baseUrls) {
      try {
        const url = `${baseUrl}/api/v1/status`;
        const upstream = await fetchWithTimeout(url, isDev ? 1500 : 6000);

        // If the upstream is down (e.g., ELB 503 HTML), return a stable JSON shape for the UI.
        if (
          upstream.status === 503 &&
          (upstream.headers.get('content-type') ?? '').toLowerCase().includes('text/html')
        ) {
          return NextResponse.json({ status: 'Offline', environment: 'unknown' }, {
            status: 503,
            headers: { 'cache-control': 'no-store' },
          });
        }

        const text = await upstream.text();

        return new NextResponse(text, {
          status: upstream.status,
          headers: {
            'content-type': upstream.headers.get('content-type') ?? 'application/json',
            'cache-control': 'no-store',
          },
        });
      } catch (err) {
        lastErr = err;
      }
    }

    throw lastErr;
  } catch {
    return NextResponse.json(
      { status: 'Offline', environment: 'unknown' },
      { status: 503, headers: { 'cache-control': 'no-store' } }
    );
  }
}

