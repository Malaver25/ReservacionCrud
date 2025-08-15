import './globals.css';
export const metadata = {
  title: 'Hostal - Your point',
  description: 'Descripción de mi proyecto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
