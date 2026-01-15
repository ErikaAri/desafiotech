import "./globals.css";

export const metadata = {
  title: "Desafío Tech",
  description: "Landing Desafío Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

