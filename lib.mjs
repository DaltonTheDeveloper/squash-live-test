// Format a byte count as a short human-readable string.
export function humanBytes(n) {
  if (n >= 1024 * 1024) {
    return Math.round(n / (1024 * 1024)) + " MB";
  }
  return Math.round(n / 1024) + " KB";
}
