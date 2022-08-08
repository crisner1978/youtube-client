export function truncate(string, number) {
  return string.length > number ? string.slice(0, number) + "..." : string
}