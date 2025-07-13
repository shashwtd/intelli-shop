import { NextResponse } from 'next/server';

const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 1000;

const ipRequests = new Map<string, { count: number; timestamp: number }>();

export async function GET(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    const entry = ipRequests.get(ip);

    if (!entry || now - entry.timestamp > WINDOW_MS) {
        ipRequests.set(ip, { count: 1, timestamp: now });
    } else {
        if (entry.count >= RATE_LIMIT) {
            return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
        }
        entry.count += 1;
        ipRequests.set(ip, entry);
    }

    return NextResponse.json({ message: 'pong' });
}