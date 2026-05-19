const IMAGE_MAGIC_BYTES: [number[], string][] = [
  [[0xFF, 0xD8, 0xFF], "image/jpeg"],
  [[0x89, 0x50, 0x4E, 0x47], "image/png"],
  [[0x52, 0x49, 0x46, 0x46], "image/webp"],
  [[0x47, 0x49, 0x46, 0x38], "image/gif"],
];

export function validateImageBuffer(buffer: Buffer): boolean {
  for (const [magic] of IMAGE_MAGIC_BYTES) {
    if (magic.every((byte, i) => buffer[i] === byte)) return true;
  }
  return false;
}

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  maxAttempts: number = 5,
  windowMs: number = 15 * 60 * 1000
): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxAttempts) return false;
  entry.count++;
  return true;
}
