export function formatVideoDuration(duration: string): string {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match = duration.match(regex);

  if (!match) {
    return "Duração inválida";
  }

  const hours = match[1] ? parseInt(match[1], 10) : null;
  const minutes = match[2] ? parseInt(match[2], 10) : null;
  const seconds = match[3] ? parseInt(match[3], 10) : null;

  const parts: string[] = [];

  if (hours) parts.push(`${hours}h`);
  if (minutes) parts.push(`${minutes}m`);
  if (seconds) parts.push(`${seconds}s`);

  return parts.join(" ");
}