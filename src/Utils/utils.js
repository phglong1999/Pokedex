export function parseColor(type) {
  return "var(--root-" + type + ")";
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
