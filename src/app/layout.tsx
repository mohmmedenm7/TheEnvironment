import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'صفحة هبوط تفاعلية للأطفال عن البيئة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
