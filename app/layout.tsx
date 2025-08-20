import './globals.css';
export const metadata = {
  description: 'Descripción de mi proyecto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="">
      <body>{children}</body>
    </html>
  );
}

