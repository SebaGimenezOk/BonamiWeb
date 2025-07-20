import './globals.css';

export const metadata = {
  title: "BonamiWeb",
  description: "Bonami Retro, música y eventos inolvidables.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
