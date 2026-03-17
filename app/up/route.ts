export const dynamic = 'force-dynamic';

const SCRIPT_URL =
  'https://raw.githubusercontent.com/podspawn/podspawn/main/scripts/up.sh';

export async function GET() {
  const res = await fetch(SCRIPT_URL, { cache: 'no-store' });
  if (!res.ok) {
    return new Response('#!/bin/sh\necho "Failed to fetch setup script"; exit 1\n', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  const script = await res.text();
  return new Response(script, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=60, s-maxage=60',
    },
  });
}
