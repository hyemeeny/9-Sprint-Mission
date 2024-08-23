const size = {
  mobile: "375px",
  tablet: "768px",
  pc: "1200px",
};

const theme = {
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.pc})`,
  pc: `(min-width: ${size.pc})`,
  mainBg: "#cfe5ff",
  clrBlue: "#3692ff",
  clrBlueHover: "#1967d6",
  clrRed: "#f74747",
  gray900: "#111827",
  gray800: "#1f2937",
  gray700: "#374151",
  gray600: "#4b5563",
  gray500: "#6b7280",
  gray400: "#9ca3af",
  gray200: "#e5e7eb",
  gray100: "#f3f4f6",
  gray50: "#f9fafb",
};

export default theme;
