import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const isDev = process.env.NODE_ENV === 'development';
  const baseUrl = isDev ? 'http://localhost:8080' : 'https://api.caseycapozzi.com';
  return NextResponse.redirect(`${baseUrl}/swagger-ui/index.html`, 302);
}

