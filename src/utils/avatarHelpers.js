function getInitials(name) {
  if (!name || typeof name !== "string") return "?";
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0]?.toUpperCase() || "?";
  return (words[0][0] + words[1][0]).toUpperCase();
}

function stringToColor(string) {
  if (!string || typeof string !== "string") return "#888"; // fallback color
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).slice(-2);
  }

  return color;
}

export { getInitials, stringToColor };
