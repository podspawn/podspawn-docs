export const dynamic = 'force-static';

const SCRIPT_URL =
  'https://raw.githubusercontent.com/podspawn/podspawn/main/scripts/install.sh';

export async function GET() {
  const res = await fetch(SCRIPT_URL);
  if (!res.ok) {
    return new Response('# Failed to fetch install script\nexit 1\n', {
      status: 502,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  const script = await res.text();
  return new Response(script, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  });
}
